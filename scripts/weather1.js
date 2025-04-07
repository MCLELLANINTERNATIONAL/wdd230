const lat = 55.9533;  // Latitude for Edinburgh, Scotland
const lon = -3.1883;  // Longitude for Edinburgh, Scotland

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${55.9533}&lon=${-3.1883}&units=imperial&appid=dd59263d60b444b950e68aa03f063955 `;

const myTown = document.querySelector['#town'];
const myGraphic = document.querySelector['#graphic'];
const myDescription = document.querySelector['#description'];
const myTemperature = document.querySelector['#temperature'];
const myTime = document.querySelector['#time'];
const myWind = document.querySelector['#wind'];