## Goal

Add a "report-only" CSP directive that disallows inline scripts and eval.

## Solution

1. https://github.com/mikesherov/web-security-essentials/commit/lesson-12
2. As the attacker, log into https://localhost.charlesproxy.com
3. As the attacker, paste the xss payload in the message form, and submit.
4. As the user, log into https://localhost.charlesproxy.com
5. As the site owner, observe the CSP violation being logged in the terminal.
6. As the attacker, observe the user's information, including the document.body of their homepage which contains their SSN, still being logged in the terminal.

## Answers

1. What is CSP?
   From https://content-security-policy.com/, The CSP HTTP response header helps you reduce XSS risks on modern browsers by declaring which dynamic resources are allowed to load. To expand a bit, CSP restricts which Javascript, iframes, stylesheets, images, etc. are allowed to load and execute on a given page. This applies the PoLP to allow dynamic content on a page.
2. Why might you want to run CSP in "report only" mode for a bit before rolling out full enforcement?
   When developing a new site, you likely want CSP enforcement on by default from the beginning. However, in large legacy systems that have existed for a while without CSP, you may want to begin with "report-only" mode and monitor logs to see if any of the legacy systems rely on unrestricted access. For example, if one of your pages purposefully includes some inline JavaScript, and your CSP policy says to disallow inline JavaScript, you'd want to fix that before turning on full enforcement.
