## Goal

Set the Secure flag on the session id cookie.

## Solution

1. As the user, open devtools, visit the application tab, click cookies on the left hand side, right click on https://localhost.charlesproxy.com, and click clear.
1. https://github.com/mikesherov/web-security-essentials/commit/lesson-4
1. As the user, open devtools, visit the network tab, log into https://localhost.charlesproxy.com, click on the request in the network tab, look for `connect.sid` in the `cookie` header of the Request Headers section.
1. As the user, open devtools, visit the network tab, visit http://localhost.charlesproxy.com, click on the request in the network tab, notice `connect.sid` is not present in the `cookie` header of the Request Headers section.

## Answers

1. What does setting the Secure flag on a cookie do?
   Setting the Secure flag on a cookie tells the browser to only send the cookie if the request is made over https. This protects the cookie from ever being sent as cleartext.
2. Even if we're redirecting all traffic to https, and we have the session id cookie set to Secure only, are we 100% gauranteed to only ever be sending cookie data over https? If not, why not?
   The Secure flag is set per cookie. So even if you set the Secure flag on a session id cookie, you may forget to set it on another sensitive or important cookie and accidentally transmit it over http.
