---
layout: guides
title:  "HTML/CSS/Javascript Personal Site Guide"
categories: tutorials
---
**Before you start**

Please pick one of the following templates before you start this tutorial:

  * <a href="https://html5up.net" target="_blank">HTML5up</a> <i class="fa fa-star"></i><i class="fa fa-star"></i>
  * <a href="https://www.creative-tim.com" target="_blank"> Creative Tim</a> <i class="fa fa-star"></i>
  * <a href="https://freebiesbug.com/code-stuff/html-website-templates/" target="_blank"> FreebiesBug</a>
  * <a href="http://www.os-templates.com/free-website-templates?start=27" target="_blank"> OS-Templates</a>
  * <a href="https://templated.co" target="_blank"> Templated.co</a>
  * <a href="http://www.templatemo.com/page/1" target="_blank"> Templatemo</a>

Once you have successfully downloaded the template of your choice please follow the directions below.

----

**Setting up**

Once you have downloaded/saved your website template, it will show up in wherever you set up your download folder.

Go to that folder and open the main/homepage/index html file in any text editor of your choice (I recommend <a href="https://atom.io" target="_blank">Atom</a> or <a href="https://www.sublimetext.com" target="_blank">Sublime</a>)

In example, mine is labeled **index.html**. If it is not named index.html please change it to index.html since github recognizes the homepage link as index.html

<a href="https://imgur.com/Yo1ei7h.gif" target="_blank">Need Help?</a>

You can also see how you are editing your site in realtime by opening the HTML document in your browser and refreshing the page.

<a href="https://i.imgur.com/p6ogpho.gif" target="_blank">Need Help?</a>

You can debug your site by right-clicking (if you are on Windows/Linux) or control+click (if you are on a Mac) and selecting the "Inspect Elements" option which should come with every browser.

<a href="https://i.imgur.com/kTnxLWn.gif" target="_blank">Need Help?</a>

----

**Deploying to Github**

Create a repository named <insertGithubUserNameHere>.github.io without the '<>'

In this tutorial, my username is nvurdienn so my repository would be named nvurdienn.github.io

<a href="https://i.imgur.com/QA32DJL.gif" target="_blank">Need Help?</a>

Once you have done that set up Git on your computer, if you haven't already. If you have a Mac/Linux, Git should be preinstalled on your system; however, if you have windows you should download <a href="https://desktop.github.com" target="_blank">Github Desktop</a>. Instructions on how to set up Git through command line are listed <a href="http://burnedpixel.com/blog/setting-up-git-and-github-on-your-mac/" target="_blank">here</a>. Linux/Mac users may also set up Git by downloading and logging into <a href="https://desktop.github.com" target="_blank">Github Desktop</a>.

Once you have logged into Git, add all the files into that repository.

First, you will need to clone your repository to your computer. Then move into that directory with the "cd" command

{% highlight bash %}

git clone <yourgithubclonelink>
cd <insertGithubUserNameHere>.github.io

{% endhighlight %}

Open the folder that contained all the website files and copy them over to your repository folder.
Then type the following commands

{% highlight bash %}

git add .
git commit -m "<Any commit message here>"
git push

{% endhighlight %}

<a href="https://i.imgur.com/jkVeHWa.gif" target="_blank">Need Help?</a>

Congrats you have successfully created your personal page!

The page would be at <insertGithubUserNameHere>.github.io

As an example, the username used in this tutorial would be nvurdienn.github.io

You can continuously edit this repository by using the last three commands listed above. Make sure you save all files before trying to add them to your repository. Also, make sure you edit all documents in the folder connected to your github repository as well as when you are using the above commands to be in the correct directory.
