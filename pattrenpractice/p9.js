for(let i=1; i<=5; i++){
  let b=""
  for(let k=1; k<i;k++){
    b=b+" "
  }
  for(let j=1; j<=6-i;j++){
    b=b+"*"+" "
  }
  console.log(b)
}