let s = ["a", "a", "a", "b", "b"];

function longestRepetition(s) {
    let split = s.split('')
    let current = null
    let count = 0
    let highestCount = 0
    let letter = ''

    for(let i = 0; i <= split.length; i++){
      if(split[i] != current){
        if(count > highestCount){
          highestCount = count
          letter = current
        }
        current = split[i]
        count = 1
        } else {
        count += 1
      }
    }
    return [letter, highestCount];
  }