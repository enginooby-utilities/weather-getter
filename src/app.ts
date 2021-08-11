import path from 'path';
import express, { Application } from 'express'
import { getCurrentTemp, getCurrentTemp2 } from "./utils/forecast"

const app: Application = express();
const staticDir = path.join(__dirname, '../public')
const duiDir = path.join(__dirname, '../../../dui/')

app.set('view engine', 'hbs')
app.use(express.static(staticDir))
app.use('/dui', express.static(duiDir))

app.get('/home', (req, res) => {
        res.render('index', {
                title: "Hieu"
        })
})

app.get('/weather', (req, res) => {
        if (!req.query.location) return res.send({ error: 'Location is required.' })

        getCurrentTemp2(req.query.location.toString(), (error, { location, current }) => {
                if (error) {
                        res.send({
                                error
                        })
                } else if (!location || !current) {
                        res.send({ error: 'Unable to find location :\'(' })
                }
                else {
                        res.send({
                                location, current
                        })
                }
        })
})

app.get('*', (req, res) => {
        res.send("404")
})

app.listen(3001, () => {
        console.log('http://localhost:3001/')
})
