import path from 'path';
import express, { Application } from 'express'
import { getCurrentTemp, getCurrentTemp2 } from "./utils/forecast"

const app: Application = express();
const staticDir = path.join(__dirname, '../public')
const duiDir = path.join(__dirname, '../../../dui/')

app.set('view engine', 'hbs')
app.use(express.static(staticDir))
app.use('/dui', express.static(duiDir))

app.get('', (req, res) => {
        res.render('index', {
                title: "Hieu"
        })
})

app.get('/weather', (req, res) => {
        if (!req.query.location) {
                return res.send('Location is required.')
        }

        getCurrentTemp2(req.query.location.toString(), (error, { location, current }) => {
                if (error) {
                        res.send({
                                error
                        })
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
// getCurrentTemp2("Binh Duong", (error, { location, current }) => {
//         if (error) {
//                 console.log(error);
//         } else if ({ location, current }) {
//                 console.log('>>>>>>>>>>>>>>>>>> LOCATION <<<<<<<<<<<<<<<<<<<<< ');
//                 console.log(' Name: ', location.name);
//                 console.log(' County: ', location.country);
//                 console.log(' Lat: ', location.lat);
//                 console.log(' Lon: ', location.lon);
//                 console.log('>>>>>>>>>>>>>>>>>> WEATHER <<<<<<<<<<<<<<<<<<<<< ');
//                 console.log('Temperature: ', current.temperature);
//                 console.log('Description: ', current.weather_descriptions[0]);

//                 res.send({ location, current });
//         }
// })

app.listen(3000, () => {
        console.log('Server is up on port 3000')
})

//  getCurrentTemp1("Ha noi") .then(temp => console.log(temp))
