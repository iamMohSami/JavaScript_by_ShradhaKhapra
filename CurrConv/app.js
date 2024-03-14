

//currency convertor github api
const base_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies" ; 



// let just tryna print country codes 
/*
for(code in countryList) {
    console.log(code , countryList[code]) ;
} */

const dropdown = document.querySelectorAll(".dropdown select") ; 
const btn = document.querySelector("form button") ; 
const fromCurr = document.querySelector(".from select") ;
const toCurr = document.querySelector(".to select") ;
const msg = document.querySelector(".msg") ; 


for (select of dropdown) { 
    for(countryCode in countryList) {
        let newOption = document.createElement("option") ; 
        newOption.innerText = countryCode ; 
        newOption.value = countryCode ; 
        if(select.name === "from" && countryCode==="USD"){
            newOption.selected = "selected";
        }
        if(select.name === "to" && countryCode === "INR") { 
            newOption.selected = "selected" ; 
        }
        select.append(newOption) ;
    }

    select.addEventListener("change" , (evt) => {
        updateFlag(evt.target) ;
    });
    
}


const updateFlag = (element) => {
    let currCode = element.value ; 
    // console.log(currCode) ; 
    let countryCode = countryList[currCode] ; 
    // FLAGS API :  <img src="https://flagsapi.com/IN/flat/64.png" />
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`  ;
    let img  = element.parentElement.querySelector("img") ; 
    img.src = newsrc ; 
};


const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input") ; 
    let amtVal = amount.value ; 
    // console.log(amtVal) ; 
    if(amtVal === "" || amtVal<1 ) {
        amtVal = 1 ; 
        amount.value = "1" ; 
    }


    const url = `${base_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json` ; 
    // console.log(fromCurr , toCurr); 

    let response = await fetch(url) ; 
    let data = await response.json() ; 
    let rate = data[toCurr.value.toLowerCase()] ; 
    // console.log(rate) ; 
    let finalAmount = amtVal * rate ; 
    msg.innerHTML = `<h3> ${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value} </h3>` ; 
}




btn.addEventListener("click", (evt) => { 
    evt.preventDefault()  ;
    updateExchangeRate() ; 
    
})

window.addEventListener("load" , () => {
    updateExchangeRate() ; 
})