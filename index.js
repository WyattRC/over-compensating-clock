var moment = require('moment');
const chalk = require('chalk');
//
// var CurrentTime = moment();
// console.log(CurrentTime)
//
//
// var CurrentDate = moment().date();
// var CurrentMonth = moment().month();
// var CurrentYear = moment().year();
// var CurrentHour = moment().hour();
// var CurrentMinute = moment().minute();
// var CurrentSecond = moment().second();
//
//
//
// console.log(CurrentDate)
// console.log(CurrentMonth)
// console.log(CurrentYear)
// console.log(CurrentHour)
// console.log(CurrentMinute)
// console.log(CurrentSecond)
var final = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var day = moment().format("DDDo");
let k = (moment()-moment().startOf("day"))/1000
let a = moment().isDST();
let b = moment([2017, 2, 14]).isLeapYear();








console.log("It is " + chalk.blueBright(final))
console.log("It is the " + chalk.magentaBright(day) + " of the year.")
console.log("It is " + chalk.cyanBright(k) + " seconds into the day.")
if ( moment(final).isBetween('2017-03-19', '2017-11-25', null, [])){
  console.log("It " + chalk.greenBright('is') + " during daylight savings time.")
} else {
  console.log("It " + chalk.greenBright('is not') + " during daylight savings time.")
}

if ( b === final ){
  console.log("It " + chalk.redBright('is') + " a leap year.")
} else {
  console.log("It " + chalk.redBright('is not') + " a leap year.")
}
