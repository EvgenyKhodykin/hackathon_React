/* eslint-disable react/no-unescaped-entities */
import result from '../assets/images/result.jpg'

function MainPage() {
    return (
        <div className='container-xl mt-5'>
            <img src={result} alt='resultSchool' style={{ width: '300px', height: '300px' }} />
            <p className=' mt-5'>
                Добро пожаловать на страницу группы 91 курса Junior Frontend Developer в
                ResultSchool! Здесь собралась команда единомышленников и, в первую очередь,
                увлёченных web разработкой людей. В рамках данного практического задания мы
                постарались воплотить в проекте те знания, которые кропотливо получали в течение
                многих месяцев. Проходи в раздел "Команда" чтобы познакомиться с нами поближе :)
            </p>
            <br />
            <br />
            <p>В данном проекте были использованы следующие технологии:</p>
            <div>
                <button className='btn btn-danger m-2'> HTML </button>
                <button className='btn btn-primary m-2'> CSS </button>
                <button className='btn btn-info m-2'>React </button>
                <button className='btn btn-success m-2'>React Router v.6 </button>
                <button className='btn btn-warning m-2'> Bootstrap </button>
            </div>
        </div>
    )
}

export default MainPage
