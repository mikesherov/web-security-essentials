## Goal

Set up hsts (HTTP Strict Transport Security) that is eligible for hsts preloading.

## Instructions

1. In code, use the `helmet` dependency and configure our server to use it's `hsts` property.
2. In code, add an hsts header that is eligible for preload. That is, it includes subdomains, has a 1 year minimum max age, and indicates it wished to be preloaded.
3. As the user, visit http://localhost.charlesproxy.com and notice it gets redirected via a 301 redirect from the server.
4. As the user, visit http://localhost.charlesproxy.com a second time, and notice it gets redirected to https via a 307 **client side** before it ever hits the server.

## Questions

1. What does hsts do and why is it important?
2. What does hsts preloading do?
3. What is "defense in depth" and how does it apply to hsts and Secure cookies?
