## Goal

Set the SameSite flag on the session id cookie.

## Solution

1. As the user, clear all existing cookies for https://localhost.charlesproxy.com
2. https://github.com/mikesherov/web-security-essentials/commit/lesson-7
3. As the user, log into https://localhost.charlesproxy.com
4. As the user, get "tricked" into visiting https://evil.com:666/index.html
5. As the user, go back to https://localhost.charlesproxy.com and observe that no "HACKED!" message was posted on your behalf.

## Answers

1. What does setting the SameSite flag to "lax" do?
   SameSite lax allows cookie to be sent only when the request origin matches the origin of the site making the request, OR when a "top level navigation" occurs between two origins. That is, our CSRF attack gets blocked, but following a link from another site to https://localhost.charlesproxy.com would still send cookies.
2. Why is setting the flag to "strict" often not appropriate for your site?
   Setting the SameSite flag to strict will prevent cookies from being sent when following a link from another site to https://localhost.charlesproxy.com. This would effectively log the user out every time they visited the site via an external link, which is oftentimes an unacceptable user experience.
