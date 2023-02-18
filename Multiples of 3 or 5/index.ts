export class Challenge {
  static solution(number: number) {
    let result = 0
    for(let i = 2; i < number; ++i){
      if(i % 3 == 0 || i % 5 == 0){
        result += i
      }
    }
    return result
  }
}