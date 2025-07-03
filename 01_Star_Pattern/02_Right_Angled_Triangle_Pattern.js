function pattern(n){
  
  for(let i=0; i<n; i++){
    let row=""
    for(let j=0;j<=i;j++){
      row+="*"
    }
      console.log(row)
  }

}

pattern(4)