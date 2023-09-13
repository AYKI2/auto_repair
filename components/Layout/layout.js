import Head from 'next/head';
import Link from 'next/link';
import Header from '../Header/Header';
import Footer from '../Footer/footer';
import styles from './layout.module.css';

export default function Layout({ children, employee, home }) {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Рики Чап поможет вернуть вашему автомобилю состояние, которое было при покупке. Мы работаем, чтобы вернуть ценность вашему автомобилю. Благодаря опытным специалистам, работающим с вашим автомобилем, мы можем гарантировать, что ваш автомобиль в надежных руках. Мы предоставляем специальные скидки для тех, кто платит из своего кармана. Есть вмятина, мы их тоже исправим! Свяжитесь с нами по любым вопросам или проблемам! Ключевые слова: автомобиль, ремонт, повреждение, авария, авария, столкновение, бесплатно, скидка." />
                <link
                    href="https://fonts.googleapis.com/css2?family=Chau+Philomene+One&display=swap"
                    rel="stylesheet"
                ></link>
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap" rel="stylesheet"></link>
                <link
                    rel="shortcut icon"
                    type="img/png"
                    href="/images/Innovation_Logo-no-bg.png"
                />
                    <meta property="og:image" content="../../public/images/Capture.PNG" />
            </Head>
            {!employee ? (
                <>
                <Header home={home}/>
                <main>{ children }</main>
                <Footer />
                </>
            ) : (
                <>
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Назад</a>
                        </Link>
                    </div>
                    <main>{ children }</main>
                </>
            )}
            
        </div>
    );
}