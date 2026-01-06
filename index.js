// const weight = 106

// if(weight>100){

//     console.log('fat')
// }
// else{
//     console.log('slim')
// }

// for (let i=1 ; i<=10;i++)
// {
//  if (i%2==0){
//      console.log(i,"even")

//     }
//     else{
//      console.log(i,"odd")

//     }
// }

// for(i=1; i<=5;i++){
//     console.log("*".repeat(i))
// }
// for(i=1; i<=5;i++){
//     console.log("*".repeat(i))
// }
// for(i=1; i<=3;i++){
//     console.log("*")
// }
// pop
// const arr=[1,2,3,4]
// // arr.pop()
// // console.log(arr)
// console.log(arr.pop())

// const arr=[1,2,3,4]
// // arr.push(5)
// // console.log(arr)
// console.log(arr.push(5))
// console.log(arr)

// const arr=[1,2,3,4]
// // arr.shift()
// // console.log(arr)
// console.log(arr.shift())

//

// const arr=[11,10,7,3]
// let min=999999999;
// for(let i=0; i<=arr.length-1;i++)
// {

// if (min>arr[i]){
//     min=arr[i]
// }

// }
// console.log(min)

// const arr=[
//     {
//         id:1 ,
//         name: "xy",
//         age:12

//     },
//     {
//         id:2,
//         name:"yz",
//         age:2
//     },
//     {
//         id:3,
//         name:"zy",
//         age:20
//     }
// ]
// function CheckAge(age) {
//     return age<20;
// }
// console.log(
//     arr.find((a)=>a.age<20)

// )

// console.log(
//     arr.map((d,i)=> {
//         const sqrd = d.age*d.age
//         return{

//             name:d.name,age:sqrd}
//         }
//     )

// const arr=[ "mango","orange","apple","banana"]
// arr.splice(2,1)
// console.log(arr)

// const arr=[ 1,2,3,4]
// const initialvalue = 1;
// const multiplication = arr.sort((a,b)=>b.age-a.age);
// console.log(multiplication)

// function fn(){
//     console.log("helloooo worlddd")
// }
// fn()

// function fn(a,b){
//     console.log(a+b)
// }
// fn(10,11)

// function fn(){
//     return"hiiiii"
// }
// const a=fn();
// console.log(a)

// function fn(a,b){
//     return a+b
// }
// const a= fn(10,12)
// console.log(a)

// const a ={
//     name:"xy"
// }
// const b={
//     name:"xy"
// }
// console.log(a.name==b.name)

// const person ={
//     firstname: "sush",
//     lastname: "stha",
// };
// person.name=function(){
//     return this.firstname+" "+ this.lastname;
// };
// console.log(person.name())

const a = {
  firstname: "sush",
  lastname: "stha",
  age: 19,
  email: "sush@gmail.com",
  fatherNo: 987,
  motherNo: 989,
};

console.log(Object.keys(a));
// console.log(Object.values(a))
// console.log(Object.entries(a)[0])

Object.values(a).map((d, i) => console.log(i + 1, ",", d));
// Object.entries(a).map((d,i)=>console.log(i+1,",",d))
