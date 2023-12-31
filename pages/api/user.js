import nextConnect from "next-connect"
import { withSession } from "next-session"
import bcrypt from "bcryptjs"
import middleware from "../../middlewares/middleware"
import sessionOptions from "../../middlewares/session-options"
import { nanoid } from "nanoid"

const handler = nextConnect()

handler.use(middleware)

handler.get((req, res) => {
    res.json({ user: req.user })
})

handler.post(async (req, res) => {
    const { username, password } = req.body

    if ((await req.db.collection("users").countDocuments({ username })) > 0) {
        res.status(403).send("Имя пользователя уже используется.")
        return
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await req.db.collection("users").insertOne({
        _id: nanoid(12),
        username: username,
        password: hashedPassword
    })
        .then(({ ops }) => ops[0])
    
    req.Login(user, (err) => {
        if (err) throw err
        res.status(201).json({user: extractUser(req)})
    })
})

export default handler