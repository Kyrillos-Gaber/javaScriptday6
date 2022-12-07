function Person(_name,_age)
{
  
    this.name=_name; //refer to caller object 
   this.age=_age;

}

Person.prototype.display=function()
{
    console.log(this.name,this.age);
}

function Student(address,name,age,) // function object == class 
{

    
    Person.call(this,name,age);
    this.address=address;
}

Student.prototype=Object.create(Person.prototype);
var p1=new Person('ahmed',20);
var s1=new Student("aswan",'sayed',20);
console.log(s1);
p1.display()
s1.display()
var obj={}

var o2=obj;

o2.name="ali";
console.log(obj.name)

 //student inhirt from Person ,, student is child from person and Perons is parent  
function add()
{
var x={



}
return x;
}
var x={};
console.dir(Student);
var s1=new Student('ahmed',20);

s1.name="gergs"
var s2=new Student('ali',30);
//var arrr2=new Array()
var arr=[10,20,30];
var str="iti aswan";
var x=arr.findIndex((item)=> item==10)
console.log(str.slice(0,3));
console.log(Array.prototype)

Array.prototype.username="ali ahemd";
Array.prototype.showOdd=function()
{
   console.log("this=>",this)
    for(var i=0;i<this.length;i++)
    {
        if(this[i]%2!=0)
        {
            console.log(this[i])
        }
    }
}

var arr=[1,23,45,67,8,90,-8];
var arr2=[7,8900,233,445,567789,3];
arr.showOdd()

arr2.showOdd()

console.log(arr.__proto__==Array.prototype);

console.dir(arr);

delete String.prototype.concat;

var str="iti";

str.concat()



