import styles from "./about.module.css";
import Carousel from "react-bootstrap/Carousel";

export default function About() {
  return (
    <div className={styles.aboutBody} id="about-section">
      <div className={styles.heading}>
        <h1>О нас</h1>
        <hr className={styles.aboutHr} />
      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>
            Рики Чап поможет вернуть вашему автомобилю первоначальный вид.
            предгрозовое состояние. Мы работаем над тем, чтобы вернуть ценность вашему автомобилю с помощью ремонта вмятин без покраски (PDR).
            Благодаря опытным специалистам, работающим с вашим автомобилем, мы можем
            гарантия, что ваш автомобиль в надежных руках.
          </p>
          <p>
            <span className={styles.boldText}>
            У вас нет страховки? Без проблем!
            </span>{" "}
            Мы предоставляем специальные скидки для тех, кто платит из своего кармана.
          </p>
          <p>Есть вмятина, мы их тоже исправим! <br /> <br />
            <strong>Режим работы:</strong> Пн-Вс с 06:00 - 21:00 <br />
            <strong>Location: </strong>
            <a href="https://go.2gis.com/l9wwv" target="_blank">
              ​Улица Абая 33, ​Первомайский район, Бишкек
            </a>
          </p>
          <p>
              Пожалуйста, <span><a className={`${styles.anchor} ${styles.boldText}`} href="#contact-section">свяжитесь с нами</a></span> с любыми вопросами или проблемами.
          </p>
        </div>
      </div>
      
          <div className={styles.carouselContainer}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/beforeAfter/beforeAfter1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/beforeAfter/beforeAfter2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/beforeAfter/beforeAfter3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          </div>
    </div>
  );
}
