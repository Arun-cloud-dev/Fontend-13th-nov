// function ar (x){
//     if (x < 1){
//         return "lesss than  one"
//     }else if (x < 2 ){
//         return "less than two"
//     }else {
//         return "greater than or equal to two"
//     }
// }

// console.log(ar(10));



// 1. loveYou(4) should return the string Less than 5
// 2. loveYou(6) should return the string Less than 10
// 3. loveYou(11) should return the string Greater than or equal to 10


function loveYou(y){
    if (y<5){
        return "Less than 5";
    }else if (y < 10 ){
        return "less than 10"
    }else {
        return " Greater than or equal to 10 "
    }
}

console.log(loveYou(4));