## Goal

Simulate session hijacking by intercepting a victim's request, maliciously modifying it, and replaying it.

## Solution

1. As the attacker, open Charles Proxy.
2. As the user, log into http://localhost.charlesproxy.com and then submit a message.
3. As the attacker, filter requests to only display http://localhost.charlesproxy.com.
4. As the attacker, find the request with the crooked arrow, right click and select "Copy cURL Request".
5. As the attacker, paste the request into a text editor, modify `message=` to contain your malicious message.
6. As the attacker, copy the updated cURL Request and paste it into your terminal, and hit enter.
7. As the user, refresh http://localhost.charlesproxy.com and notice there is now a message present that "you" didn't write.

## Answers

1. What is a session id?
   A session id is a unique string assigned to a specific user for the duration of that user's visit, and is typically stored in a cookie or localStorage
2. What is Charles Proxy?
   Charles Proxy is a web proxy that runs on your own computer. Your browser is configured to connect through Charles, and Charles records all of the data that is sent and received.
3. What is a man in the middle attack?
   A man in the middle attack is an attack where the attacker secretly relays and possibly alters the communications between two parties
4. What is a session hijacking attack?
   session hijacking is the theft and use of another individual's session to gain unauthorized access to a system.
