## Goal

Set the httpOnly flag on the session id cookie.

## Solution

1. https://github.com/mikesherov/web-security-essentials/commit/lesson-10
2. As the attacker, log into https://localhost.charlesproxy.com
3. As the attacker, paste the xss payload in the message form, and submit.
4. As the user, log into https://localhost.charlesproxy.com
5. As the attacker, observe that the user's cookie is a logged as an empty string, and that the session id was not logged in the terminal.

## Answers

1. What does setting the httpOnly flag do?
   Setting the httpOnly flag ensures that a cookie is sent when making requests, but not programatically accessible to JavaScript. That is, an httpOnly cookie will not appear in `document.cookie`, and therefore can't be extracted via XSS.
2. Even we have the session id cookie set to httpOnly, are we 100% gauranteed to never have cookies leak to JavaScript?
   The httpOnly flag is set per cookie. So even if you set the httpOnly flag on a session id cookie, you may forget to set it on another sensitive or important cookie and accidentally make it accessible to JavaScript.
3. What is the principle of least privilege (PoLP), and how does it apply to the httpOnly flag?
   PoLP says that any abstraction layer of a software system should only be able to access the information required to function correctly. In this case, we can say that if a site has no need to access a cookie programmatically, PoLP would dictate that the httpOnly flag be set on that cookie.
