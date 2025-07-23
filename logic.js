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

// function accending(Arr){
//     for(let i=0;i<Arr.length;i++ ){
//         for(let j=i+1;j<Arr.length;j++){
//             if(Arr[i]>Arr[j]){
//                 let temp=Arr[i]
//                 Arr[i]=Arr[j]
//                 Arr[j]=temp
//             }
//         }
//     }return Arr
// }
// console.log(accending([7,4,1,5,3]))

//-----------SORT THE ARRAY IN DESCENDING ORDER----------
//    function descending(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]>arr[i]){
//                 let temp=arr[j]
//                 arr[j]=arr[i]
//                 arr[i]=temp
//             }
//         }
//     }return arr
//    }
//    console.log(descending([3,5,2,5,34,6]))

//--------MERGE TWO ARRAYS IN JS---------
// function mergesort(arr1,arr2){
//     return arr1.concat(arr2)
// }
// console.log(mergesort([2,6,5],[7,1,3]))

//----------INTERSECTION OF ARRAY------------------
// function arrayintersection(arr1,arr2){
//     const set2=new Set(arr2);
//     return arr1.filter(value=>set2.has(value))
// }
// console.log(arrayintersection([3,4,5],[4,5,6]))

//---UNION OF ARRAY----

// function union(arr1,arr2){
//     return[...new Set([...arr1,...arr2])]
// }
// console.log(union([1,2,3],[3,4,5,6]))

//--------MINIMUM VALUE IN ARRAY--------------
// function min(arr){
//     let min=arr[0]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i]
//         }
//     }return min
// }
// console.log(min([3,5,6,2,44,-3,1]))

//-----USING MATH.MIN----------
// function min(arr){
//     return Math.min(...arr)
// }
// console.log(min([-0.2,-2,-1,5,4,6,5]))

//-----------String Contains Another String in JavaScript---------
// function sub(str,substring){
//     return str.indexOf(substring)!==-1
// }
// console.log(sub('heymonkey','hey'))

////---------FIRST NON REPETED CHARECTOR IN STING---------

// function fun(str){
//     const charCount={}

//      // count the occurrences of each character
//     for(let char of str){
//         charCount[char]=(charCount[char] || 0)+1
//     }
// // find the first non-repeated character
//     for(let char of str){
//         if(charCount[char]==1){
//             return char
//         }
//     }return null
// }
// console.log(fun('heyyemii'))

//---------LONGEST WORD IN STRING-----------

// function longestword(str){
//     const words=str.split(' ')
//     let longest='';

//     for(let word of words){
//         if(word.length>longest.length){
//             longest=word;
//         }
//     }return longest;
// }
// console.log(longestword('japanees girls git of'))

//-------CAPITALIZE THE FIRST LETTER OF EACH WORDS----------------

// function CapitalizeFirstLetter(sentance){
//     let word=sentance.split(' ')
//     for(let i=0;i<word.length;i++){
//         word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1)
//         }return word.join(' ')
// }

// console.log(CapitalizeFirstLetter('greeks weeks'))

//----CONVERT ARRAY STRING TO UPPER CASE--------------

// function Capital(arr){
//     const UpperCaseArray=[]
//     for(let i=0;i<arr.length;i++){
//         UpperCaseArray[i]=arr[i].toUpperCase()
//     }return UpperCaseArray

// }
// console.log(Capital(['g','e','t']))

//---REVERSE AN ARRAY--------

// function Reversed(arr){
//     const reversedarray=[];
//     for(let i=arr.length-1;i>=0;i--){
//         reversedarray.push(arr[i])
//     }return reversedarray
// }
// console.log(Reversed([3,6,2,4]))

//--------GET LAST ELEMENT OF AN ARRAY----------
// function LastElement(arr){
// return arr[arr.length-1]
// }
// console.log(LastElement([2,5,4,3]))

//--------REMOVE THE FALSY VALUE FROM THE ARRAY-----

// function falsyvalue(arr) {
//   const answer = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       answer[answer.length] = arr[i];
//     }
//   }
//   return answer;
// }
// console.log(falsyvalue([2, "", 45, false]));


//---------FACTORIAL--------
// function factorial(n){
//     if(n===0||n===1) return 1;
//     return n*factorial(n-1)
// }
// console.log(factorial(4))



//---CREATE AN OBJECT AND PRINT THE PROPERTY-----
// let person={name:'hixa',age:22};
// console.log(person.name)


//---MAP FUNCTION ON ARRAY-------
// let number=[2,3,4,5]
// let ans=number.map(function(num){
//     return num*2
// })
// console.log(ans)


//-----------CREATE A SIMPLE CLASS-------------
// class Animal{
//     constructor(name){
//         this.name=name;
//     }
//     speak(){
//         console.log(`${this.name} makes noise`)
//     }
// }
// let dog=new Animal("Rabbit")
// dog.speak()




//--------JSON TO PARSE AND STRINGIFY DATE-----------
// let jsonData='{"name":"greeks"}';
// let parsedDate=JSON.parse(jsonData)
// console.log(parsedDate.name)



//-----------CONVERT STRING TO ARRAY------------
// let sentance="greeks for weeks"
// let arrays=sentance.split(' ')
// console.log(arrays)



//----SWITCH STATEMENT---------------
// let course="javascript"
// switch(course){
//     case "javascript":
//         console.log("this is js code")
//         break;
//     default:
//         console.log('not a js course')
// }


//---------CHECK TWO STRING ARE ANAGRAMS OR NOT-----------
// function isAnagram(str1,str2){
//     if(str1.length!==str2.length){
//         return false
//     }
//     let count1={}   //count how many times each charactor appears in string
//     let count2={}

//     for(let i=0;i<str1.length;i++){
//         let char=str1[i]
//         count1[char]=(count1[char]||0)+1
//     }
//     for(let i=0;i<str2.length;i++){
//         let char=str2[i]
//         count2[char]=(count2[char]||0)+1
//     }
//     for(let char in count1){
//         if(count1[char]!==count2[char]){
//             return false
//         }
//     }return true
// }

// console.log(isAnagram("listen","silent"))


//------MAX DIFF BTW TWO NUMBERS IN ARRAY------------
// function maxDifference(arr){
//  let min=arr[0]   //assume smallest no. is first number
//  let maxDiff=0;

//  for(let i=1;i<arr.length;i++){
//     const diff=arr[i]-min;
//     maxDiff=Math.max(maxDiff,diff);
//     min=Math.min(min,arr[i])
//  }
//  return maxDiff
// }
// console.log(maxDiff([1,5,20,79,100]))



//---REMOVE AN DUPLICATE FROM AN ARRAY-------------
// function removeduplicate(arr){
//     const unique=[]
//     for(let i=0;i<arr.length;i++){
//         if(!unique.includes(arr[i])){
//             unique.push(arr[i])
//         }
//     }return unique
// }
// console.log(removeduplicate([3,3,4,5,6,5,4,9,8]))

//---------COUNT VOWELS IN STRING-------------
// function CountVowels(str){
//     let count=0
//     const vowels='aeiouAEIOU'
//     for(let i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
//             count++
//         }
//     }return count

// }
// console.log(CountVowels("toshi ankitha"))



//----------GET UNIQUE CHARACTORS FROM STRING-------
// function uniqueChar(str){
//     const uniqueChar=[]
// let count=0
// for(let i=0;i<str.length;i++){
//     if(!uniqueChar.includes(str[i])){
//         uniqueChar.push(str[i])
//     }
// }return uniqueChar.join('')
// }
// console.log(uniqueChar('greeklogic'))