let score= null

console.log(typeof score)
console.log(typeof (score))
// dono hi tareeka sahi hai

let valueInNumber= Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" >> 33
// "33abc" >> NaN
// true>>1, false>>0
// null>> 0

let isLoggedIn= 1

let loggedIn= Boolean(isLoggedIn)
console.log(loggedIn)

// 1>>true, 0>> false
// "">>false
// "r">> true
//*************operations*************

let value= 3
let negvalue= -value
//console.log(negvalue)

/*console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2) >>for power
console.log(2/3) >>for dividing
console.log(2%3) >>for remainder*/

let str1=  "hello"
let str2= " rj"

let str3= str1 + str2
console.log(str3)

console.log("1" + 2) // 12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") //32, string baad mein h, so pehle wala operation perform ho jayega

console.log(((2+3)*4)/5) // more appropriate 

console.log(+true) // shady way to convert into boolean