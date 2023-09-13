import styles from './ourTeam.module.css';

export default function OurTeam() {
    return (
        <div className={styles.ourTeamBody}>
            <div className={styles.heading}>
                <h1>Наша команда</h1>
                <hr className={styles.ourTeamHr}/>
            </div>
            <div className={styles.employees}>
                <div className={styles.row}>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='/images/Donald.png' alt='Team member 1'/>
                        </div>
                        <div className={styles.details}>
                            <h4>Алик уулу Кайрат</h4>
                            <p>
                                Владелец
                            </p>
                        </div>
                    </div>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='/images/Aubrey-Plaza.jpg' alt='Team member 2'/>
                        </div>
                        <div className={styles.details}>
                            <h4>Наргозиев Эдилбек</h4>
                            <p>
                                Менеджер
                            </p>
                        </div>                  
                    </div>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='/images/brad.jpg' alt='Team member 3'/>
                        </div>
                        <div className={styles.details}>
                            <h4>Абдухамитов Исхак</h4>
                            <p>
                                Работник
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='/images/elon-musk.jpg' alt='Team member 4'/>
                        </div>
                        <div className={styles.details}>
                            <h4>Сергей Михайлович</h4>
                            <p>
                                Автоэлектрик
                            </p>
                        </div>
                    </div>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='/images/Rashida_Jones.jpg' alt='Team member 5'/>
                        </div>
                        <div className={styles.details}>
                            <h4>Абибила уулу Жанарбек</h4>
                            <p>
                                Практикант
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}