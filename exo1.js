export function removeWords(original, wordsToRemove) {
    
    let newString = original.split(' ');

    let result = [];
    let values = "";

    for (let index = 0; index < newString.length; index++) {
        for (let i = 0; i < wordsToRemove.length; i++) {
            if (newString[index] !== wordsToRemove[i]) {
                result.push(newString[index]);
                values = '"' + result.join(" ") + '"';
            }
            
        }
        
    }

    return values;
}

console.log(removeWords("Hello, ceci est un test", ["ceci", "un"]));