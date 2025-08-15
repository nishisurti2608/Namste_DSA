

// return an index of an element in an array

function findIndex(a,n){

    for (let i=0;i<a.length;i++){
      
      if(a[i] == n){
        return i;
      }
    
    }
      return -1
    }
    
    findIndex([1,5,8,9],8)