## Goal

Construct a working CSRF attack that submits the messaged "HACKED!" on behalf of the user.

## Solution

1. https://github.com/mikesherov/web-security-essentials/commit/lesson-6
2. As the user, log into https://localhost.charlesproxy.com
3. As the user, get "tricked" into visiting https://evil.com:666/index.html
4. As the user, go back to https://localhost.charlesproxy.com and observe a "HACKED!" message posted on your behalf.

## Answers

1. Why does CSRF work? What default browser behavior makes it possible?
   By default, browsers (at least until [Chrome 80](https://chromestatus.com/feature/5088147346030592) ) will automatically send cookies for the requested origin even if the request did not originate from the request origin. That means cookies, including our session id cookie, are sent for any request to https://localhost.charlesproxy.com even if it originates on https://evil.com:666/index.html
2. Why other type of exploit does CSRF often rely upon?
   CSRF often (but not always, if coupled with XSS) involves a form of social engineering where the attacker must trick the user into visiting the attackers site. This is often done through email phishing or other link masking techniques.
