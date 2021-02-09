const App = {

    init() {
  
      Transaction.all.forEach((transaction, index) => {
        DOM.addTransaction(transaction, index)
      })
  
      DOM.updateBalance()
  
      Storage.set(Transaction.all)
  
      
  
    },
  
    reload() {
      DOM.clearTransactions()
      App.init()
    }
  }
  App.init()