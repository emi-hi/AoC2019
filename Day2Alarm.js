let intCode = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,1,19,10,23,2,13,23,27,1,5,27,31,2,6,31,35,1,6,35,39,2,39,9,43,1,5,43,47,1,13,47,51,1,10,51,55,2,55,10,59,2,10,59,63,1,9,63,67,2,67,13,71,1,71,6,75,2,6,75,79,1,5,79,83,2,83,9,87,1,6,87,91,2,91,6,95,1,95,6,99,2,99,13,103,1,6,103,107,1,2,107,111,1,111,9,0,99,2,14,0,0]

const processCode = function(input, noun, verb) {
  let inputInts = input.slice()
  inputInts[1] = noun
  inputInts[2] = verb
  
  for (let num = 0; num < inputInts.length - 1; num += 4) {
    let opCode = inputInts[num]
    let paramOne = inputInts[num + 1]
    let paramTwo = inputInts[num + 2]
    let paramThree = inputInts[num + 3]
    if (opCode === 1) {
      inputInts[paramThree] = inputInts[paramOne] + inputInts[paramTwo]
    }
    if (opCode === 2) {
      inputInts[paramThree] = inputInts[paramOne] * inputInts[paramTwo]
    }
    if (opCode === 99) {
      break
    }
  } 
  return inputInts[0]
}

const secondPart = function(expectedNum){
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const result = processCode(intCode, noun, verb)
      if (result === expectedNum) {
        return 100 * noun + verb
      }
    }
  }
  return "no match"
}

 console.log(secondPart(19690720))