let arr = [5,5,5];
let chek = null;
for (i = 0; i < arr.length; i++){
    let element = arr[i];
        if(element !== arr[0]){
            chek = false;
            
            break;

        }
        else{
        
            chek = true
            
        }
    }
    console.log(chek);