## Goal

Construct a working XSS attack that steals the user's cookies.

## Solution

1. https://github.com/mikesherov/web-security-essentials/commit/lesson-9
2. As the attacker, log into https://localhost.charlesproxy.com
3. As the attacker, paste the xss payload in the message form, and submit.
4. As the user, log into https://localhost.charlesproxy.com
5. As the attacker, observe the user's information, including their session id, being logged in the terminal.

## Answers

1. What is XSS?
   Cross-Site Scripting is when malicious scripts are injected into websites. They occur when an application uses user input in its responses without either validating or encoding it. This gives an attacker free reign to execute arbitrary scripts on behalf of users.
2. This form of XSS is called stored XSS. If the attack is successful, who is vulnerable... all users, a specific user, or just the attacker themselves? Why?
   All users. When a malicious script is stored and presented back to all users of a website, that script will execute **on behalf of** the user on the site. It's as if the malicious script was part of the website it's present on.
3. Are JS frameworks like React or Vue vulnerable to XSS?
   While React (and Vue) are generally fairly safe from most forms of XSS, there are still plenty of ways to inject unescaped or unencoded user input into an application. [See here for just some of the ways in which React is not safe from XSS](https://medium.com/dailyjs/exploiting-script-injection-flaws-in-reactjs-883fb1fe36c1).
