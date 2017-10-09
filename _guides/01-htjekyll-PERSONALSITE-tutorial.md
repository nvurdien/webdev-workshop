---
layout: guides
title:  "Jekyll Personal Site Guide"
categories: tutorials
---
**Before you start**

Please pick one of the following templates before you start this tutorial:

  * <a href=https://github.com/jekyll/jekyll/wiki/Themes target="_blank">Github Compilation of themes</a> <i class="fa fa-star"></i>
  * <a href=http://jekyllthemes.org target="_blank">Jekyll Themes</a>
  * <a href=https://jekyllthemes.io target="_blank">JekyllThemes.io</a>


Once you have successfully downloaded the template of your choice please follow the directions below.

----

**Setting up**


<a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links" target="_blank">Markdown-Cheatsheet</a>

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
