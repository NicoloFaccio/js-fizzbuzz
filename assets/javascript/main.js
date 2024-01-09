const boxNumberHtml= document.getElementById(boxNumber)

for (let i=1 ; i<=100; i++){
    console.log(i)

    if( (i % 3)===0 ){
        const Element ="<div>Fizz</div>"
        boxNumber.innerHTML+=Element
    } else if ( (i % 5)===0 ) {    
        const Element ="<div>Buzz</div>"
        boxNumber.innerHTML+=Element
    } else if ( (i % 15)===0 ) {    
        const Element ="<div>FizzBuzz</div>"
        boxNumber.innerHTML+=Element
    } else {
        const Element =`<div class="col">${i}</div>`
        boxNumber.innerHTML+=Element
    }   
}