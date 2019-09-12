var fkr = require("faker");

for(var i = 0; i < 10; i++){
    console.log(fkr.commerce.productName() +": $" +fkr.commerce.price() );
}