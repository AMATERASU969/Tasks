let myMap = new Map();
myMap.set(1, "a");
myMap.set(2, "b");
myMap.set(3, "c");
for (let key of myMap.keys()){
    console.log("Ключи - " + key)
}
for (let value of myMap.values()){
    console.log("Значение - " + value)
}