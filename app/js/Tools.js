const Utils = {
    formatCurrency(value) {
      value = String(value).replace(/\D/g, "")
  
      value = Number(value) / 100
  
      value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })
  
      return value
  
    },
  
    formatCurrencyTotal(value) {
      const signal = value >= 0 ? "" : "-"
  
      value = String(value).replace(/\D/g, "")
  
      value = Number(value) / 100
  
      value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })
  
  
      return `${signal} ${value}`
    },
  
    formatAmount(value) {
      value = value * 100
      return Math.round(value)
    },
  
    formatDate(date) {
      const splittedDate = date.split('-')
  
      return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
    }
  }
  