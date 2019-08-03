## Goal

Simulate session hijacking by intercepting a victim's request, maliciously modifying it, and replaying it.

## Solution

1. https://github.com/mikesherov/web-security-essentials/commit/lesson-3
2. As the user, visit http://localhost.charlesproxy.com and notice the request is redirected to https://localhost.charlesproxy.com

## Answers

1. Why do we listen for http traffic and redirect to https instead of only listening for https?
   If we did not listen on http, then all requests to http://localhost.charlesproxy.com would fail. Furthermore,the default protocol for web browsers is http and not https, so users who visit `localhost.charlesproxy.com` (i.e. without the protocol) will be sent to http://localhost.charlesproxy.com, and would fail.
2. Even with this redirect in place, is any traffic still served over http?
   Technically, the 301 response from http://localhost.charlesproxy.com when redirecting from https is transmitted over http, so our session id cookie is **still** being transmitted over http.
