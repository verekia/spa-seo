# SPA SEO Experiment

This is an experiment ran on September 19 2020 to check the state of JavaScript indexing for SPAs, for search engines, Facebook Open Graph meta tags, and Twitter Cards.

Googlebot will wait for around 5 seconds after the initial rendering of a page before indexing if there is no AJAX request going on. However, if there are pending AJAX requests, I found that it can wait for them to resolve for up to 50 seconds.

Bing didn't seem to show signs of waiting for anything, and simply showed the initial HTML in the webmaster console. But maybe the console is not as good as Google's, because some people have reported that sometimes Bing [may index SPA content](https://www.screamingfrog.co.uk/bing-javascript/). It seems unreliable anyway if SEO is essential to you.

Facebook didn't show signs of waiting for delayed content either, as only the initial open graph tags were taken into account.

![Google result 1](/img/google%201.png)

![Google result 2](/img/google%202.png)

![Facebook result](/img/facebook.png)
