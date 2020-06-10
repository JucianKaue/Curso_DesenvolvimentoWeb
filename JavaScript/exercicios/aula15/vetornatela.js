var num = [8, 1, 7, 4, 2, 9, 0]
num.sort()

// console.log(num)
/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])
*/
/* 
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}
*/

for (let pos in num) {
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}

