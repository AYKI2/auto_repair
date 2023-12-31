import React from "react";
import style from './form.module.css';
import { Button } from '@material-ui/core'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      messageLength: 0,
      status: ""
    };
  }

  handleMessageChange = (e) => {
    this.setState({ messageLength: e.target.value.length })
  }

  handleFormSubmit = (e) => {
    this.setState({ messageLength: 0 });
  }

  render() {
    const { status } = this.state;
    return (
      <div className={style.formDiv} id="contact-section">
        <div className={style.heading}>
          <h1>Contact Us</h1>
          <hr className={style.formHr}/>
        </div>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xgennnag"
          method="POST"
          className={style.contactForm}
        >
          {/* <!-- add your custom form HTML here --> */}
          <label className={style.contactLabel}>Почта:</label>
          <input type="email" name="email" placeholder="Email" className={style.contactInput}/>
          <label className={style.contactLabel}>Сообщение:</label>
          <textarea name="message" id="" cols="30" rows="10" maxLength={800} onChange={() => this.handleMessageChange(event)} placeholder="Писать здесь" className={`${style.contactInput} ${style.contactTextarea}`}></textarea>
          <p className={`${style.formCharCounter} ${style.contactInput}`}>{this.state.messageLength}/800</p>
          {status === "SUCCESS" ? <p className={`${style.contactInput} ${style.submitMessage}`}>Сообщение отправлено!</p> : <button className={style.contactSubmit} onClick={() => this.handleFormSubmit(event)}>Отправить сообщение</button>}
          {status === "ERROR" && <p className={`${style.contactInput} ${style.submitMessage}`}>Ой! Была допущена ошибка.</p>}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}