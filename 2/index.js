let x = true;
switch(typeof x){
    case("number"):
        console.log("Число: " + x)
        break;
    case("string"):
        console.log("Строка: " + x)
        break;
    case("boolean"):
        console.log("boolean: " + x)
        break;
    default:
        console.log("undifine")
}