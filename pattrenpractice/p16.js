for(let i=1; i<=5;i++){
  let b=""
  for(let k=1; k<=5-i;k++){
    b=b+" "
  }
  for(let j=1; j<=i; j++){
if(i==3 &&j==2){
   b=b+" "+" "
}
  else if(i==4 &&j==2 || i==4&&j==3){
     b=b+" "+" "
  }
    else if(i==5&&j==2||i==5&&j==3||i==5&&j==4){
      b=b+" "+" "
    }

   else{
      b=b+"*"+" "
   } 
   
  }
  console.log(b)
}

for(let i=1; i<=5; i++){
  let b=""
  for(let k=1; k<i;k++){
    b=b+" "
  }
  for(let j=1; j<=6-i;j++){

if(i==1 &&j==2 ||i==1 &&j==3||i==1 &&j==4){
  b=b+" "+" "
}

else if(i==2&&j==2 || i==2&&j==3){
   b=b+" "+" "
}
    else if(i==3&& j==2){
       b=b+" "+" "
    }
    else {
       b=b+"*"+" "
    }
   
  }
  console.log(b)
}





