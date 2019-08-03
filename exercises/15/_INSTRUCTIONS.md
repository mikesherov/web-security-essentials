## Goal

Add a CSP directive that allows scripts from the current origin OR nonce matching.

## Instructions

1. In code, create middleware that uses the `crypto` dependency to generate a cryptographically secure pseudorandom number as a 16 byte string and stores it in the `response.locals` property.
2. In code, modify the `script-src` csp directive to take an arrow function as one of the sources, which uses the return value of the arrow function as the source. Make the arrow function return `nonce-${response.locals.nonce}`.
3. In code, modify the `<script>` element that downloads jQuery to have a `nonce` property that equals `response.locals.nonce`.
4. As the attacker, log into https://localhost.charlesproxy.com
5. As the attacker, paste the xss payload in the message form, and submit.
6. As the user, log into https://localhost.charlesproxy.com
7. As the user, notice the message in the console noting that some JavaScript execution was blocked.
8. As the user, notice that jQuery still loads.
9. As the site owner, observe the CSP violation being logged in the terminal.
10. As the attacker, observe that the user's information is no longer being logged in the terminal.

## Questions

1. What is a nonce?
2. How does using nonces for script-src work?
3. What are the advantages of using a nonce over a more explicity allowlist of specific script-srcs?
4. Is using nonces for script-src 100% foolproof?
