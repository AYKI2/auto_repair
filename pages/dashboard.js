import Head from "next/head";
import Link from "next/link"
import DashboardTable from '../components/DashboardTable/DashboardTable';
import BlockoutTable from '../components/BlockoutTable/BlockoutTable';
import EmployeeLogoutBtn from '../components/EmployeeLogoutButton/logoutBtn';
import style from './dashboard.module.css';
import { useCurrentUser } from "../lib/hooks"
import dbConnect from "../util/dbConnect"
import Appointment from "../models/appointment"
import Blockout from "../models/blockout"
import Loader from "../components/Loader"

export default function Dashboard({ appointments, blockouts }) {
  const [user, {mutate}] = useCurrentUser()
  
  // useEffect(() => {
  //   if (!user) {
  //     Router.push("/login")
  //   }
  // }, [user]);

  return (
    <div className={style.dashboardContainer}>
      <Head>
        <title>Панель управления сотрудника</title>
        <link
          rel="shortcut icon"
          type="img/png"
          href="/images/Innovation_Logo-no-bg.png"
        />
        <link href="https://go.2gis.com/l9wwv" rel="stylesheet"></link>
      </Head>
      {user ? (
        <>
          <EmployeeLogoutBtn />
          <h2>Записи:</h2>
          <hr className={style.dashboardHr}/>
        <DashboardTable appointments={appointments}/>
          <h2>Заблокированные даты:</h2>
          <hr className={style.dashboardHr}/>
          <BlockoutTable blockouts={blockouts} />
        </>
      ) : (
          <div className={style.loader}>
            <Loader />
            <Link href="/login"><a className={style.link}>Авторизоваться</a></Link>
          </div>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect()

  const result = await Appointment.find({})
  const appointments = result.map(doc => {
    const appointment = doc.toObject()
    appointment._id = appointment._id.toString()
    return appointment
  })

  const result2 = await Blockout.find({})
  const blockouts = result2.map(doc => {
    const blockout = doc.toObject()
    blockout._id = blockout._id.toString()
    return blockout
  })
  
  return {props: {appointments: appointments, blockouts: blockouts}}
}
