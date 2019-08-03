## Goal

Add CSRF tokens to forms and fetchs for CSRF prevention.

## Solution

1. In code, remove the `sameSite: "lax"` option. ❗Note: We're only doing this to prove that our CSRF tokens work as an effective CSRF mitigation. In a production environment, you want both CSRF tokens **and** SameSite cookies.
2. https://github.com/mikesherov/web-security-essentials/commit/lesson-8
3. As the user, clear all existing cookies for https://localhost.charlesproxy.com
4. As the user, log into https://localhost.charlesproxy.com
5. As the user, submit a message and notice the message is sent.
6. As the user, click `Send "Hello" Message` and notice the message is sent.
7. As the user, get "tricked" into visiting https://evil.com:666/index.html
8. As the user, go back to https://localhost.charlesproxy.com and observe that no "HACKED!" message was posted on your behalf.

## Answers

1. How do CSRF tokens work?
   CSRF tokens work by generating a unique string on the server, and is associated with the user's session. That string is then inserted into HTML forms as hidden inputs. When forms are submited or fetches make a request, the random string is sent along with the request. The server then compares the submitted token with the token associated with the session, and if equal, allows the request to complete. Because an attacker can not guess the random string, and because the strings are ephemeral (meaning they don't last forever), the attacker can't put them in their own forms, thus defeating CSRF.
2. Are CSRF tokens foolproof? If not, how can they be exploited?
   CSRF tokens are the best way to prevent CSRF, since they work even in older browsers that don't support SameSite cookies. However, there are several ways to implement them in a less than perfect fashion such that a determined, persistent attacker can exploit them if done incorrectly. First, make sure CSRF tokens are only transmitted via non-CORS requests, and thus can't be stolen cross origin. Second, make sure CSRF tokens are unguessable. That is, use a cryptographically secure psuedorandom number generator (CSPRNG). Otherwise, a determined attacker can hardcode one of the guessable values, defeating CSRF protection for a portion of their attempts.
