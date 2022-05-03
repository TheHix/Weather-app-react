const URL = {
    CURRENT: 'https://api.openweathermap.org/data/2.5/weather',
    TIME_INTERVALS: 'https://api.openweathermap.org/data/2.5/forecast',
    API_KEY: '6788f347ae49d474bc7fb1bd986d7c01',
};

export async function getResultsNowDetalis(city: string) {
    if (!city) return;

    try {
        const response = await fetch(
            `${URL.CURRENT}?q=${city}&appid=${URL.API_KEY}`
        );
        const result = await response.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}
export async function getResultsForecast(city: string) {
    try {
        const response = await fetch(
            `${URL.TIME_INTERVALS}?q=${city}&appid=${URL.API_KEY}`
        );
        const result = await response.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}
