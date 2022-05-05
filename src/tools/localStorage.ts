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
};
