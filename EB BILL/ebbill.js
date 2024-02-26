//EXPLAINATION ABOUT UNITS

/*for first 50units RS-0.75 per unit
for next 100units RS-1.00 per unit
for next 100units RS-1.30 per unit
for units above 250 RS-1.50 per unit*/


function unit(){
   const unit=Number(document.getElementById("input").value)
   let price=0

   if(unit<=50)
     price=unit*0.75
   else if(unit>50 && unit<=150) 
     price=(unit-50)*1+37.5
   else if(unit>150 && unit<=250)
     price=(unit-150)*1.30+150
   else
      price=(unit-250)*1.50+325
   let result=(document.getElementById("result"))
   result.innerHTML="The Cost Of Your Unit Is RS : "+price   







}