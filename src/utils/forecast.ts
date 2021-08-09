import axios from "axios";

const BASE_URL = "http://api.weatherstack.com"
const API_KEY = "cc2245687c62dfbebe32c319fa8b1a18"

// async version
async function getCurrentTemp1(location: string): Promise<number> {
        try {
                const requestUrl = toRequestUrl(location)
                const response = axios.get(requestUrl);
                return (await response).data.current.temperature;
        } catch (error) {
                throw new Error('Low level error')
        }
}

// callback version
// destructure: in response.data, there is location, current,... objects
function getCurrentTemp2(location: string, callback: (error, { location, current }: any) => any) {
        const requestUrl = toRequestUrl(location)
        axios
                .get(requestUrl)
                .then(response => callback(undefined, response.data))
                // return empty response instead of undefined to avoid error while destructuring
                .catch(error => callback("Failed to make request", {}))
}

const toRequestUrl = (location: string) => `${BASE_URL}/current?access_key=${API_KEY}&query=${encodeURI(location)}`;

export { getCurrentTemp1 as getCurrentTemp, getCurrentTemp2 }