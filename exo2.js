export function getMostPopularPlaces(places) {
    let newPlaces = places.split(' ');
    let firstMostPopular;
    let secondMostPopular;
    let result ;

    for (let index = 0; index < newPlaces.length; index++) {
        if (newPlaces[index] !== ",") {
            result = newPlaces;
        }
    }

    return result;
}
console.log(getMostPopularPlaces("Analamahitsy, Analamahitsy, Itaosy, Behoririka, Itaosy, Itaosy"));