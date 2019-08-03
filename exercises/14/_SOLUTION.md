## Goal

Construct a working XSS attack that steals the content of the user's logged in homepage via remote script injection.

## Solution

1. https://github.com/mikesherov/web-security-essentials/commit/lesson-14
2. As the attacker, log into https://localhost.charlesproxy.com
3. As the attacker, paste the xss payload in the message form, and submit.
4. As the user, log into https://localhost.charlesproxy.com
5. As the attacker, observe the user's information, including the document.body of their homepage which contains their SSN, being logged in the terminal.

## Answers

1. What is remote script injection?
   Remote script injection is a form of XSS where the attacker injects a `<script>` tag with a `src` attribute pointing to exploit code. It has the same capabilities as inline script injection, but the payload is delivered via a remote script.
2. What is wrong with our CSP directive such that it allows remote script injection?
   While only allowing `self` and `https` is better than the default of "allow everything", `https` is still too broad a list of scripts to allow. Because https is so easy to set up these days and is free, many attackers serve traffic over https, rendering it an ineffective filter for script sources.
