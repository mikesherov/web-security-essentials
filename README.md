# Web Security Essentials

## Workshop Prerequisites

To have a productive workshop experience, please do the following:

- [ ] Install [Charles][charles]
- [ ] Add the following to your hosts file, located at `/etc/hosts` (mac/linux)
  ```
  127.0.0.1	localhost evil.com
  ```
- [ ] Ensure you can successfully run the code (~5 minutes)
  - [ ] Run `script/dev-setup`
  - [ ] Go to the first exercise `cd exercises/01`
  - [ ] Run `sudo npm start`. If `sudo npm start` fails, try `nodemon ./site/index.js`
  - [ ] open http://localhost.charlesproxy.com and verify you see a login
  - [ ] Run `sudo npm run start:evil.com`. If that fails, try `node ./evil.com/index.js`
  - [ ] Open https://evil.com:666/index.html and verify you see "thanks for visiting!"
- [ ] Optional, but recommended: Read prerequisite learning material (~20 minutes)
  - [ ] [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html)
  - [ ] [Cross-Site Scripting (XSS)][xss]
  - [ ] [Cross-Site Request Forgery (CSRF)][csrf]
  - [ ] [The Rise of Man In The Middle (MITM) Based Session Hijacking Attacks](https://mike.sherov.com/man-in-the-middle/)

## Workshop Workflow

The workshop works as a series of exercises located in the `exercises` directory. We will work our way progressively through the concepts. At any point in time, if you get stuck, you can find the solution by doing `git show lesson-<lesson number>` (e.g. `git show lesson-2`) or view the solution directly in github at e.g. https://github.com/mikesherov/web-security-essentials/commit/lesson-2. If you're still stuck, don't worry! We'll move onto the next lesson, and you'll have a fresh copy of the working code to work off of.

All of the required npm dependencies you'll need throughout the workshop are already listed in package.json. You should only have to `npm install` once at the very beginning. Our time will be spent working through code and concepts, not waiting for dependencies to finish installing :-).

The workshop uses expressjs as the server software, but all of the techniques you'll learn apply to
any server software. Try not to worry too much about expressjs specific questions. The goal is to learn how these attacks work and how to **generically** mitigate them!

At the beginning of each lesson, you'll `cd exercise/<exercise-number>` and then run `sudo npm start` to start up the server. Saving changes will automatically restart, thanks to `nodemon`. For a few lessons, you'll need to start up an attacker website by running `sudo npm run start:evil.com` in another terminal window to start up the attacker's server.

**The workshop is written and tested on a Mac in Chrome. Please use Chrome and a Mac if possible.**

## Workshop Outline

You will be learning to exploit and mitigate the following security vulnerabilities and attacks:

1. Man-in-the-Middle
   1. Simulate a Session Hijacking attack
   1. Set up https
   1. Redirect http to https
   1. Set the Secure cookie flag
   1. Set up HSTS
1. 5 minute break 😅
1. CSRF
   1. Create an attack
   1. Set the sameSite cookie flag
   1. Add CSRF tokens to forms and fetch
1. 15 minute break 😅
1. XSS
   1. Create a cookie stealing attack via inline JS injection
   1. Set the httpOnly cookie flag
   1. Create a body stealing attack via inline JS injection
   1. Set up a "report only" CSP directive
   1. Block inline script execution and eval with CSP
   1. Create a body stealing attack via script injection
   1. Block script injection with CSP src nonces
   1. Create a credential stealing attack via iframe injection
   1. Explicitly allow only needed sources with CSP

## FAQ

Q: When running `sudo npm start` or `sudo npm run start:evil.com`, I see the following error:
`EADDRINUSE: another service on your machine is using the current port.`
A: You already have a process running on port 80, 443, or 666. Most likely, it's from another node process still running from this workshop. For Windows, please follow [these instructions](http://www.wisdomofjim.com/blog/how-kill-running-nodejs-processes-in-windows). For Mac/linux, you can run: `sudo killall node`, which will end whatever node processes you currently have running.

## License

This material is available for private, non-commercial use under the
[GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html). Please contact me
at mike.sherov@gmail.com for permission to use for any other use.

[xss]: https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)
[csrf]: https://owasp.org/www-community/attacks/csrf
[charles]: https://www.charlesproxy.com/download/
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[curl]: https://curl.haxx.se/download.html
[coc]: https://github.com/mikesherov/web-security-essentials/blob/master/CODE_OF_CONDUCT.md
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
