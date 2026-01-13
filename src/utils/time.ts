const SECONDS_PER_MINUTE = 60
const SECONDS_PER_HOUR = 3600

export function formatTime(timeInSeconds: number): string {
  const hours = Math.floor(timeInSeconds / SECONDS_PER_HOUR)
  const minutes = Math.floor((timeInSeconds % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE)
  const seconds = timeInSeconds % SECONDS_PER_MINUTE
  const formatTwoDigits = (value: number): string => value.toString().padStart(2, '0')
  if (hours === 0) return `${minutes}:${formatTwoDigits(seconds)}`
  return `${hours}:${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)}`
}
