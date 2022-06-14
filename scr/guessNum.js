document.getElementById('usernum')



function guessNumber() {
  let show=document.getElementById('ans')
  let numByPc =document.getElementById("demo").innerHTML =
   Math.floor(Math.random() * 10);
    console.log("i am ");
    
    
    if(usernum=="")
    {
        
        show.innerText("guess some numer")
        console.log("i am1");
    }
     else if(usernum<numByPc)
    {
        
        show.innerText("think some big")
        console.log("i am4");
    }

    else if(usernum<numByPc)
    {
    
        show.innerText("you miss the chance")
        console.log("i am7");
    }

    else
    {
        
        show.innerText("you win the game");
      console.log("i am here");
    }
   
    
}

