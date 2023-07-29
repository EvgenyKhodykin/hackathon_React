/* eslint-disable react/no-unescaped-entities */
import result from '../assets/images/result.jpg'
import Breadcrumbs from '../components/Breadcrumbs'

function MainPage() {
    return (
        <>
            <Breadcrumbs />
            <div className='container-xl mt-5'>
                <a href='https://result.school/' title='link to ResulSchool page'>
                    <img
                        src={result}
                        className='resultImage'
                        alt='resultSchool'
                        style={{ width: '300px', height: '300px' }}
                    />
                </a>

                <p className='mt-5'>
                    Добро пожаловать на страницу 91-й группы курса Junior Frontend Developer в
                    &nbsp;
                    <a href='https://result.school/'>ResultSchool!</a> Здесь собралась команда
                    единомышленников и, в первую очередь, увлечённых web-разработкой людей. В рамках
                    данного практического задания мы постарались воплотить в проекте те знания,
                    которые кропотливо получали в течение многих месяцев. Переходи в раздел
                    "Команда", чтобы познакомиться с нами поближе :)
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
        </>
    )
}

export default MainPage
