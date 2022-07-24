// addFarm - params: farmId, name, farmer, phone, address
// removeFarm - params: farmId
// updateFarm - params: farmId, name, farmer, phone, address
// getFarm - params: farmId - returns a farm object
// addProduct - params: productId, name, price
// removeProduct - params: productId
// updateProduct - params: productId, name, price
// getProduct - params: productId - returns a product object
// printProducts - No param, console logs a list of product items with their prices.
// calculateOrderCost - params: productId, quantity


class Mkulima{
    constructor(){
        this.farms=[];
        // farm record should contain id, farm name, farmer, phone number and address.
        this.products=[];
        //  product should have id, name and price fields.
        this.orders=[];
        // product should have id, name and price fields.

        // this.removeFarm=(id)=>{
        //     let remove =this.frams.filter(item =>{item.id ===id 
        //        return remove.splice(remove,0)});
        // }
        this.updateFarm=function(id,newId,updatedFarmName,updatedFarmer,updatedPhoneNumber,updatedAddress){
            let newUpdates=this.farms.find(item=>{
                if(item.id===id)
                   console.log( newUpdates);
                else
                 console.log('the id does not exist '); 
               })
            newUpdates.id=newId;
            newUpdates.farmName=updatedFarmName;
            newUpdates.farmer=updatedFarmer;
            newUpdates.phoneNumber=updatedPhoneNumber
            newUpdates.address=updatedAddress   
        }
        this.getFarm=function(id){
           return  this.farms.find(item=>item.id===id)
        }

        // this.removeProduct=(productId)=>{
        //     let remove =this.frams.filter(item =>{item.productId ===productId 
        //        return remove.splice(remove,0)});
        // }
        this.updateProduct=function(productId,newProductId,newname,newProductPrice){
            let productUpdates=this.farms.find(item=>{
                if(item.productId===productId)
                   console.log( productUpdates);
                else
                 console.log('the id does not exist '); 
               })
            productUpdates.productId=newProductId;
            productUpdates.storeName=newname;
            productUpdates.productPrice=newProductPrice;
        }
        this.getProduct=function(productId){
           return  this.farms.find(item=>item.productId===productId)
        }
        this.printproduct=()=>{
            console.log(this.products);
        }
        this.calculateOrderCost=(productId,quantity)=>{
            let product=this.products.find(item=>item.productId===productId);
            console.log(`the total price is ${quantity*productPrice} for ${quantity} of ${product.name}`);

        }
   

    }
}
Mkulima.prototype.addFram=function(id,farmName,farmer,phoneNumber,address){
    this.farms.push({id,farmName,farmer,phoneNumber,address})
}
Mkulima.prototype.addProduct=function(productId,name,productPrice){
    this.products.push({productId,name,productPrice})
}
Mkulima.prototype.addOrders=function(productId,name,quantity,productPrice){
    this.addOrders.push({productId,name,quantity,productPrice})
}
let registerMkulimas = new Mkulima();
    registerMkulimas.addFram(77890,'KIBIDO','Kabati','0798765423','Korongo 111')
    registerMkulimas.addFram(88990,'KIBOTO','Kitete','0723465423','Viewport 11')
    registerMkulimas.addFram(12340,'KOTOTO','Kiziz','0799000023','Westside 45')
console.log(registerMkulimas);
registerMkulimas.removeFarm(77890)
console.log( registerMkulimas.getFarm(77890));
console.log( registerMkulimas.updateFarm(00600,10000,'LOLILO','Limobo','0799999934','Kasara 89'));

let newproduct= new Mkulima();
newproduct.addProduct(123456,'KIBIDO',2000)
newproduct.addProduct(567890,'KIBOTO',4000)
newproduct.addProduct(098765,'KOTOTO',1000)
console.log(newproduct);
newproduct.removeProduct(123456);
console.log(newproduct.getProduct(567890));
console.log(newproduct.updateProduct(098765,90000,'LIZOM',60000)); 

let madeorders=new Mkulima();
madeorders.addOrders(12345,'KIBIDO',4,2000)
madeorders.addOrders(567890,'KIBOTO',9,4000)
madeorders.addOrders(098765,'KOTOTO',2,1000)
console.log(madeorders);
madeorders.calculateOrderCost(123456,4)

