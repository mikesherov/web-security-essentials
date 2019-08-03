## Goal

Construct a working XSS attack that steals the content of the user's logged in homepage via remote script injection.

## Instructions

1. In the evil.com code, copy the contents `static/hijack.html` (minus the script tags) to `static/hijack.js`.
2. In the evil.com code, add a script tag with src `https://evil.com:666/hijack.js` to `static/hijack.html`.
3. As the attacker, log into https://localhost.charlesproxy.com
4. As the attacker, paste the xss payload in the message form, and submit.
5. As the user, log into https://localhost.charlesproxy.com
6. As the attacker, observe the user's information, including the document.body of their homepage which contains their SSN, being logged in the terminal.

## Questions

1. What is remote script injection?
2. What is wrong with our CSP directive such that it allows remote script injection?
