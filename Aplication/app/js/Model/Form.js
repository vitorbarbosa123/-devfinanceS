const Form = {
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),
  
    getValues() {
      return {
        description: Form.description.value,
        amount: Form.amount.value,
        date: Form.date.value
      }
    },
  
    validateFields() {
      const { description, amount, date } = Form.getValues()
  
      if (description.trim() === "" ||
        amount.trim() === "" ||
        date.trim() === "") {
        throw new Error("Por favor, preencha todos os campos")
      }
  
    },
  
    formatValues() {
      let { description, amount, date } = Form.getValues()
  
      amount = Utils.formatAmount(amount)
  
      date = Utils.formatDate(date)
  
      return {
        description,
        amount,
        date
      }
    },
  
    saveTransaction(transaction) {
      Transaction.add(transaction)
    },
  
    clearFields() {
      Form.description.value = ""
      Form.amount.value = ""
      Form.date.value = ""
    },
  
    submit(event) {
      event.preventDefault()
  
      try {
        Form.validateFields()
        const transaction = Form.formatValues()
        Form.saveTransaction(transaction)
        Form.clearFields()
        
      } catch (error) {
        alert(error.message)
      }
    }
  }