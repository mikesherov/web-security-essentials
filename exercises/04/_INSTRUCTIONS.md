## Goal

Set the Secure flag on the session id cookie.

## Instructions

1. As the user, clear all existing cookies for https://localhost.charlesproxy.com
1. In code, set the secure flag for the session cookie.
1. As the user, log into https://localhost.charlesproxy.com and notice the session id cookie is transmitted.
1. As the user, visit http://localhost.charlesproxy.com and notice the session id cookie is not transmitted in the redirect response.

## Questions

1. What does setting the Secure flag on a cookie do?
2. Even if we're redirecting all traffic to https, and we have the session id cookie set to Secure only, are we 100% gauranteed to only ever be sending cookie data over https? If not, why not?
