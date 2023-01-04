
// const returnFirstTwoDrivers = (){};

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2)

const returnLastTwoDrivers = (drivers) => drivers.slice(drivers.length-2, drivers.length -0)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number){
    return function createFareMultiplier(){
        return number * 5
    }
}

const fareDoubler = (number) => [number] * 2

const fareTripler = (number) => [number] * 3


function selectDifferentDrivers(drivers, returnEitherFirstTwoOrLastTwoDrivers){
    return returnEitherFirstTwoOrLastTwoDrivers(drivers)
}
 












// returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']){
//     return ['Antonia', 'Nuru']
// };

// const returnLastTwoDrivers = (['Antonia', 'Nuru', 'Amari', 'Mo'])