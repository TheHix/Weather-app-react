export const storage = {
    getFavoriteCities() {
        const favoriteCitiesJson = localStorage.getItem("favoriteCities");

        if (favoriteCitiesJson !== null) {
            return JSON.parse(favoriteCitiesJson);
        }
    },
    saveFavoriteCities(FavoriteCities: any[]): void {
        localStorage.setItem("favoriteCities", JSON.stringify(FavoriteCities));
    },
    getCurrentCity() {
        const currentCityJson = localStorage.getItem("currentCity");
        if (currentCityJson !== null) {
            return JSON.parse(currentCityJson);
        }
    },
    saveCurrentCity(currentCity: any): void {
        localStorage.setItem("currentCity", JSON.stringify(currentCity));
    },
};
