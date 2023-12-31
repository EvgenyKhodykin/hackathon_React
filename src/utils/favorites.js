const favorites = {
    get: () => {
        const favorites = JSON.parse(localStorage.getItem("favorites"))
        return favorites
    },
    add: (id) => {
        let idArray = []
        if (!localStorage.getItem("favorites")) {
            localStorage.setItem("favorites", "")
            idArray.push(id)
            localStorage.setItem("favorites", JSON.stringify(idArray))
        } else {
            idArray = JSON.parse(localStorage.getItem("favorites"))
            idArray.push(id)
            localStorage.setItem("favorites", JSON.stringify(idArray))
        }
        const favorites = localStorage.getItem("favorites")
        return favorites
    },
    remove: (id) => {
        const idArray = JSON.parse(localStorage.getItem("favorites"))
        const newIdArray = idArray.filter((bookmark) => bookmark !== id)
        localStorage.setItem("favorites", JSON.stringify(newIdArray))
        return newIdArray
    },
}

export default favorites
