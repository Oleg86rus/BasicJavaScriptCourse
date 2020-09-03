"use strict"
function transformNumbers(num){
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log("Значение должно быть целым числом от 0 до 999")
        return{};
    }
    return {
        units: num % 10,
        tens: Math.floor(num / 10) % 10,
        hundreds: Math.floor(num / 100)
    };
}
console.log(transformNumbers(546));