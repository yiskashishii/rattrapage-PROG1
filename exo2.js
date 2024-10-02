function getMostPopularPlaces(places) {
    let newPlaces = places.split(' ');
    let firstMostPopular;
    let secondMostPopular;
    let result = "";

    for (let index = 0; index < newPlaces.length; index++) {
        firstMostPopular = Math.max(...newPlaces[index]);
        result += firstMostPopular;
    }

    return result;
}
console.log(getMostPopularPlaces("Analamahitsy, Analamahitsy, Itaosy, Behoririka, Itaosy, Itaosy"));