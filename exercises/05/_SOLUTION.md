## Goal

Set up hsts (HTTP Strict Transport Security) that is eligible for hsts preloading.

## Solution

1. https://github.com/mikesherov/web-security-essentials/commit/lesson-5
2. As the user, open devtools, visit the network tab, visit http://localhost.charlesproxy.com, click on the request in the network tab and notice its response code is 301 from http://localhost.charlesproxy.com
3. As the user, open devtools, visit the network tab, visit http://localhost.charlesproxy.com a second time, click on the request in the network tab and notice its response code is 307, and under the General Section the Status Code is 307 Internal Redirect, and in Response Headers notice the Non-Authoritative-Reason: HSTS field.

## Answers

1. What does hsts do and why is it important?
   Without hsts, requests with http (or no protocol) must first hit the server over http, only to be told to try again over https. This first http request may contain sensitive information. hsts tells the browser to rewrite requests to https **before** attempting to connect over http. This ensures no request except for the very first request is sent over http, which prevents accidental leakage of information over http.
2. What does hsts preloading do?
   Before browsers ever attempt to connect to a domain, they check the hsts preload list to see if the _default_ connection for your domain should be https instead of http. Without hsts preloading, the very first request each user makes to your site will http, and then https thereafter. With hsts preloading, no request to your site will ever be made over http.
3. What is "defense in depth" and how does it apply to hsts and Secure cookies?
   Defense in depth, otherwise known as "belts and suspenders", is a security technique that says to mitigate vulnerabilities in as many ways possible in the case that one way fails, your users are still secure. hsts and Secure cookies combined make up a "defense in depth" approach to ensure cookies aren't sent over http: hsts will ensure no http requests are ever made just in case you forget to set the Secure flag on one of your cookies, and the Secure flag will ensure cookies aren't set over http just in case hsts fails.
