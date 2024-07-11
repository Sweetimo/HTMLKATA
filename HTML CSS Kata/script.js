
let productCodeDictionary = {"A" : [50, 130, 3], "B" : [30, 45, 2], "C" : [20, 20, 1], "D": [15, 15, 1]};
var selectedA = document.getElementById("product-a");
var valueA = selectedA.value;
const addToTotalA = document.getElementById("add-a");
const addToTotalB = document.getElementById("add-b");
const addToTotalC = document.getElementById("add-c");
const addToTotalD = document.getElementById("add-d");
const checkout = document.getElementById("checkout");
const totalPrice = document.getElementById("total");

let currentA = 0;
let currentB = 0;
let currentC = 0;
let currentD = 0;

const BasketTotals = {"A" : 0, "B" : 0, "C" : 0, "D": 0};

const aValue = document.getElementById("price-a");
const bValue = document.getElementById("price-b");
const cValue = document.getElementById("price-c");
const dValue = document.getElementById("price-d");

setInterval(function(){aValue.innerHTML = productCodeDictionary["A"][0];},10);
setInterval(function(){bValue.innerHTML = productCodeDictionary["B"][0];},10);
setInterval(function(){cValue.innerHTML = productCodeDictionary["C"][0];},10);
setInterval(function(){dValue.innerHTML = productCodeDictionary["D"][0];},10);

function aAddPrice(){
    const ValueAmount = document.getElementById("product-a")
    currentA += parseInt(ValueAmount.value);

    BasketTotals["A"] = (((currentA - (currentA % productCodeDictionary["A"][2]))/productCodeDictionary["A"][2]) * productCodeDictionary["A"][1] + ((currentA % productCodeDictionary["A"][2]) * productCodeDictionary["A"][0]));

    let runningValue = 0;
    for (const [key, value] of Object.entries(BasketTotals)){
        runningValue += value;
    }
    totalPrice.innerHTML = runningValue;
    console.log(BasketTotals)
    console.log(currentA)
}

function bAddPrice(){
    const ValueAmount = document.getElementById("product-b")
    currentB += parseInt(ValueAmount.value);

    BasketTotals["B"] = (((currentB - (currentB % productCodeDictionary["B"][2]))/productCodeDictionary["B"][2]) * productCodeDictionary["B"][1] + ((currentB % productCodeDictionary["B"][2]) * productCodeDictionary["B"][0]));

    let runningValue = 0;
    for (const [key, value] of Object.entries(BasketTotals)){
        runningValue += value;
    }
    totalPrice.innerHTML = runningValue;
    console.log(BasketTotals)
    console.log(currentB)
}
function cAddPrice(){
    const ValueAmount = document.getElementById("product-c")
    currentC += parseInt(ValueAmount.value);

    BasketTotals["C"] = (((currentC - (currentC % productCodeDictionary["C"][2]))/productCodeDictionary["C"][2]) * productCodeDictionary["C"][1] + ((currentC % productCodeDictionary["C"][2]) * productCodeDictionary["C"][0]));

    let runningValue = 0;
    for (const [key, value] of Object.entries(BasketTotals)){
        runningValue += value;
    }
    totalPrice.innerHTML = runningValue;
    console.log(BasketTotals)
    console.log(currentC)
}
function dAddPrice(){
    const ValueAmount = document.getElementById("product-d")
    currentD += parseInt(ValueAmount.value);

    BasketTotals["D"] = (((currentD - (currentD % productCodeDictionary["D"][2]))/productCodeDictionary["D"][2]) * productCodeDictionary["D"][1] + ((currentD % productCodeDictionary["D"][2]) * productCodeDictionary["D"][0]));

    let runningValue = 0;
    for (const [key, value] of Object.entries(BasketTotals)){
        runningValue += value;
    }
    totalPrice.innerHTML = runningValue;
    console.log(BasketTotals)
    console.log(currentD)
}

function checkoutFun(){

    let runningValue = 0;
    for (const [key, value] of Object.entries(BasketTotals)){
        runningValue += value;
    }
    
    alert(currentA + " Apples: " + BasketTotals["A"] +"\n" +
        currentB + " Banana: " + BasketTotals["B"] +"\n"+
        currentC + " Grapes: " + BasketTotals["C"] +"\n"+
        currentD + " Oranges: " + BasketTotals["D"] +"\n"+
        "Total: " + runningValue

    )
}



addToTotalA.addEventListener("click", aAddPrice);
addToTotalB.addEventListener("click", bAddPrice);
addToTotalC.addEventListener("click", cAddPrice);
addToTotalD.addEventListener("click", dAddPrice);
checkout.addEventListener("click", checkoutFun);