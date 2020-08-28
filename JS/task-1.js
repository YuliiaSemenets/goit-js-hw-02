
const getItemsString = function (array) {
    'use strict';
    
    let number = 0;
    let result = '';

    for (let i = 0; i < array.length; i += 1) {
        number = i + 1;
        result += `${number} - ${array[i]}\n`;
    }

    return result;
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));


console.log(getItemsString([5, 10, 15]));




