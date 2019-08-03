## Goal

Set the httpOnly flag on the session id cookie.

## Instructions

1. In code, set the httpOnly flag on the session id cookie. ❗ Note: in this case, httpOnly gets set by default for session cookies in express-session, so we only need to remove the `httpOnly: false` flag.
2. As the attacker, log into https://localhost.charlesproxy.com
3. As the attacker, paste the xss payload in the message form, and submit.
4. As the user, log into https://localhost.charlesproxy.com
5. As the attacker, observe that the user's cookie is a logged as an empty string, and that the session id was not logged in the terminal.

## Questions

1. What does setting the httpOnly flag do?
2. Even we have the session id cookie set to httpOnly, are we 100% gauranteed to never have cookies leak to javascript?
3. What is the principle of least privilege (PoLP)?
