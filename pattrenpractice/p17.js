for(let i=1; i<=6; i++){
  let b=""
  for(let k=1; k<=7-i;k++){
    b=b+" "
  }
  for(let j=1; j<=i;j++){
    if(i>=2 && j!=1 &&j!=i){
      b=b+" "+" "
    }
    else{
      b=b+"*"+" "
    }
  }
  console.log(b)
}

for(let i=1; i<=7;i++){
  let b=""
  for(let k=1;k <i;k++){
    b=b+" "
  }
  for(let j=1; j<=8-i;j++){

if(j==1||j==8-i){
  b=b+"*"+" "
}
else{
   b=b+" "+" "
}
  }
  console.log(b)
}