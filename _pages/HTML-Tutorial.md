---
layout: pages
title:  "HTML Tutorial"
categories: tutorials
---

**What to Expect**
  * Tags
  * Header (Including files, titles, etc)
  * Comments
  * Attributes
  * Text Decorations
  * Lists (ordered & unordered)
  * Tables

----

**Tags**

## General Rule
{% highlight HTML %}

<tagname> Hello World </tagname>

{% endhighlight %}

## Commonly Used Tags
You can practice these on any HTML document!

### Bold
{% highlight HTML %}

<b> Hello World </b>

<strong> Hello World </strong>

{% endhighlight %}

<b> This is with a b tag </b>
<strong> This is with a strong tag </strong>


Neque porro *quisquam* est, qui **dolorem** ipsum, quia ***dolor*** sit, amet, [consectetur](http://cjdns.info/), adipisci velit.

 * lorem
 * ipsum

1. dolor
2. sit

| First Header | Second Header |
|--------------|---------------|
| Table Cell   | Table Cell    |

**Blockquote**

> They who can give up essential liberty to obtain a little temporary safety, deserve neither liberty nor safety.
>
> _Benjamin Franklin_

**Code**

{% highlight c %}

static void asyncEnabled(Dict* args, void* vAdmin, String* txid, struct Allocator* requestAlloc)
{
    struct Admin* admin = Identity_check((struct Admin*) vAdmin);
    int64_t enabled = admin->asyncEnabled;
    Dict d = Dict_CONST(String_CONST("asyncEnabled"), Int_OBJ(enabled), NULL);
    Admin_sendMessage(&d, txid, admin);
}

{% endhighlight %}
