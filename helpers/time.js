export const generateNxtDate = (
  nextYears = 0,
  nextMonths = 0,
  nextDays = 0
) => {
  const DATE = new Date() // Date Now
  // Original Date
  const year = Number(DATE.getFullYear())
  const month = Number(DATE.getMonth()) + 1
  const day = Number(DATE.getDate())
  const hour = Number(DATE.getHours())
  const minutes = Number(DATE.getMinutes())

  // Custom Date
  const customYear = year + nextYears
  let customMonth = month + nextMonths
  let customDay = day + nextDays

  if (customDay > 31) {
    customDay = customDay - 31
    customMonth++
  }

  // Display Date
  const displayYear = String(customYear)
  const displayMonth =
    customMonth < 10 ? `0${customMonth}` : String(customMonth)
  const displayDay = customDay < 10 ? `0${customDay}` : String(customDay)
  const displayHour = hour === 0 ? '00' : String(hour)
  const displayMinutes = minutes < 10 ? `0${minutes}` : String(minutes)

  return `${displayYear}-${displayMonth}-${displayDay} ${displayHour}:${displayMinutes}`
}
