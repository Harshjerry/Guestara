import dayjs from "dayjs";

export function getMonth(month=dayjs().month()){
const year=dayjs().year()// will give current year
// it will give first day of the monh 0 for sunday, 1 for monday and vuce versa
const firstDayOfTheMonth=dayjs(new Date(year,month,1)).day()

let currentMonthCount=0-firstDayOfTheMonth;
//This part creates a 5x7 matrix (5 weeks, 7 days per week) to represent the days of the month
const daysMatrix=new Array(5).fill([]).map(()=>{
   return new Array(7).fill(null).map(()=>{
currentMonthCount++
return dayjs(new Date(year,month,currentMonthCount))
    })
})
return daysMatrix
}

