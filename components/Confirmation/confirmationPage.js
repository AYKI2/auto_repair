import style from "./confirmation.module.css";
import { useEffect, useState } from "react"

export default function ConfirmationPage() {
  // const [lastAppointment, setLast] = useState({})
  
  // useEffect(() => {
  //   API.getLastAppointment().then(result => {
  //     setLast(result.data[0])
  //   })
  // }, [])

  return (
    <div className={style.confirmationContainer}>
      <h1>Успешно забронировано!</h1>
      <div className={style.confirmationHr}></div>
      <p>Спасибо, что забронировали встречу с нами! Ваша запись подтверждена!</p>
      <div className={style.details}>
        {/* <p><strong>Confirmation Number:</strong> {lastAppointment._id} </p>
        <p><strong>Date:</strong> {lastAppointment.date.split(' ').join('/')}   </p>
        <p><strong>Time:</strong> {lastAppointment.time.split(' ').join(':')} </p> */}
        <p><strong>Location:</strong><a href="https://go.2gis.com/l9wwv" target="_blank"> Улица Абая 33, ​Первомайский район, Бишкек </a> </p>
        <p>А пока, если вам что-нибудь понадобится, позвоните нам по телефону (501) 676-801 или напишите нам по адресу: <a href="mailto:riki_chap@gmail.com">riki_chap@gmail.com</a>. </p>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const res = await fetch("http://localhost:3000/api/lastappointment")
//   const result = await res.json()

//   return {
//     props:  result.data  
//   }
// }