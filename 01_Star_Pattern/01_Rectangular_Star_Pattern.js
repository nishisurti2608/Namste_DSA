// your code here
function pattern(N) {
  for (let i = 0; i < N; i++) {
    let row = "";

    for (let j = 0; j < N; j++) {
      row += "* ";
    }

    console.log(row);
  }
}

pattern(4);
