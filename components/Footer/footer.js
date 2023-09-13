import styles from "./footer.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link'

export default function Foooter() {
    return (
        <div className={styles.mainfooter}>
            <Container>
            <Row className={styles.bizInfo}>
                    {/* Column 1 */}
                    <Col lg={4} sm={12}>
                        <h4 className={styles.heading}>Рики Чап</h4>
                        <div>
                        <ul>
                            <a href="https://go.2gis.com/l9wwv" target="_blank">
                                <li>ул. Абая 33</li>
                                <li>г. Бишкек, Кыргызстан</li>
                            </a>
                            <li>Часы: с 06:00 до 21:00 пн-вс</li>
                        </ul>
                        </div>
                    </Col>
                    {/* Column 2 */}
                    <Col lg={4} sm={6}>
                        <h4 className={styles.heading}>Услуги</h4>
                        <ul>
                            <li>Ремонт вмятин без покраски</li>
                            <li>Помощь в аренде</li>
                            <li>Помощь в страховке</li>
                        </ul>
                    </Col>
                    {/* Column 3 */}
                    <Col lg={4} sm={6}>
                        <h4 className={styles.heading}>Контактная информация</h4>
                        <ul>
                            <li>(550) 539-818 - Менеджер</li>
                            <li><a href="mailto:riki_chap@gmail.com">riki_chap@gmail.com</a></li>
                            <li><a href="https://www.facebook.com/riki_chap/" target="_blank">Посетите нас на Facebook!</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className={styles.footer}>
                            &copy;2023 Инновационный ремонт автомобилей | Все права защищены | <Link href="/login"><a className={styles.employee}>Вход для сотрудников</a></Link> 
                        </p>
                    </Col>
                </Row>        
            </Container>
        </div>
    )
}