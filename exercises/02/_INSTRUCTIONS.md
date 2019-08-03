## Goal

Set up https locally to prevent the simulated MITM attack.

## Instructions

1. In code, use the `https-localhost` npm package and configure our application to use it.
2. As the attacker, open Charles Proxy.
3. As the user, log into https://localhost.charlesproxy.com and then submit a message.
4. As the attacker, find the request in Charles, and notice that message and the session id located inside the message, are encrypted.

## Questions

1. How does https help prevent MITM attacks?
2. Why isn't it sufficient to only serve login/signup pages over https and http everywhere else?
