"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const forecast_1 = require("./utils/forecast");
const app = express_1.default();
const staticDir = path_1.default.join(__dirname, '../public');
const duiDir = path_1.default.join(__dirname, '../../../dui/');
app.set('view engine', 'hbs');
app.use('/public', express_1.default.static(staticDir));
app.use('/dui', express_1.default.static(duiDir));
app.get('/home', (req, res) => {
    res.render('index', {
        title: "Hieu"
    });
});
app.get('/weather', (req, res) => {
    if (!req.query.location)
        return res.send({ error: 'Location is required.' });
    forecast_1.getCurrentTemp2(req.query.location.toString(), (error, { location, current }) => {
        if (error) {
            res.send({
                error
            });
        }
        else if (!location || !current) {
            res.send({ error: 'Unable to find location :\'(' });
        }
        else {
            res.send({
                location, current
            });
        }
    });
});
app.get('*', (req, res) => {
    res.send("404");
});
app.listen(3001, () => {
    console.log('http://localhost:3001/');
});
//# sourceMappingURL=app.js.map