a = +prompt("Введите число: ");
console.log(typeof a);
if (a == ""){
    console.log("Введите число")
}
else{
    if (Number.isNaN(a)){
        console.log("Упс, кажется, вы ошиблись")
    }
    else if (a % 2 == 0){
        console.log("Четное")
    }
        else if(a % 2 !== 0) {
        console.log("Нечетное")
    }
}


