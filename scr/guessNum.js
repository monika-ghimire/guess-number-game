var usernum=document.getElementById('usernum').value

console.log(usernum);

function guessNumber() {
  let show=document.getElementById('ans');
  let randomByPc=Math.floor(Math.random() * 20);
  let numByPc =document.getElementById("demo").innerHTML =randomByPc;
    
    
    
    if(usernum.length==0)
    {
        
        show.innerText="guess some numer";
       
    }
     else if(parseInt(usernum)<randomByPc)
    {
        
        show.innerText="think some big";
      
    }

    else if(parseInt(usernum)>randomByPc)
    {
    
        show.innerText="you miss the chance";
        
    }

    else
    {
        
        show.innerText="you win the game";
    
    }
   
    
}

