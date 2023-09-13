import style from './hero.module.css';
import Link from "next/link"

const Hero = () => {
    return (
        <section className={style.heroImg}>
            <h1 className={style.heroTitle}>Инновационный авторемонт</h1>
            <p className={style.heroText}>Наша задача — восстановить ваш автомобиль до состояния, которое было при покупке!</p>
            <Link href="/booking">
                <button className={style.button} variant="contained"><a>Закажите бесплатную оценку сейчас!</a></button>
            </Link>
        </section>
    )
}

export default Hero;