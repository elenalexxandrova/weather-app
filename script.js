const apiKey = '28043923218b8706352f12a4a68539e1';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchInput = document.querySelector('.enter_location');
const searchButton = document.querySelector('.search_btn');


const weatherResponce = document.querySelector('.weather_responce');
const error = document.querySelector('.error');

async function getWeather(city) { //объявляем асинхронную функцию
    //Типичный запрос с помощью fetch состоит из двух операторов await:
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`); //завершается с заголовками ответа
    if(response.status === 404) {
        weatherResponce.style.display = 'none';
        error.style.display = 'block';
    }
    
    const data = await response.json(); // читает тело ответа в формате JSON
        console.log(data, "data");
    //динамически меняем элементы в зависимости от ответа

    //находим в дом дереве элемент с классом сити нэйм и записываем внутрь html тега данные с ответа
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.degree').innerHTML = Math.round(data.main.temp) + "&#8451";

    weatherResponce.style.display = 'block';
    error.style.display = 'none';
}

//вообще, эта ф-я чекпогода должна вызываться когда нажиается кнопка поиска и передавать то что написано в инпуте
//реализация...
//на кнопку нужно повесить слушатель событий на действие клик, и по клику должна вызываться эта ф-я чекпогода, и в нее нужно передавать значение, которое введено в инпуте
//и после всего надо инпут очистить
searchButton.addEventListener('click', () => {
    getWeather(searchInput.value);
    searchInput.value = '';
});
