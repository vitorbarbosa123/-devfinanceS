

const App = {
    init() {
        Transaction.all.forEach(DOM.addTransaction)

        DOM.uptadeBalance()

        Storage.set(Transaction.all)
    },
    reload() {
        DOM.clearTransactions()
        App.init()
    },
}

App.init()