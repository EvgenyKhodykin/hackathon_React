function set() {
    const favorites = localStorage.setItem("favorites", JSON.stringify([]))
    return favorites
}

function get() {
    const favorites = JSON.parse(localStorage.getItem("favorites"))
    return favorites
}

function add(id) {
    const idArray = JSON.parse(localStorage.getItem("favorites"))
    idArray.push(id)
    localStorage.setItem("favorites", JSON.stringify(idArray))
    return idArray
}

function remove(id) {
    const idArray = JSON.parse(localStorage.getItem("favorites"))
    const newIdArray = idArray.filter((bookmark) => bookmark !== id)
    localStorage.setItem("favorites", JSON.stringify(newIdArray))
    return newIdArray
}

const localStorageService = {
    set,
    get,
    add,
    remove,
}

export default localStorageService
