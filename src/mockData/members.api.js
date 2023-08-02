import * as EvgenyPhotos from "../assets/e33882167e2d43a0971c"
import * as AndreyPhotos from "../assets/78e6b4902884fb130fd7"

const members = [
    {
        _id: "e33882167e2d43a0971c",
        name: "Евгений Ходыкин",
        age: 35,
        about: "Ответственный душнила...",
        role: "Team Leader",
        techs: [
            {
                name: "HTML",
                progress: 49,
                color: "bg-danger",
            },
            {
                name: "CSS",
                progress: 45,
                color: "bg-success",
            },
            {
                name: "JavaScript",
                progress: 55,
                color: "bg-warning",
            },
            {
                name: "React",
                progress: 50,
                color: "bg-primary",
            },
        ],
        photo: {
            main: EvgenyPhotos.Emain,
            others: [EvgenyPhotos.E1, EvgenyPhotos.E2, EvgenyPhotos.E3],
        },
        social: {
            telegram: "https://web.telegram.org/",
            linkedin: "https://www.linkedin.com/",
            github: "https://github.com/",
        },
    },
    {
        _id: "78e6b4902884fb130fd7",
        name: "Андрей Назаренко",
        age: 37,
        about: "Решит любую свою же проблему...",
        role: "Software Developer",
        techs: [
            {
                name: "HTML",
                progress: 65,
                color: "bg-danger",
            },
            {
                name: "CSS",
                progress: 55,
                color: "bg-success",
            },
            {
                name: "JavaScript",
                progress: 30,
                color: "bg-warning",
            },
            {
                name: "React",
                progress: 30,
                color: "bg-primary",
            },
        ],
        photo: {
            main: AndreyPhotos.Amain,
            others: [AndreyPhotos.A1, AndreyPhotos.A2, AndreyPhotos.A3],
        },
        social: {
            telegram: "https://web.telegram.org/",
            linkedin: "https://www.linkedin.com/",
            github: "https://github.com/",
        },
    },
]

if (!localStorage.getItem('favorites')) {
    localStorage.setItem("favorites", JSON.stringify([]))
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(members)
        }, 1000)
    })

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(members.find((member) => member._id === id))
        }, 1000)
    })

const API = {
    fetchAll,
    getById,
}

export default API
