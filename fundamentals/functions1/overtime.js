const MINUTES_IN_HOUR = 60
const DAILY_WORK_HOURS = 8
const OVER_TIME_PAYMENT_BONUS = 1.5
const WORK_DAY_IN_MINUTES = DAILY_WORK_HOURS * MINUTES_IN_HOUR

function convertTimeToMinutes(timeString) {
  const [hours, minutes] = timeString.split(":").map(Number)
  return hours * MINUTES_IN_HOUR + minutes
}

function calculateTotalPayment(hourlyRate, entryTime, exitTime) {
  const entryMinutes = convertTimeToMinutes(entryTime)
  const exitMinutes = convertTimeToMinutes(exitTime)
  
  const minutesDifference = exitMinutes - entryMinutes
  const isOvertime = minutesDifference > WORK_DAY_IN_MINUTES
  const workedHours = minutesDifference / MINUTES_IN_HOUR

  let baseSalary = hourlyRate * (isOvertime ? DAILY_WORK_HOURS : workedHours)

  if (isOvertime) {
    const overtimeMinutes = minutesDifference - WORK_DAY_IN_MINUTES
    const extraWorkedHours = overtimeMinutes / MINUTES_IN_HOUR
    const overtimePayment = hourlyRate * OVER_TIME_PAYMENT_BONUS * extraWorkedHours
    
    baseSalary += overtimePayment
  } 
  
  return baseSalary
}

const hourlyRate = 10
const entryTime = "9:00"
const exitTime = "18:00"

const totalPayment = calculateTotalPayment(hourlyRate, entryTime, exitTime)
console.log(totalPayment) // 95