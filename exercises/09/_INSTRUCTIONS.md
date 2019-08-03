## Goal

Construct a working XSS attack that steals the user's cookies.

## Instructions

1. In the evil.com code, add a file to evil.com called `hijack.html` that will serve as your xss payload.
2. In the evil.com code, create a new image, and set its `src` to:
   1. point to https://evil.com:666/hijack ,
   2. with a `payload` query parameter,
   3. that contains the user's cookies.
3. In the evil.com code, add a new endpoint `/hijack` endpoint that logs the `payload` query parameter, and then responds with a status code of `200` and a message of `ok`.
4. As the attacker, log into https://localhost.charlesproxy.com
5. As the attacker, paste the xss payload in the message form, and submit.
6. As the user, log into https://localhost.charlesproxy.com
7. As the attacker, observe the user's information, including their session id, being logged in the terminal.

## Questions

1. What is XSS?
2. This form of XSS is called stored XSS. If the attack is successful, who is vulnerable... all users, a specific user, or just the attacker themselves? Why?
3. Are JS frameworks like React or Vue vulnerable to XSS?
