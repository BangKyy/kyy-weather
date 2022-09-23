const key = '0889861ef80103de7c027ed0763ac798';
//const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=Blitar&appid=0889861ef80103de7c027ed0763ac798';

//fetch(baseURL)
//    .then((data) => { console.log('response', data.json()) })
//    .catch((error) => {
//        console.log(error);
//    });

const requestCity = async (city)=>{
    const baseURL = `https://api.openweathermap.org/data/2.5/weather`;
    const query = `?q=${city}&appid=${key}`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    return data;
}