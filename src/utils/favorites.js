const favorites = {
    add: (id) => {
        if (!localStorage.getItem("favorites")) {
            localStorage.setItem("favorites")
        }
        const favorites = JSON.parse(localStorage.getItem("favorites"))
        favorites.push(id)
        JSON.stringify(favorites)
        localStorage.setItem("favorites", favorites)
    },
    remove: (id) => {
        const favorites = JSON.parse(localStorage.getItem("favorites"))
        favorites.filter((f) => f !== id)
        JSON.stringify(favorites)
        localStorage.setItem("favorites", favorites)
    },
}

export default favorites
