## Goal

Add a "report-only" CSP directive that disallows inline scripts and eval.

## Instructions

1. In code, use the `body-parser` dependency, and configure it to parse request with `application/csp-report` as JSON.
2. In code, add a `/report-violation` route that when POST'ed logs `"CSP Violation: "` along with the request body, and responds with a status code of `200` and the message `ok`.
3. In code, use the `helmet` dependency and configure our server to use it's `contentSecurityPolicy` property.
   1. Allow `script-src` of `self` and `https:`,
   2. with violations reported to `/report-violation`,
   3. in `"report-only"` mode.
4. As the attacker, log into https://localhost.charlesproxy.com
5. As the attacker, paste the xss payload in the message form, and submit.
6. As the user, log into https://localhost.charlesproxy.com
7. As the site owner, observe the CSP violation being logged in the terminal.
8. As the attacker, observe the user's information, including the document.body of their homepage which contains their SSN, still being logged in the terminal.

## Questions

1. What is CSP?
2. Why might you want to run CSP in "report only" mode for a bit before rolling out full enforcement?
