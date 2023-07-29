// import EvgenyPhotos from '../assets/e33882167e2d43a0971c'
// import AndreyPhotos from '../assets/78e6b4902884fb130fd7'

const members = [
    {
        _id: 'e33882167e2d43a0971c',
        name: 'Евгений Ходыкин',
        age: 35,
        about: 'Крутой перец',
        role: 'Team Leader',
        photo: {
            main: '../assets/e33882167e2d43a0971c/main.jpg',
            others: [
                '../assets/e33882167e2d43a0971c/1.jpg',
                '../assets/e33882167e2d43a0971c/2.JPG',
                '../assets/e33882167e2d43a0971c/3.JPG'
            ]
        }
    },
    {
        _id: '78e6b4902884fb130fd7',
        name: 'Андрей Назаренко',
        age: 37,
        about: 'Реальный кент',
        role: 'Software Developer',
        photo: {
            main: '../assets/78e6b4902884fb130fd7/main.jpg',
            others: [
                '../assets/78e6b4902884fb130fd7/1.jpg',
                '../assets/78e6b4902884fb130fd7/2.jpg',
                '../assets/78e6b4902884fb130fd7/3.jpg'
            ]
        }
    }
]

// if (!localStorage.getItem('members')) {
//     localStorage.setItem('members', JSON.stringify(members))
// }

const fetchAll = () =>
    new Promise(resolve => {
        window.setTimeout(function () {
            resolve(members)
        }, 1500)
    })

const getById = id =>
    new Promise(resolve => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem('members')).find(member => member._id === id))
        }, 1500)
    })

const API = {
    fetchAll,
    getById
}

export default API
