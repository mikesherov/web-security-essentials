## Goal

Construct a working XSS attack that steals the content of the user's logged in homepage.

## Instructions

1. In the evil.com code, append the text version of the document.body to the XSS hijack payload.
2. As the attacker, log into https://localhost.charlesproxy.com
3. As the attacker, paste the xss payload in the message form, and submit.
4. As the user, log into https://localhost.charlesproxy.com
5. As the attacker, observe the user's information, including the document.body of their homepage which contains their SSN, being logged in the terminal.

## Questions

1. We were so easily able to exploit the site right after protecting the session id cookie. What does that tell you about fixing symptoms of larger problems? Discuss.
2. What might the principle of least privilege say about the ability to run arbitrary JavaScript on the site?
