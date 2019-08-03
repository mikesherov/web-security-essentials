## Goal

Redirect all http traffic to https, ensuring all content is served over https.

## Instructions

1. In code, create a second express "app", listening on port 80.
2. In code, add middleware that redirects all requests to the same path on the https domain.
3. As the user, visit http://localhost.charlesproxy.com and notice the request is redirected to https://localhost.charlesproxy.com

## Questions

1. Why do we listen for http traffic and redirect to https instead of only listening for https?
2. Even with this redirect in place, is any traffic still served over http?
