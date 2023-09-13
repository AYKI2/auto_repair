import styles from './details.module.css';

export default function Details() {
    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <h1>
                    Подробности
                </h1>
                <hr className={styles.formHr} />
            </div>
            <div>
                <p>
                    Используйте форму ниже, чтобы назначить встречу для бесплатной оценки от одного из наших технических специалистов.
                <br/>
                    Во время этой встречи можно договориться о ремонте.
                </p>
                <br/>
            </div>
            <h4>Дополнительные услуги</h4>
            <ul>
                <li>
                    Помощь со страховкой
                </li>
                <li>
                    Принимаются все страховки
                </li>  
                <li>
                    Покрытие аренды и помощь в аренде
                </li>
            </ul>
        </section>
    );
};