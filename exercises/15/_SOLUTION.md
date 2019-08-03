## Goal

Add a CSP directive that allows scripts from the current origin OR nonce matching.

## Solution

1. https://github.com/mikesherov/web-security-essentials/commit/lesson-15
2. As the attacker, log into https://localhost.charlesproxy.com
3. As the attacker, paste the xss payload in the message form, and submit.
4. As the user, log into https://localhost.charlesproxy.com
5. As the user, notice the message in the console noting that some JavaScript execution was blocked.
6. As the user, notice that jQuery still loads.
7. As the site owner, observe the CSP violation being logged in the terminal.
8. As the attacker, observe that the user's information is no longer being logged in the terminal.

## Answers

1. What is a nonce?
   A nonce is an arbitrary number that can be used just once in a cryptographic communication.
2. How does using nonces for script-src work?
   In order for a script tag to execute, it's `nonce` attribute must match the value of the `nonce-` prepended `script-src`.
3. What are the advantages of using a nonce over a more explicity allowlist of specific script-srcs?
   Using a nonce may be less explicit than a specific allowlist, but when adding new scripts, developers will only have to remember to add the nonce attribute to their new script tag rather than having to both add a script tag and add the script's origin to the allowlist.
4. Is using nonces for script-src 100% foolproof?
   Similar to CSRF tokens, nonces are only good as long as they are unguessable, sufficiently random, and sufficiently large enough to be immune to brute force attack. For example, if an attacker was to add a random nonce to their attack payload, and the nonce was only 8 bits long, then they can expect to successfully execute their malicious payload once every 2 ^ 8 attempts, which is easily achievable. However, if the nonce was 128 bits long, they'd succeed once every 2 ^ 128 times (340,282,370,000,000,000,000,000,000,000,000,000,000), which is effectively **never**.
