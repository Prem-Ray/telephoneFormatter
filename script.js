const input = document.querySelector('#input')

let preValue = '' ;
let countryCode = '' ;
input.addEventListener('input' , (e)=>{
    let inputValue = e.target.value ;
    console.log(preValue,inputValue)

    // regEx for only number
    if(/\d+$/g.test(inputValue)){
        input.value = inputValue ;
    }
    else{
        input.value = inputValue.substring(0,inputValue.length-1)
    }

    if(inputValue.length === 2) {
        countryCode = inputValue.substring(0,2) ;
        input.value = `+(${input.value}) - `
    }
    else if(inputValue.length === 8 && preValue.length>inputValue.length) {
        input.value = countryCode ;
    }
    
    preValue = inputValue ;
})