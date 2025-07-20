// ----prime-------

// function isprime(n){
//     if(n<=1){
//         return false
//     }
//     for(let i=2;i<n;i++){
//         if(n%i===0)
//             return false
//     }
//     return true
// }
// console.log(isprime(9))







//------sum of digit-----------
// let num=2345;
// let sum=0

// num.toString().split('').forEach(digit=>{
//     sum+=parseInt(digit)
// })
// console.log(sum)





//---from the 3-digit number substasct the sum of digit------------(180)

// function sumof(num){

// let sum=0

// while(num>0){
//     sum+=num%10
//     num=Math.floor(num/10)
// }
// return sum
// }

// let number=345
// let res=sumof(number)
// let result=number-res
// console.log(result)






// for(let i=1;i<=25;i++){
//     if(i%2===0&&i%4!==0){
//         console.log(i)
//     }

// }

