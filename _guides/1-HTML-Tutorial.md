---
layout: guides
title:  "HTML Tutorial"
categories: tutorials
---
<!--  *italic*  **bold**  ***bold/italic***  [link](http://cjdns.info/) -->

**What to Expect**
  * Tags
  * Header (Including files, titles, etc)
  * Comments
  * Commonly Used Tags
  * Self-closing tags
  * Lists (ordered & unordered)
  * Attributes

----

<h2>Tags</h2>

<h3>General Rule</h3>
{% highlight HTML %}

<tagname> Hello World </tagname>

{% endhighlight %}

<h2>Header</h2>
For the beginning of your HTML documents it is good practice to specify the document type with:
{% highlight HTML %}
<!DOCTYPE html>
{% endhighlight %}

In order for the computer to easily identify what type of document it is. You can also enclose all your HTML with an html tag like so,
{% highlight HTML %}

<html>
<!--Content Here-->
</html>

{% endhighlight %}

In addition, developers generally put external stylesheets and other definition tags within header tags like so,
{% highlight HTML %}
<head>
  <link rel="stylesheet" href="/stylesheet_directory"/><!--You would place your external style file in this tag-->
  <title>Page Homepage</title> <!--Title of the page usually appears on tab-->
</head>
{% endhighlight %}

A typical html document would have an outline like the one shown below:
{% highlight HTML %}
<!DOCTYPE html>
<html>
  <head>
    <!--external files or metadata here-->
    <title></title>
  </head>
  <body>
  </body>
</html>
{% endhighlight %}


<h2>Comments</h2>
Comments are an essential part of every coding language for HTML, if you haven't noticed already look like the example provided below
{% highlight HTML %}
<!--Hello I am a comment-->
{% endhighlight %}

You will use this to describe sections of your code as well as better organize your code!

<h2>Commonly Used Tags</h2>
You will use these on many HTML document!

<h3>Bold</h3>
{% highlight HTML %}

<b> Hello World </b>

<strong> Hello World </strong>

{% endhighlight %}

<b> This is with a b tag </b><BR>
<strong> This is with a strong tag </strong>

<h3>Italics</h3>
{% highlight HTML %}

<i> Hello World </i>

{% endhighlight %}

<i> This is with a i tag </i>

<h3>Underline</h3>
{% highlight HTML %}

<u> Hello World </u>

{% endhighlight %}

<u> This is with a u tag </u>

<h3>H tag (headers)</h3>
These are like all the headers you see on this page. Your headers may look different from this website because you haven't added styling yet.
{% highlight HTML %}

<h1> Hello World </h1>
<h2> Hello World </h2>
<h3> Hello World </h3>
<h4> Hello World </h4>
<h5> Hello World </h5>
<!--and so on ...-->

{% endhighlight %}

<h1> This is with a h1 tag </h1>


<h3>Paragraph tag</h3>
This is used to signify a paragraph.
{% highlight HTML %}

<p> Hello World </p>

{% endhighlight %}

<p> This is with a h1 tag </p>

<h2>Self Closing Tags</h2>
Self closing tags are tags that do not need a closing tag like the examples above.
<h3>Image Tag</h3>
This tag allows you to display an image on your page
{% highlight HTML %}

<img src="/img/acm-desktopcta.png">

{% endhighlight %}

<img src="/img/acm-desktopcta.png">

<h3>Lists(ordered & unordered)</h3>
An **unordered** list is a bulleted list or any symboled list.
{% highlight HTML %}
<ul><!--signifies start of unordered list-->
  <li>Hello</li><!--first bullet point-->
  <li>World</li><!--second bullet point-->
</ul><!--signifies end of unordered list-->
{% endhighlight %}

 * Hello
 * World

 An **ordered** list is a numbered list.
 {% highlight HTML %}
 <ol><!--signifies start of ordered list-->
   <li>Hello</li><!--first point-->
   <li>World</li><!--second point-->
 </ol><!--signifies end of ordered list-->
 {% endhighlight %}

1. Hello
2. World
