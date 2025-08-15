

// return an index of an element in an array

function findIndex(array,number){

    for (let i=0;i<array.length;i++){
      
      if(array[i] == number){
        return i;
      }
    
    }
      return -1
    }
    
    findIndex([1,5,8,9],8)