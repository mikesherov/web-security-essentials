## Goal

Add a CSP directive that allows no sources at all except for scripts, images, stylesheets, and fetches from the current origin OR nonce matching.

## Solution

1. https://github.com/mikesherov/web-security-essentials/commit/lesson-17
2. As the attacker, log into https://localhost.charlesproxy.com
3. As the attacker, paste the xss payload in the message form, and submit.
4. As the user, log into https://localhost.charlesproxy.com
5. As the user, notice the message in the console noting that some JavaScript execution was blocked.
6. As the user, notice that jQuery still loads.
7. As the user, notice you're no longer being re-prompted for username and password.
8. As the site owner, observe the CSP violation being logged in the terminal.
9. As the attacker, observe that the user's information is not being logged in the terminal.

## Answers

1. What does setting `default-src` to `"none"` do?
   The default-src specifies what sources to allow by default if a more specific `src` rule (e.g. like `script-src`) is not present. `none` says to allow no sources. Put them together, and this says that unless further specified, don't allow any sources... the most secure (if not most inconvenient) default.
2. Is CSP with minimal sourcing fool proof?
   No. We have not implemented a defense in depth strategy for XSS (server side sanitization is out of scopr for this workshop), and therefore, we're vulnerable to any [browser that doesn't support CSP](https://caniuse.com/#search=csp), which includes ie11 (which supports the `sandbox` CSP directive, but nothing else.)
