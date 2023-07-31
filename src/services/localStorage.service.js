function get() {
    const favorites = JSON.parse(localStorage.getItem("favorites"))
    return favorites
}
function add(id) {
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
}
function remove(id) {
    const idArray = JSON.parse(localStorage.getItem("favorites"))
    const newIdArray = idArray.filter((bookmark) => bookmark !== id)
    localStorage.setItem("favorites", JSON.stringify(newIdArray))
    return newIdArray
}

const localStorageService = {
    get,
    add,
    remove,
}

export default localStorageService
