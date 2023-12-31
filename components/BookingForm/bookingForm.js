import style from './form.module.css';
import DatePicker from '../DatePicker/DatePicker';
import Router from "next/router"

export default class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phoneNumber: "",
            emailAddress: "",
            messageLength: 0,
            description: "",
            status: "",
            selectedDate: "",
            selectedTime: ""
        };
    }

    //When you submit the form, pass the state key/value pairs into the api function
    handleFormSubmit = (e) => {
        e.preventDefault()
        const newAppointment = {
            name: this.state.name,
            email: this.state.emailAddress,
            phonenumber: this.state.phoneNumber,
            description: this.state.description,
            date: this.state.selectedDate,
            time: this.state.selectedTime
        }
        this.createAppointment(newAppointment)
        //Reset the character counter to 0
        this.setState({ messageLength: 0 });
    }

    createAppointment = async (newAppointment) => {
        try {
            const res = await fetch("/api/appointments/appointment", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newAppointment)
            })
            setTimeout(() => {
                Router.push("/confirmation")
            }, 5000)
        } catch (err) {
            console.log(err)
        }
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleEmailChange = (e) => {
        this.setState({ emailAddress: e.target.value });
    }

    handlePhoneChange = (e) => {
        this.setState({ phoneNumber: e.target.value });
    }

    handleMessageChange = (e) => {
        this.setState({ description: e.target.value });
        this.setState({ messageLength: e.target.value.length })
    }

    //Takes in the date passed by the child compononet
    setParentDateState = (date) => {
        //Split it into an array
        let dateArr = date.split(' ');
        //Holder
        let dateSelect = [];
        //Add the first 3 indexes to the holder
        for(let i = 0; i < 3; i++) {
            dateSelect.push(dateArr[i]);
        }
        //Hold the last two in another holder
        let timeSelect = dateArr[3] + ' ' + dateArr[4];
        //Set the respective state
        this.setState({ selectedTime: timeSelect });
        this.setState({ selectedDate: dateSelect.join(' ') });
    }

    render() {
        return (
            <div className={style.formDiv}>
                <div className={style.heading}>
                    <h1>Закажите оценку</h1>
                    <hr className={style.formHr} />
                </div>
                         <form
                                className={style.form}
                                onSubmit={this.submitForm}
                            >
                                <label className={style.formLabel}>Имя:<strong>*</strong></label>
                                <input className={style.formInput} type='text' placeholder='Name' onChange={(e) => this.handleNameChange(e)}></input>
                                <label className={style.formLabel}>Электронная почта:<strong>*</strong></label>
                                <input className={style.formInput} type='text' placeholder='Email Address' onChange={(e) => this.handleEmailChange(e)}></input>
                                <label className={style.formLabel}>Номер телефона:<strong>*</strong></label>
                                <input className={style.formInput} type='text' placeholder='Phone Number' onChange={(e) => this.handlePhoneChange(e)}></input>
                                <label className={style.formLabel}>Описание проблемы:</label>
                                <textarea className={`${style.formInput} ${style.formTextArea}`} type='text' onChange={() => this.handleMessageChange(event)} placeholder='Пожалуйста, дайте краткое описание' cols="30" rows="5" maxLength={500}></textarea>
                                <p className={`${style.formCharCounter} ${style.formInput}`}>{this.state.messageLength}/300</p>
                                <label className={style.formLabel}>Выберите дату и время:<strong>*</strong></label>
                                <div className={`${style.dateDiv} ${style.dateInput}`}>
                                    <DatePicker blockouts={this.props.blockouts}  appointments={this.props.appointments} setParentDateState={this.setParentDateState} />
                                </div>
                        
                                <button className={style.bookingSubmit} onClick={() => this.handleFormSubmit(event)}>Отправить</button>
                            </form>
            </div>
        );
    };
};