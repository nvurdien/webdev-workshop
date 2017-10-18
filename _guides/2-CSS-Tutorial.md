---
layout: guides
title:  "CSS Tutorial"
categories: tutorials
---

**What to Expect**
  * General Rule
  * Comments
  * Where can we write styles?
  * &lt;link&gt; tag
  * Colors
  * Classes
  * IDs
  * Background stuff
  * Properties and Box Model

----

The <a href="http://csszengarden.com" target="_blank">CSS Zen Garden</a> demonstrates the power of CSS along with HTML. All this can be done without the usage of Javascript. In this tutorial, I won't teach you how to do animations but we'll be learning necessary information that lead up to animation if you're interested.

<h2>General Rule</h2>
{% highlight CSS %}

selector{
  property: value;
  property2: value2;
}

{% endhighlight %}

<h2>Comments</h2>
Comments are similar to how you create comments in C++/C

{% highlight CSS %}

/* This is a comment */

{% endhighlight %}

<h2>Where can we write styles?</h2>
There are several places where you can write styles. You can create a style tag in the head area of an HTML document like so,

{% highlight HTML %}

<!DOCTYPE html>
<html>
  <head>
    <title>Home Page</title>
    <style type="text/css">
      selector{
        property: value;
        property2: value2;
      }
    </style>
  </head>
  <body>
  </body>
</html>

{% endhighlight %}

You can also do inline styling

{% highlight HTML %}

<p style="color:pink">pink colored text</p>

{% endhighlight %}

You can also place them in a CSS file where you will create a list of

{% highlight CSS %}

selector{
  property: value;
  property2: value2;
}

selector2{
  property: value;
  property2: value2;
}

{% endhighlight %}


Out of the three methods it is common convention to just use the last one. **Only use the first two for testing purposes.**

<h2>Link Tag</h2>
The link tag is used to reference an external CSS stylesheet.

{% highlight HTML %}

<!DOCTYPE html>
<html>
  <head>
    <title>Home Page</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
  </body>
</html>

{% endhighlight %}

The 'href' attribute value in this example would assume the style.css file is in the same directory as the HTML file.
This is the recommended way to include style into your HTML document.

<h2>Colors</h2>
When styling your documents there are multiple ways to refer to colors by name, hex code, and rgb.

There are several color names prebuilt into every browser. If you're interested they're all listed <a href="https://www.w3schools.com/colors/colors_hex.asp" target="_blank">here</a>.
You can use these colors like in the example below:

In the CSS file,
style.css
{% highlight CSS %}

h3 {
  color:navy;
}

{% endhighlight %}

In the HTML file,
{% highlight HTML %}
<!DOCTYPE html>
<html>
<head>
  <title>Home Page</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<h3>I am Navy Blue by name.</h3>
<h3 style="color:navy">I am Navy Blue by name.</h3><!--NOT RECOMMENDED inline styling-->
</body>
</html>
{% endhighlight %}

<h3 style="color:navy">I am Navy Blue by name.</h3>

Another very common and professional way of adding colors is through hex codes. There are many color picking sites online with a simple google search (I usually just search "hex codes") that let you get the hex code color you need.

In the CSS file,
style.css
{% highlight CSS %}

h3 {
  color:#000080; /* I'm still navy */
}

{% endhighlight %}

In the HTML file,
{% highlight HTML %}
<!DOCTYPE html>
<html>
<head>
  <title>Home Page</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<h3>I am Navy Blue by hex code.</h3>
<h3 style="color:#000080">I am Navy Blue by hex code.</h3><!--NOT RECOMMENDED inline styling-->
</body>
</html>
{% endhighlight %}

<h3 style="color:#000080">I am Navy Blue by hex code.</h3>

Another alternative that are the rgb values. You can find these values on the same color picking sites as the hex codes.
The first value indicates the amount of red the color has, the next how much green and the next how much blue.

In the CSS file,
style.css
{% highlight CSS %}

h3 {
  color:rgb(0, 0, 128); /* I'm still navy */
}

{% endhighlight %}

In the HTML file,
{% highlight HTML %}
<!DOCTYPE html>
<html>
<head>
  <title>Home Page</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<h3>I am Navy Blue by rgb.</h3>
<h3 style="color:rgb(0, 0, 128)">I am Navy Blue by rgb.</h3> <!--NOT RECOMMENDED inline styling-->
</body>
</html>
{% endhighlight %}

<h3 style="color:rgb(0, 0, 128)">I am Navy Blue by rgb.</h3>

<h2>IDs</h2>
ID selectors can only be used on one HTML tag per page, thus unique. The selectors name is preceded by a '#'

In the CSS file,
style.css
{% highlight CSS %}

#favorite{
  color:red;
}

{% endhighlight %}

In the HTML file,
{% highlight HTML %}
<!DOCTYPE html>
<html>
<head>
  <title>Home Page</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <h2>Colors</h2>
  <ul>
  <li>Red</li>
  <li>Orange</li>
  <li>Yellow</li>
  <li>Green</li>
  <li id="favorite">Blue</li>
  <li>Purple</li>
  </ul>
</body>
</html>
{% endhighlight %}


<h2>Classes</h2>
Class selectors can be used on multiple HTML tags, thus not unique. The selectors name is preceded by a '.'

In the CSS file,
style.css
{% highlight CSS %}

.rgb{
  color:red;
}

{% endhighlight %}

In the HTML file,
{% highlight HTML %}
<!DOCTYPE html>
<html>
<head>
  <title>Home Page</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <h2>Colors</h2>
  <ul>
  <li class="rgb">Red</li>
  <li>Orange</li>
  <li>Yellow</li>
  <li class="rgb">Green</li>
  <li class="rgb">Blue</li>
  <li>Purple</li>
  </ul>
</body>
</html>
{% endhighlight %}

<h2>Background Stuff</h2>
Another important aspect of CSS involves the background capabilities. Generally, if you want to define the background color of any a tag in HTML you would use the 'background' property.

In the CSS file,
style.css
{% highlight CSS %}

body {
  background: #d9ffb3;
}

div {
  background: #73e600;
}

p {
  background: #336600;
  color: #fff;
}

{% endhighlight %}

In the HTML file,
{% highlight HTML %}
<!DOCTYPE html>
<html>
<head>
  <title>Home Page</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<div>
I am a green text box
<p> with greener p text</p>
</div>
</body>
</html>
{% endhighlight %}

The body tag with the background property changed makes the entire page light greenish. The div tag will create a darker green text box. The p tag will create an even darker green background for text enclosed in a p tag. The p tag text is also colored white.

<h2>Properties and Box Model</h2>

<a href="https://meiert.com/en/indices/css-properties/" target="_blank">Here is a nice list of CSS Properties and what they do</a>

**Box Model**

<img src=https://i.stack.imgur.com/PeSIJ.gif>

**Content** is where all the text, images and other stuff you included in the box go.
**Padding** is used to move content away from the edge of the box
**Borders** if included surround the content and padding
**Margins** are used to move content away from things outside of the box

**Padding**

When you are using the padding property the order of values is top, right, bottom, left.

{% highlight CSS %}

padding: top, right, bottom, left;

{% endhighlight %}

If you place one value it is equivalent to setting all values (top, right, bottom and left) to that value.

{% highlight CSS %}

padding: 5px;
padding: 5px, 5px, 5px, 5px;

{% endhighlight %}
----

<h2>Example</h2>
The html document
{% highlight HTML %}
<!DOCTYPE html>
<html>
  <head>
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,300italic,400italic" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/style.css"/><!--CSS Stylesheet-->
    <title>My Personal Page</title><!--Title of the page usually appears on tab-->
  </head>
  <body>
  <header>
    <h1>Profile</h1>
  </header>
  <div id="main" class="container">
      <h3>About Me</h3>
      <p><img src="https://imgur.com/4c6qaOy.gif" height="250px" width="auto"><BR>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      <h3>Favorite Stuff</h3>
      <ul>
      <li><b>Food</b> - Ramen</li>
      <li><b>Drink</b> - Juice</li>
      <li><b>Color</b> - Black, Purple, Green, every color!</li>
      <li><b>Animal</b> - Dog</li>
      </ul>
      <h3>Social Links</h3>
      <ul>
      <li><a href="https://github.com" target="_blank">Github</a></li>
      <li><a href="https://www.linkedin.com" target="_blank">Linkedin</a></li>
      <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
      </ul>
    </div>
  </body>
</html>

{% endhighlight %}

The CSS file
{% highlight CSS %}
html
{
  margin: 0;
  padding: 0;
}
body{
  font-family: 'Source Sans Pro', san-serif;
  margin: 0;
  padding: 0;
  background: #f0f0f0;
}

header{
  width: 100%;
  background-color: #ffffff;
  margin: 0px 0px 10px 0px;
  padding: 0;
  top:0;
  text-align: center;
}

h1 {
  font-size: 50px;

}

.container {
  margin-left: 20%;
  margin-right: 20%;

}

#main {
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, .2);
  background-color: #fff;
  height: 100%;
  padding: 10px;
}

{% endhighlight %}

yields

<img src="https://i.imgur.com/objfNMu.png">

----

<h2>Try for Yourself!</h2>
Create a CSS document that styles the HTML page you created in the previous tutorial with all the following:

  * Have all the 'li' tags be red.
  * Have all the h1 tags be a hex code color selected from <a href="http://htmlcolorcodes.com/color-picker/">here</a>.
  * Create an **index** called favorite and set the color property to be your favorite color selected from <a href="http://htmlcolorcodes.com/color-picker/">here</a>.
  * Create a **class** called useful and set the color property to be any color selected from <a href="http://htmlcolorcodes.com/color-picker/">here</a>.
  * Set an 'li' item from your favorites section to have an **id** favorite.
  * Set 'li' items bold, italic, and underline with **class** useful.


----

<h2>References</h2>
  * <a href="http://webdev.slides.com/coltsteele/deck-7-10-53#/" target="_blank">Intro to CSS</a>
  * <a href="http://webdev.slides.com/coltsteele/deck-7-10-11-54#/" target="_blank">Colors in CSS</a>
