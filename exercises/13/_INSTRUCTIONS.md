## Goal

Add a CSP directive that disallows inline scripts and eval.

## Instructions

1. In code, remove the `report-only` flag from the CSP configuration.
2. As the attacker, log into https://localhost.charlesproxy.com
3. As the attacker, paste the xss payload in the message form, and submit.
4. As the user, log into https://localhost.charlesproxy.com
5. As the user, notice the message in the console noting that some JavaScript execution was blocked.
6. As the site owner, observe the CSP violation being logged in the terminal.
7. As the attacker, observe that the user's information is no longer being logged in the terminal.

## Questions

1. Now that we only allow scripts that come from https or our own origin, can we predict the attackers next move?
