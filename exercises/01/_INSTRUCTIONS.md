## Goal

Simulate a man in the middle session hijack by intercepting a victim's request, maliciously modifying it, and replaying it.

## Instructions

1. As the attacker, open Charles Proxy.
2. As the user, log into http://localhost.charlesproxy.com and then submit a message.
3. As the attacker, find the request in Charles, note that the session id is present as cleartext, modify it, and replay it.
4. As the user, refresh http://localhost.charlesproxy.com and notice there is now a message present that "you" didn't write.

## Questions

1. What is a session id?
2. What is Charles Proxy?
3. What is a man in the middle attack?
4. What is a session hijacking attack?
