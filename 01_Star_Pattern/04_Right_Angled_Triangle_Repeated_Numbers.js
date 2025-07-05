function pattern(n){

for (let i=0; i<n;i++)
    {
        let row =""
        for(let j=1; j<=i;j++)
        {
            row+= i
        }
        console.log(row)
    }

}

pattern(5)