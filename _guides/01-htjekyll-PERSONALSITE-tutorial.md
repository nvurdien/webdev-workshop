---
layout: guides
title:  "Jekyll Personal Site Guide"
categories: tutorials
---
**Before you start**

Please pick one of the following templates before you start this tutorial:

  * <a href="https://github.com/jekyll/jekyll/wiki/Themes" target="_blank">Github Compilation of themes</a> <i class="fa fa-star"></i>
  * <a href="http://jekyllthemes.org" target="_blank">Jekyll Themes</a>
  * <a href="https://jekyllthemes.io" target="_blank">JekyllThemes.io</a>


Once you have successfully downloaded the template of your choice please follow the directions below.

----

**Setting up**

Once you have downloaded/saved your website template, it will show up in wherever you set up your download folder.

Go to that folder and open the main/homepage/index html file in any text editor of your choice (I recommend <a href="https://atom.io" target="_blank">Atom</a> or <a href="https://www.sublimetext.com" target="_blank">Sublime</a>)

In example, mine is labeled **index.html**. If it is not named index.html please change it to index.html since github recognizes the homepage link as index.html

<a href="https://imgur.com/Yo1ei7h.gif" target="_blank">Need Help?</a>

<b>You probably won't have to change <u>ANY</u> HTML in your Jekyll template!</b>

But if you do, you can see how you are editing your site in realtime by opening the HTML document in your browser and refreshing the page <a href="https://i.imgur.com/p6ogpho.gif" target="_blank">like this</a>.

You can debug your site by right-clicking (if you are on Windows/Linux) or control+click (if you are on a Mac) and selecting the "Inspect Elements" option which should come with every browser.

<a href="https://i.imgur.com/kTnxLWn.gif" target="_blank">Need Help?</a>

Also please note for Jekyll, if you plan on managing a blog many of the templates will include a _posts folder where you can create .md files to create new posts. The templates will have the same structure as the sample .md file given in the folder. Also every Jekyll file will be set up differently and generally in all the "README.md" files in the home directory will contain set up instructions. <b>The _config.yml file should be filled out with your information!</b>

<b>If you are using a template for Jekyll and you are new to web development, please only edit the .md files and the _config.yml file in order to prevent any unwanted effects!!</b>

Many of the pages you will be using will be using Markdown so here is an excellent resource on getting started with that is this <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links" target="_blank">Markdown-Cheatsheet</a> on Github. Markdown also works with HTML so if you would like a guide on understanding HTML, I am currently creating one but you can also refer to other sources online. You should not have to alter any of the CSS or Javascript with these templates.


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

You can continuously edit this repository by using the last three commands listed above just make sure you are in the correct directory. Make sure you save all files before trying to push them to github. Also, make sure you edit all documents in the folder connected to your github repository.
