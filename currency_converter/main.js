let dollar= document.getElementById("usd");
let syrianPound= document.getElementById("syp");

dollar.onkeyup= function(){
     syrianPound.value= dollar.value * 15000;
}


syrianPound.onkeyup= function(){
     dollar.value= syrianPound.value / 15000;
}