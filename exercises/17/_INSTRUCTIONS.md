## Goal

Add a CSP directive that allows no sources at all except for scripts, images, stylesheets, and fetches from the current origin OR nonce matching.

## Instructions

1. In code, copy the current script-src array and save it off to a variable called `selfNonceSrc`.
2. In code, set the `default-src` to `"none"`
3. In code, set the `script-src`, `connect-src`, `img-src`, `style-src` to `selfNonceSrc`.
4. As the attacker, log into https://localhost.charlesproxy.com
5. As the attacker, paste the xss payload in the message form, and submit.
6. As the user, log into https://localhost.charlesproxy.com
7. As the user, notice the message in the console noting that some JavaScript execution was blocked.
8. As the user, notice that jQuery still loads.
9. As the user, notice you're no longer being re-prompted for username and password.
10. As the site owner, observe the CSP violation being logged in the terminal.
11. As the attacker, observe that the user's information is not being logged in the terminal.

## Questions

1. What does setting `default-src` to `"none"` do?
2. Is CSP with minimal sourcing fool proof?
