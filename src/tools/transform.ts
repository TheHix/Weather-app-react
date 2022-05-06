export const getTempInCelsius = (degreesInKelvin: number) => {
    return Math.round(degreesInKelvin - 273);
};
export const getTimeFromUNIX = (time_in_UNIX_timestamp:number) => {
    const usualTime = new Date(time_in_UNIX_timestamp * 1000);
    const hours = usualTime.getHours();
    const minutes = `0${usualTime.getMinutes()}`.slice(-2);
    return `${hours}:${minutes}`;
}
export const getDay = (dt_txt:string) => {
    if (dt_txt.slice(8, 9) === "0") {
        return dt_txt.slice(9, 10);
    }

    return dt_txt.slice(8, 10);
};
export const getCompleteWeatherInformation = (weathers:any) => {
    const massWeathers = weathers.map((item: any) => {
        return item.main
    })

    return massWeathers.join(', ');
}
export const getMonth = (dt_txt:string) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return months[+dt_txt.slice(6, 7) - 1];
};
export const getTime = (dt_txt: string) => {
    return dt_txt.slice(11, 16);
};