const Transaction = {
    all: Storage.get(),
  
    add(transaction) {
      Transaction.all.push(transaction)
  
      App.reload()
    },
  
    remove(index) {
      Transaction.all.splice(index, 1)
  
      App.reload()
    },
  
    incomes() {
      // Soma das entradas
      let income = 0
  
      Transaction.all.forEach(transaction => {
        if (transaction.amount > 0) {
          income += transaction.amount
        }
      })
      return income
    },
  
    expenses() {
      // Somar as saidas
      let expense = 0
  
      Transaction.all.forEach(transaction => {
        if (transaction.amount < 0) {
          expense += transaction.amount
        }
      })
      return expense
    },
  
    total() {
      // Entradas menos as Saidas
      return Transaction.incomes() + Transaction.expenses()
    }
  }
  

