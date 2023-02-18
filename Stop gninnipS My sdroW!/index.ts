export function spinWords(words: string): string {
  let wordsArray: string[] = words.split(" ")
                                  .map(word => word.length >= 5 ? reversedWord(word) : word)
  let result: string = wordsArray.reduce((res, currentValue, index) => res + " " + currentValue)
  return result
}

function reversedWord(word: string): string {
  let reversed = ""
  for (let i = word.length - 1; i >= 0; --i){
    reversed += word[i]
  }
  return reversed
}