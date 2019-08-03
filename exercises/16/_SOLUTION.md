## Goal

Construct a working XSS attack that prompts for the user's username and password using hidden iframe injection.

## Solution

1. https://github.com/mikesherov/web-security-essentials/commit/lesson-16
2. As the attacker, log into https://localhost.charlesproxy.com
3. As the attacker, paste the xss payload in the message form, and submit.
4. As the user, log into https://localhost.charlesproxy.com
5. As the user, notice the username and password prompt that appears to come from the site instead of an attacker.

## Answers

1. What is frame injection?
   Frame injection is a form of XSS whereby an attack injects an iframe containing malicious code into the page.
2. Can the script inside the iframe access the DOM of the parent?
   No, the [same origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) applies to iframes, and so access to the parent document is prohibited.
3. Is there any other malicious behavior an injected iframe can exhibit? If so, how would we limit it if we didn't want to outright block iframes?
   Even though the same origin policy prevents DOM access, nothing prevents the iframe from `prompt`ing, or from doing a top level navigation to a malicious site (although [browsers have begun cracking down on this](https://www.chromestatus.com/feature/5629582019395584))
4. Why do we use the `prompt` javascript function instead of an html popup?
   In html, popups can not escape the bounding box of an iframe. However, `prompt`s appear as if they come from the top level navigation context, even if they're inside a hidden iframe!
