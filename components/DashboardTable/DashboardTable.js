import Table from "react-bootstrap/Table";
import style from "./dashboard.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch"
import Router from "next/router"

const DashboardTable = (props) => {
  const [appointmentData, setAppData] = useState([]);
  
  useEffect(() => {
    setAppData(props.appointments);
  }, []);

  const appointmentDelete = async (id) => {
    try {
      const res = await fetch(`/api/appointments/${id}`, {
        method: "DELETE",
      });
      Router.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.dashboardContainer}>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Дата</th>
            <th>Имя</th>
            <th>Почта</th>
            <th>Номер Телефона</th>
            <th>Описание</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {appointmentData.map((item, i) => {
            let nonMilTime;
            if (parseInt(item.time.split(" ")[0]) > 12) {
              nonMilTime = `${parseInt(item.time.split(" ")[0]) - 12}:${
                item.time.split(" ")[1]
              } PM`;
            } else {
              nonMilTime = `${item.time.split(" ").join(":")} AM`;
            }
            return (
              <tr>
                <th key={item._id}>{i + 1}</th>
                <th>
                  {item.date.split(" ").join("/")} {nonMilTime}
                </th>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.phonenumber}</th>
                <th>{item.description}</th>
                <th>
                  <DeleteIcon onClick={() => appointmentDelete(item._id)} />
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default DashboardTable;
