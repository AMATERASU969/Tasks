let arr = [5,5,4];

for (i = 0; i < arr.length; i++){
    let element = arr[i];
        if(element !== arr[0]){
            console.log(false);
            break;

        }
        else{
            console.log(true)
            
        }
    }
