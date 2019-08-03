## Goal

Set up https locally to prevent the simulated MITM attack.

## Solution

1. https://github.com/mikesherov/web-security-essentials/commit/lesson-2
2. As the attacker, open Charles Proxy.
3. As the user, log into https://localhost.charlesproxy.com and then submit a message.
4. As the attacker, find the request in Charles, and notice that message and the session id located inside the message, are encrypted.

## Answers

1. How does https help prevent MITM attacks?
   By encrypting the information between the two parties using public/private key pairs, a 3rd party can not decrypt the transmitted information, and therefore can not tamper with it nor collect it.
2. Why isn't it sufficient to only serve login/signup pages over https and http everywhere else?
   Serving login pages over https prevents attackers from stealing a victim's username and password. However, stealing a session id, which is transmitted on every pageload once logged in, is just as sensitive as a username and password, and must be protected too.
