## Goal

Construct a working CSRF attack that submits the messaged "HACKED!" on behalf of the user.

## Instructions

1. As the attacker, log into https://localhost.charlesproxy.com
2. As the attacker, view the page source and copy the form.
3. In the evil.com code, paste the form into index.html, modifying it so that:
   1. it is hidden,
   2. submits to a hidden iframe to avoid top level navigation,
   3. is autosubmitting and requires no user action,
   4. submits the message "HACKED!".
4. As the user, log into https://localhost.charlesproxy.com
5. As the user, get "tricked" into visiting https://evil.com:666/index.html
6. As the user, go back to https://localhost.charlesproxy.com and observe a "HACKED!" message posted on your behalf.

## Questions

1. Why does CSRF work? What default browser behavior makes it possible?
2. Why other type of exploit does CSRF often rely upon?
