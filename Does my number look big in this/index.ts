export function narcissistic(value: number): boolean {
  const value_string = value.toString()
  const power = value_string.length
  const sum = value_string.split("")
                          .map(str => parseInt(str))
                          .reduce((res, cur) => res + Math.pow(cur, power), 0)
  return sum == value
}