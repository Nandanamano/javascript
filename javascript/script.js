console.log("this is java script")
// alert("wrong comment");
// variable
var a=9;


 console.log(a); //block 1
{
   var a=20
   console.log(a);
}
 let B=23;
 console.log(b);
 {
    let b=34;
    console.log(b);
 }
 b=44
 console.log(b);
//const
const t=30;
console.log(t);
{
    const t=90;
    console.log(t);
}
 console.log(t);
 //data types
 var nam='many more happy returns of the day';
 console.log(typeof(nam));
 //numbers
 var count=true;
 console.log(typeof(count));
 var gtype;
 console.log(typeof(gtype));
 //array
 let arr=['red','blue','white',10];
 console.log(arr.length);
 arr.push('violet');
 console.log(arr);
 arr.pop();
 console.log(arr);
 //javascript objects
 let car={
    milleage:100,
    model:'110',
    color:'red'
 }
 console.log(car);
 console.log(car.model);
 console.log(car.milleage);
 let person=new Object();
 person.gender='male';
 person.height=100;
 console.log(person);
 var a=20;
     b=10;
  console.log(a+b);
  console.log(a-b);
  console.log(a*b);
  console.log(a/b);
  console.log(a%b);
  var a=10;
      b=30;
  console.log(a);
  console.log(b);
if (a==b || a==10) {
   console.log('a is equal to b');
   
} else {
   console.log('a is not equal to b and a is not 10');
   
}
var c=30;
d='30';
    if (c===d || c==d) {
      console.log('c is equal to d');
   
} else {
   console.log('c is not equal to d');
}
var f=20;
    g=10;
    if (f>=g || f==20) {
      console.log('f is greater than g or f is  20' );
      
    } else {
      console.log('g is greater than f or f is not 20');
      
    }
    let add=6;
    add*=3;
    console.log(add);
    let a=2;
    let b=3;
    let c=9;
    let d=5;
     var exp=a+b*(c-d)-7;
     console.log(exp);
    //function
   function display(name){
      console.log('hi ' +name+ ' welcome to js');
   }
   display('nandana');
   function addition(t,s){
      var result=t+s;
      return result;
      
   }
   
var result=addition(60,90);
console.log('the sum is ' +result);

function sub(u,p){
   var subtraction=u-p;
   return subtraction;
   
}

var subtractiobz=addition(70,80);
console.log('the difference is ' +result);




 
