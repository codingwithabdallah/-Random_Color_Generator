let hexdiv = document.querySelector(".hexcode") ;
let divbcg = document.querySelector(".color") ;
let Genbtn = document.querySelector(".btn") ;

gencol() ;

function gencol(){
    // This array creates the hex code that we need by making different letters and numbers
    let hexarray = [1,2,3,4,5,6,7,8,9,"A" , "B" ,"C" ,"D" ,"E" ,"F"] ;
    let colorresult = [] ;
    
    // access on hexarray and looping on them to get 6 different letters and numbers
    for (let i = 0 ; i < 6 ; i++){
        // random method to get a random element from hexarray
        colorresult.push(hexarray[Math.floor(Math.random() * hexarray.length)])
    }
    // console.log(colorreult.join("")) ;
    let hexcode = `#${colorresult.join("")}` ; // => #******
    // console.log(hexcode) ;
    
    // adding to the page 
    divbcg.style.background = hexcode ;
    hexdiv.innerHTML = hexcode ; 

}

Genbtn.addEventListener("click" , gencol
    ) ;

