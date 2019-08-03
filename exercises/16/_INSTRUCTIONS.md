## Goal

Construct a working XSS attack that prompts for the user's username and password using hidden iframe injection.

## Instructions

1. In the evil.com code, create a `static/steal.html` file that contains a script that calls `prompt` with the message `enter your username and password`.
2. In the evil.com code, add a hidden ifame tag with src `https://evil.com:666/steal.html` to `static/hijack.html`.
3. As the attacker, log into https://localhost.charlesproxy.com
4. As the attacker, paste the xss payload in the message form, and submit.
5. As the user, log into https://localhost.charlesproxy.com
6. As the user, notice the username and password prompt that appears to come from the site instead of an attacker.

## Questions

1. What is iframe injection?
2. Can the script inside the iframe access the DOM of the parent?
3. Is there any other malicious behavior an injected iframe can exhibit? If so, how would we limit it if we didn't want to outright block iframes?
4. Why do we use the `prompt` javascript function instead of an html popup?
