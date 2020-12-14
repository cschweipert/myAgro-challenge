function getDaysOfPower(R1, D1, R2, D2, R3, D3, K) {
    let array = [[D1, R1],[D2, R2], [D3, R3]]
    console.log(array)
    let sorted = array.sort((a, b) => a[0] - b[0])
    console.log(sorted)
      
    let midD = sorted[1][0]
    let endD = sorted[2][0]
  
    let firstR = sorted[0][1]
    let secondR = sorted[1][1]
    let thirdR = sorted[2][1]
  
    let phaseOne = midD - 1
    let phaseTwo = endD - midD
  
    let arr = []
  
    let result = 0
  
    if (midD === 0 && endD === 0) {
      result = firstR + secondR + thirdR
      if (K > result) {
        return `The farmer gets ${Math.floor(K/result)} days of lighting`
      } else {
        return `The farmer gets 0 days of lighting`
      }
    }
  
    console.log(result)
  
    if (midD === 0) {
      for (let i = 0; i < endD - 1; i++) {
        arr.push(firstR + secondR)
      }
      arr.push(firstR + secondR + thirdR )
    } else {
      for (let i = 0; i < phaseOne; i++) {
        arr.push(firstR);
      }
      for (let j = 0; j < phaseTwo; j++) {
        arr.push(firstR + secondR)
      }
      arr.push(firstR + secondR + thirdR)
    }
  
    console.log(arr)
  
    let finalResult = 0
    let count = 0
  
    for (let i = 0; i < arr.length; i++) {
      if (finalResult >= K) {
        break
      } else {
        finalResult = finalResult + arr[i]
        count++
      }
      console.log(finalResult)
      console.log(count)
    }
  
    if (finalResult === K) {
      return `The farmer gets ${count} days of lighting`
    } else if (finalResult < K) {
      return `The farmer gets ${count + Math.floor((K - finalResult)/(firstR + secondR + thirdR))} days of lighting`
    }
    return `The farmer gets ${count - 1} days of lighting`
  }
  
  // getDaysOfPower(1000, 3, 500, 10, 1500, 7, 21000)
  
  getDaysOfPower(3000, 3, 500, 10, 1500, 7, 700000);
    // getDaysOfPower(500, 3, 500, 10, 500, 7, 21000);
    // getDaysOfPower(1300, 0, 500, 0, 1500, 7, 10000);
    // getDaysOfPower(10000, 3, 500, 10, 1500, 7, 11000)