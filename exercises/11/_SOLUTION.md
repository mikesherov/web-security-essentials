## Goal

Construct a working XSS attack that steals the content of the user's logged in homepage.

## Solution

1. https://github.com/mikesherov/web-security-essentials/commit/lesson-11
2. As the attacker, log into https://localhost.charlesproxy.com
3. As the attacker, paste the xss payload in the message form, and submit.
4. As the user, log into https://localhost.charlesproxy.com
5. As the attacker, observe the user's information, including the document.body of their homepage which contains their SSN, being logged in the terminal.

## Answers

1. We were so easily able to exploit the site right after protecting the session id cookie. What does that tell you about fixing symptoms of larger problems? Discuss.
   In general, while it's important to fix specific issues as part of a defense in depth strategy, it's even more important to identify the root cause of the vulnerability of the issue and fix that as well. In this case, the fact that the XSS payload is able to execute JavaScript at all is the issue, and needs to be mitigated.
2. What might the principle of least privilege say about the ability to run arbitrary JavaScript on the site?
   PoLP would dictate that if the user is not expected to submit arbitrary JavaScript and have it execute, then the application should not allow user submitted arbitrary JavaScript to execute.
