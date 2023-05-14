for(let i=1; i<=5;i++){
  let b=""
  for(let k=1; k<=5-i;k++){
    b=b+" "
  }
  for(let j=1; j<=i;j++){
    b=b+"*"+" "
  }
  console.log(b)
}

for(let i=1; i<=4; i++){
  let b=""
  for(let k=1; k<=i;k++){
    b=b+" "
  }
  for(let j=1; j<=5-i;j++){
    b=b+"*"+" "
  }
  console.log(b)
}