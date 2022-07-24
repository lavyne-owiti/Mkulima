class Mkulima{
    constructor(){
        this.farms=[];
        // farm record should contain id, farm name, farmer, phone number and address.
        this.products=[];
        // grocery vendor record should contain id, store name and phone number
        this.orders=[];
        // product should have id, name and price fields.
    }
}
Mkulima.prototype.addFram=function(id,farmName,farmer,phoneNumber,address){
    this.farms.push({id,farmName,farmer,phoneNumber,address})
}

let registerMkulimas = new Mkulima();
    registerMkulimas.addFram(77890,'KIBIDO','Kabati','0798765423','Korongo 111')
    registerMkulimas.addFram(88990,'KIBOTO','Kitete','0723465423','Viewport 11')
    registerMkulimas.addFram(12340,'KOTOTO','Kiziz','0799000023','Westside 45')
console.log(registerMkulimas);
