const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AppointmentSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Имя обязательно!"
    },
    email: {
        type: String,
        trim: true,
        match: [/.+@.+\..+/, "Пожалуйста, введите действительный адрес электронной почты"],
        required: "Адрес электронной почты обязателен!"
    },
    phonenumber: {
        type: String,
        trim: true,
        required: "Пожалуйста, укажите свой номер телефона!"
    },
    description: {
        type: String,
        trim: true,
        maxlength: 300
    },
    date: {
        type: String,
        required: "Обязательно укажите дату!"
    },
    time: {
        type: String, 
        required: "Должно быть указано время"
    }
})

class Appointment {
    constructor({ id, name, email, phonenumber, description, date, time}) {
        this.id = id
        this.name = name
        this.email = email
        this.phonenumber = phonenumber
        this.description = description
        this.date = date
        this.time = time
    }
}

AppointmentSchema.loadClass(Appointment)

module.exports = mongoose.models.Appointment || mongoose.model("Appointment", AppointmentSchema)