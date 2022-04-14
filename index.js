// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers)
{
    let firstDrivers = drivers.slice(0,2)
   return firstDrivers 
    
    
} 


const returnLastTwoDrivers = function(drivers)
{
    let lastDrivers = drivers.slice(-2)
    return lastDrivers
    
}

let  selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];



function createFareMultiplier(number)
{
    return function fareMultiplier()
    {
        return number * 5
    }
    


}

function fareDoubler(fare)
{
    return fare *2

}

function fareTripler(fare)
{
    return fare*3
}

function selectDifferentDrivers(drivers,returnFirstTwoDrivers)
{
     return returnFirstTwoDrivers (drivers)
}