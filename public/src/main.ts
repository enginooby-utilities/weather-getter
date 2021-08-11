const eLocationInput = document.querySelector('#location') as HTMLInputElement;
const eLocationOuput = document.querySelector('#location-output') as HTMLElement;
const eImg = document.querySelector('img') as HTMLImageElement;
const eDescription = document.querySelector('#description') as HTMLElement;
const eTemperature = document.querySelector('#temperature') as HTMLElement;
const eWind = document.querySelector('#wind') as HTMLElement;
const ePrecip = document.querySelector('#precip') as HTMLElement;
const ePressure = document.querySelector('#pressure') as HTMLElement;

document.querySelector('#checkBtn').addEventListener('click', onCheckBtnClick);
function onCheckBtnClick() {
        eLocationOuput.innerText = 'Loading...';
        eDescription.innerText = '-';
        eTemperature.innerText = '-';
        eWind.innerText = '-';
        ePrecip.innerText = '-';
        ePressure.innerText = '-';

        fetch(`/home/weather?location=${encodeURI(eLocationInput.value)}`).then(response => {
                response.json().then((data) => {
                        if (data.error) {
                                eLocationOuput.innerText = data.error;
                        } else if (!data.location) {
                                eLocationOuput.innerText = 'Unable to find location :\'('
                        }
                        else {
                                eLocationOuput.innerText = `${data.location.name} - ${data.location.country}`;

                                const dc = data.current;
                                eImg.src = dc.weather_icons[0];
                                eDescription.innerText = dc.weather_descriptions[0];
                                eTemperature.innerHTML = dc.temperature + ' &deg;C';
                                eWind.innerText = dc.wind_speed;
                                ePrecip.innerText = dc.precip;
                                ePressure.innerText = dc.pressure;
                        }
                })
        })
}

