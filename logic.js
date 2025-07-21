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





//----------SUM OF ARRAY---------------
// function sumofarray(Array){
//     let sum=0
//     for(let i=0;i<Array.length;i++){
//         sum+=Array[i]
//     }
//     return sum
// }
// console.log(sumofarray([23,53,2,12,45]))




//-------------FIBBINOCI---------------
                                                      

// function fib(n){
//     let num1=0,num2=1,nxtnum;
//     for(let i=0;i<=n;i++){
//         console.log(num1)
//         nxtnum=num1+num2
//         num1=num2
//         num2=nxtnum
//     }
// }
// fib(9)




//-----FACTORIAL------------
// function fact(n){
//     let result=1
//     for(let i=2;i<=n;i++){
//         result=result*i
//     }
//     return result
// }
// console.log(fact(5))







//---------POWER OF AN NUMBER IN JS-----------
// function power(base,exponent){              
//     return base**exponent
// }
// console.log(power(4,3))




//-------Program to print the frequency of elements in an array--------

// function array(arr){
//     const freq={};
//     for(let i=0;i<arr.length;i++){
//         if(freq[arr[i]]){
//             freq[arr[i]]+=1
//         }else{
//             freq[arr[i]]=1
//         };
//     }return freq
// }
// console.log(array([1,2,3,4,3,2,1,1,12,3]))








//-----------Program to count the occurrences of a character in a string-----

// function occurence(str,char){
//     return str.split(char).length-1
// }
// console.log(occurence("peopplle",'p'))





//---------using loop-------------
// function occurence(str,char){
//     let count=0
//     for(let i=0;i<str.length;i++){
//         if(str[i]==char){
//             count++
//         }
//     }return count
// }
// console.log(occurence("poppiliuy","p"))












//---------------sort an array in Ascending Order ----------

function accending(Arr){
    for(let i=0;i<Arr.length;i++ ){
        for(let j=i+1;j<Arr.length;j++){
            if(Arr[i]>Arr[j]){
                let temp=Arr[i]
                Arr[i]=Arr[j]
                Arr[j]=temp
            }
        }
    }return Arr
}
console.log(accending([7,4,1,5,3]))