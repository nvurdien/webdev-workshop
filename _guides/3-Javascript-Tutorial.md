---
layout: guides
title:  "Javascript Tutorial"
categories: tutorials
---

**What to Expect**
  * Variables
  * Comments
  * Boolean Logic
  * Loops
  * Function
  * Data Structures
  * Script Tag
  * JQuery

----

A lot of this should be review from your Intro to Programming courses 120, 121, and 131 except in a different language.
Even though Javascript looks different from C++, logically it should be the same. So, I will briefly go over these concepts in this tutorial.

<h2>Variables</h2>
There are 5 primitive data types. They are all stored in a var object. So rather than doing

{% highlight C++ %}

int number;
string word;
bool truth;

{% endhighlight %}

You would do

{% highlight Javascript %}

var number = 55;
var word = "word";
var word = 32.5; //changes it to a number
var truth = True;

{% endhighlight %}

The language is similar to python in that you can also like in the example above reassign variables with a completely different type. Similarly to every other language you can use any of the
I think at this point you would be wondering what the other two data types are they are **undefined** and **null**. Later I will discuss their usage.

With numbers you can use all the operators you are used to in C++, like %, /, *, +, and -

{% highlight Javascript %}

var number = 4; //number = 4
number += 2.5; //number = 6.5
number = 10%3; //number = 1

{% endhighlight %}

Similarly, strings manipulation is like C++

{% highlight Javascript %}

var hello = "hello world"; //double
var hi = 'hello world'; //and single quotes work
var test = "hello" + "world"; // you can combine 2 strings
var length = test.length;
var character = test[1]; //'e'

"hey"[1]; // "e"
"hello there".length // 11

{% endhighlight %}

Variables that are decalared but not initialized are labeled undefined. Whereas, variables have to be assigned 'null' to be 'explicitly nothing'.


{% highlight Javascript %}

var iamnothing; //is undefined
iamnothing = null; //defined with null/nothing

{% endhighlight %}

<h2>Comments</h2>
If you haven't noticed already comments are similar to that of C++

{% highlight Javascript %}

//I am a comment
/*
Hey,
I am a multiline comment!
*/

{% endhighlight %}

<h2>Boolean Logic</h2>

Here is a table of comparison operators. Most of them are also very similar to C++

Assume x = 5

| Operator | Name                     | Example   | Result |
|----------|--------------------------|-----------|--------|
| >        | Greater Than             | x > 10    | false  |
| >=       | Greater Than or Equal to | x >= 5    | true   |
| <        | Less Than                | x < -50   | false  |
| <=       | Less Than or Equal to    | x <= 100  | true   |
| ==       | Equal to                 | x == '5'  | true   |
| !=       | Not Equal to             | x != "b"  | true   |
| ===      | Equal value and type     | x === "5" | false  |
| !==      | Not equal value or type  | x !== "5" | true   |

The last two operators are important since all variables are loosely typed. Each variable does not have a set type. That is why in javascript

5 == "5"

is true but

5 === "5"

is not.

Here is a table of logical operators. All of them should be familiar from C++

Assume x = 5 and y = 9

| Operator | Name | Example                | Result |
|----------|------|------------------------|--------|
| &&       | AND  | x < 10 && x !== 5      | false  |
| &#8741;  | OR   | y > 9 &#8741; x == 5   | true   |
| !        | NOT  | !(x == y)              | true   |

<h2>Loops</h2>
**While loops**
Very similar to C++

{% highlight Javascript %}

while(condition){
  //repeat code
}

{% endhighlight %}


**For loops**
Very similar to C++

{% highlight Javascript %}

for(initialize; condition; step){
  //repeat code
}

{% endhighlight %}


<h2>Functions</h2>
The primary difference between C++ and Javascript is the lack of return type.

{% highlight Javascript %}

function functionName(argument list){
  //some code
}

{% endhighlight %}

You can still return values in javascript even without the return type.

{% highlight Javascript %}

function functionName(argument list){
  //some code
  return "";
}

{% endhighlight %}

<h2>Arrays</h2>
Probably the only data structure you would use in Javascript.

| Function           | What it does                                                        | What does it return?                                        |
|--------------------|---------------------------------------------------------------------|-------------------------------------------------------------|
| push(value)        | adds "value" element to end of array                                | N/A                                                         |
| pop()              | removes last element in the array                                   | element removed                                             |
| unshift(value)     | adds "value" element to front of array                              | N/A                                                         |
| shift()            | removes first element in the array                                  | element removed                                             |
| indexOf(value)     | returns the value of the desired element or -1 if it does not exist | index of desired element; or -1 if does not exist           |
| slice(start, end)  | returns elements from the start and end point specified of an array | elements from the start and end point specified of an array |
| splice(start, end) | removes elements from the start and end point specified of an array | elements from the start and end point specified of an array |


Here is a demo of some commonly used functions

{% highlight Javascript %}

var numbers = ["1", "2", "3"];
numbers.push("4");
//numbers = ["1", "2", "3", "4"]

numbers.pop();
//numbers = ["1", "2", "3"];

var value = numbers.pop(); //returns the removed value
//value = "3"
//numbers = ["1", "2"];

numbers.unshift("0"); //adds 0 to the front of the array
//numbers = ["0", "1", "2"]

numbers.shift();
//numbers = ["1", "2"]

value = numbers.shift(); //returns the removed value
//value = "1";
//numbers = ["2"]

numbers.unshift("1"); //adds 0 to the front of the array
//numbers = ["1", "2"]

numbers.push("3");
//numbers = ["1", "2", "3"]

numbers.push("4");
//numbers = ["1", "2", "3", "4"]


numbers.indexOf("1"); //0
numbers.indexOf("6"); //-1

var range = numbers.slice(1,3);
//range = ["2", "3"];

var all = numbers.slice();
//all = ["1", "2", "3", "4"];

//Both do not alter the original array (numbers)!

numbers.splice(1,1); //will remove the 2nd element
//numbers = ["1", "3", "4"];

{% endhighlight %}

<h3>Iterating</h3>
There are two ways to iterate through an array.

**For Loop**

Iterates through specified number of elements in an array.

{% highlight Javascript %}

var numbers = ["1", "2", "3"];
for(var i = 0; i < numbers.length; i++){
  console.log(numbers[i]); // prints each element of the array
}

{% endhighlight %}

**ForEach Loop**

Iterates through each element of the array.

{% highlight Javascript %}

var numbers = ["1", "2", "3"];
numbers.forEach(function(number){
    console.log(number); //prints each element in the array
  });

{% endhighlight %}


----
<h2>References</h2>
  * <a href="http://webdev.slides.com/coltsteele/javascript-basics-57#/7" target="_blank">Javascript Basics</a>
  * <a href="http://webdev.slides.com/coltsteele/deck-4-47#/" target="_blank">Boolean Logic</a>
  * <a href="http://webdev.slides.com/coltsteele/loops-58#/" target="_blank">Loops</a>
  * <a href="http://webdev.slides.com/coltsteele/loops-18-59#/" target="_blank">For Loops</a>
  * <a href="http://webdev.slides.com/coltsteele/javascript-basics-20-21-22-23-64#/" target="_blank">JS Functions</a>
  * <a href="http://webdev.slides.com/coltsteele/javascript-basics-20-21-62#/" target="_blank">Array Methods</a>
  * <a href="http://webdev.slides.com/coltsteele/javascript-basics-20-21-22-63#/" target="_blank">Array Iteration</a>
