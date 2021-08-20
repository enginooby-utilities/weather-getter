"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentTemp2 = exports.getCurrentTemp = void 0;
const axios_1 = __importDefault(require("axios"));
const BASE_URL = "http://api.weatherstack.com";
const API_KEY = "cc2245687c62dfbebe32c319fa8b1a18";
// async version
function getCurrentTemp1(location) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const requestUrl = toRequestUrl(location);
      const response = axios_1.default.get(requestUrl);
      return (yield response).data.current.temperature;
    }
    catch (error) {
      throw new Error('Low level error');
    }
  });
}
exports.getCurrentTemp = getCurrentTemp1;
// callback version
// destructure: in response.data, there is location, current,... objects
function getCurrentTemp2(location, callback) {
  const requestUrl = toRequestUrl(location);
  axios_1.default
    .get(requestUrl)
    .then(response => callback(undefined, response.data))
    // return empty response instead of undefined to avoid error while destructuring
    .catch(error => callback("Something went wrond :'(", {}));
}
exports.getCurrentTemp2 = getCurrentTemp2;
const toRequestUrl = (location) => `${BASE_URL}/current?access_key=${API_KEY}&query=${encodeURI(location)}`;
//# sourceMappingURL=forecast.js.map