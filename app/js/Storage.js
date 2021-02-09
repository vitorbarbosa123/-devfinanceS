const Storage = {
    get() {
        return JSON.parse(localStorage.getItem("dev.fiances:transactions")) || []
    },
    set(transactions) {
        localStorage.setItem("dev.fiances:transactions", JSON.stringify
        (transactions))
    }

}