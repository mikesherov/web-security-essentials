## Goal

Set the SameSite flag on the session id cookie.

## Instructions

1. As the user, clear all existing cookies for https://localhost.charlesproxy.com
2. In code, set the sameSite flag to "lax" for the session cookie.
3. As the user, log into https://localhost.charlesproxy.com
4. As the user, get "tricked" into visiting https://evil.com:666/index.html
5. As the user, go back to https://localhost.charlesproxy.com and observe that no "HACKED!" message was posted on your behalf.

## Questions

1. What does setting the SameSite flag to "lax" do?
2. Why is setting the flag to "strict" often not appropriate for your site?
