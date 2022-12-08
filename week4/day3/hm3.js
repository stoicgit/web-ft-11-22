function splitAmount(total, service, people){
    if (service === "good"){
        return ((total * (20/100)) + total) / people
    }
    else if(service === "fair"){
        return ((total * (15/100)) + total) / people
    }
    else if(service ==="bad"){
        return ((total * (10/100)) + total) / people
    }
}
console.log(splitAmount(100, "good", 5))
console.log(splitAmount(40, "fair", 2))