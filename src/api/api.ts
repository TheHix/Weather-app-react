import { URL } from "./view";

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
