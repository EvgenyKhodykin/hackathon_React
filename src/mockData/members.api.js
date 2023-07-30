import * as EvgenyPhotos from '../assets/e33882167e2d43a0971c'
import * as AndreyPhotos from '../assets/78e6b4902884fb130fd7'

const members = [
    {
        _id: 'e33882167e2d43a0971c',
        name: 'Евгений Ходыкин',
        age: 35,
        about: 'Ответственный душнила...',
        role: 'Team Leader',
        technologies: {
            html: 49,
            css: 45,
            js: 55,
            react: 50
        },
        photo: {
            main: EvgenyPhotos.Emain,
            others: [EvgenyPhotos.E1, EvgenyPhotos.E2, EvgenyPhotos.E3]
        },
        github: 'EvgenyKhodykin'
    },
    {
        _id: '78e6b4902884fb130fd7',
        name: 'Андрей Назаренко',
        age: 37,
        about: 'Решит любую свою же проблему...',
        role: 'Software Developer',
        technologies: {
            html: 49,
            css: 45,
            js: 55,
            react: 50
        },
        photo: {
            main: AndreyPhotos.Amain,
            others: [AndreyPhotos.A1, AndreyPhotos.A2, AndreyPhotos.A3]
        },
        github: 'Andy-Naz'
    }
]

// if (!localStorage.getItem('members')) {
//     localStorage.setItem('members', JSON.stringify(members))
// }

const fetchAll = () =>
    new Promise(resolve => {
        window.setTimeout(function () {
            resolve(members)
        }, 1000)
    })

const getById = id =>
    new Promise(resolve => {
        window.setTimeout(function () {
            resolve(members.find(member => member._id === id))
        }, 1000)
    })

const API = {
    fetchAll,
    getById
}

export default API
