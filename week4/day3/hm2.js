function TotalAmount(bill, service){
    if (service === "good"){
        return (bill * (20/100)) + bill
    }if (service === "fair"){
        return (bill * (15/100)) + bill
    }else (service === "bad"); {
        return (bill * (10/100)) + bill
    }
}
console.log(TotalAmount(40,"fair"))
console.log(TotalAmount(100,"good"))



















