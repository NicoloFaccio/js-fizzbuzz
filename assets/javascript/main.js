const boxNumberHtml= document.getElementById(boxNumber)

for (let i=0 ; i<=100; i++){
    console.log(i)

    const Element =`<div class="col">${i}</div>`
    boxNumber.innerHTML+=Element

    if( (i % 3)===0 ){
        const Element ="<div>Fizz</div>"
        boxNumber.innerHTML+=Element
    }     
}