// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


 function returnFirstTwoDrivers(){
    return ["Antonia","Nuru"]
 }

 function returnLastTwoDrivers(){
    return ["Amari","Mo"]

 }

  const selectingDrivers= [ returnFirstTwoDrivers,returnLastTwoDrivers]


  function createFareMultiplier(multiplier) {
    
let x = function(fare){
    return fare*multiplier
}
    return x
  }

  const fareDoubler= createFareMultiplier(2)

  const fareTripler= createFareMultiplier(3)

  function selectDifferentDrivers(drivers,kimani){
   return  kimani()

  }
 
    
  