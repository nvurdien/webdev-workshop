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
  * Background stuff

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

----

<h2>References</h2>
  * <a href="http://webdev.slides.com/coltsteele/deck-7-10-53#/" target="_blank">Intro to CSS</a>
  * <a href="http://webdev.slides.com/coltsteele/deck-7-10-11-54#/" target="_blank">Colors in CSS</a>
