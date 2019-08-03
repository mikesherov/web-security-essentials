## Goal

Add CSRF tokens to forms and fetchs for CSRF prevention.

## Instructions

1. In code, remove the `sameSite: "lax"` option. ❗Note: We're only doing this to prove that our CSRF tokens work as an effective CSRF mitigation. In a production environment, you want both CSRF tokens **and** SameSite cookies.
2. In code, add the `csurf` dependency and configure our server to use it.
3. In code, handle CSRF errors explicitly and respond with status code `403` and the message `"csrf detected"`.
4. In code, add a hidden csrf token form field to our login form and to our message form.
5. In code, add a data attribute to our `Send "Hello" Message` button containing the CSRF token.
6. In code, add a `csrf-token` header to our `Send "Hello" Message` fetch that contains the CSRF token pulled from the data attribute of the corresponding button.
7. As the user, clear all existing cookies for https://localhost.charlesproxy.com
8. As the user, log into https://localhost.charlesproxy.com
9. As the user, submit a message and notice the message is sent.
10. As the user, click `Send "Hello" Message` and notice the message is sent.
11. As the user, get "tricked" into visiting https://evil.com:666/index.html
12. As the user, go back to https://localhost.charlesproxy.com and observe that no "HACKED!" message was posted on your behalf.

## Questions

1. How do CSRF tokens work?
2. Are CSRF tokens foolproof? If not, how can they be exploited?
