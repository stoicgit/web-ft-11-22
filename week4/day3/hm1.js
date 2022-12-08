function tipAmount(amoount,service){
    if (service==="good") {
    console.log(amoount * .2)
    }
    else if(service=== "fair") {
    console.log(amount * .1)
    }
    else if(service=== "bad") {
    console.log(amont * 0)
    }
}
tipAmount(100, "good")