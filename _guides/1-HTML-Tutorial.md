---
layout: guides
title:  "HTML Tutorial"
categories: tutorials
---
<!--  *italic*  **bold**  ***bold/italic***  [link](http://cjdns.info/) -->

**What to Expect**
  * General Rule
  * Header (Including files, titles, etc)
  * Comments
  * Commonly Used Tags
  * Self-closing tags
  * Lists (ordered & unordered)
  * Attributes

----

<h2>General Rule</h2>
{% highlight HTML %}

<tagname> Hello World </tagname>

{% endhighlight %}

These are called tags.

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

A **typical** html document would have an **outline/template** like the one shown below:
{% highlight HTML %}
<!DOCTYPE html>
<html>
  <head>
    <!--external files or metadata here-->
    <title>Page Title</title><!--Title of the page usually appears on tab-->
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
This tag allows you to display an image or gif on your page.
{% highlight HTML %}

<img src="https://imgur.com/qFxJTtS.gif">

{% endhighlight %}
<img src="https://imgur.com/qFxJTtS.gif">

Later I'll show you how to resize this image.

<h2>Lists(ordered & unordered)</h2>
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

<h2>Attributes</h2>
Attributes are modifiers of an HTML element type. There are several types of attributes **required**, **optional**, **standard**, and **event**.
**Required** attributes are needed by the element in order to function correctly this is the case for tags like the 'a' tag.
**Optional** attributes are not needed by the element but can be used to modify the default function like the example below.

*'a'* tags are used for links. The *'href'* attribute is an example of a **required** attribute because if it is not included it will just be a regular block of text; the *'target'* attribute is an **optional** attribute because it is being used to alter the default *'_blank'* allows the tag to tell the browser to open the page in a new webpage or tab.
{% highlight HTML %}
  <a href="https://imgur.com/qFxJTtS.gif" target="_blank">Image</a>
{% endhighlight %}

<a href="https://imgur.com/qFxJTtS.gif" target="_blank">Image</a>

Similarly, with the *'img'* tag the *'src'* attribute is **required** in order for it to show an image. We can also include the **optional** tags *'width'* and *'height'* to change the size of the image

{% highlight HTML %}

<img src="https://imgur.com/qFxJTtS.gif" width="150px" height="auto">

{% endhighlight %}
<img src="https://imgur.com/qFxJTtS.gif" width="150px" height="auto">

The auto value allows it to adjust based on the width size

**Standard** Attributes include *'id'*, *'class'*, *'style'*, *'title'*, etc. These attributes are used to alter the style (or CSS) of the HTML tag which we will discuss later. **Event** Attributes are inline javascript functions in the HTML which we will also discuss later.

----

<h2>Example</h2>
{% highlight HTML %}



{% endhighlight %}

yields

<img src="">

----

<h2>Try for Yourself!</h2>
Create an HTML document with all the following:

  * Title the page with your name in the title tags
  * Create a list of links to popular search engines
  * Create an ordered list of your preferred search engine by rank
  * Create another list that labels your favorite food, drink, color and animal
  * Place the CSUF logo onto the page with size 150px by 150px
  * Create another list that uses the commonly used tags **bold**, *italics*, <u>underline</u>, and ***bold/italic***

Make sure to **use headers to divide each of these activities** on a single HTML page and **use the template** given above.

----

<h2>References</h2>
  * <a href="http://webdev.slides.com/coltsteele/deck-7-50#/" target="_blank">Intro to HTML</a>
