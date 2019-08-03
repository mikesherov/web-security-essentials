# Web Security Essentials

This is the workshop material for
[Web Security Essentials](https://github.com/mikesherov/web-security-essentials)!

## Workshop Prerequisites

To have a productive workshop experience, please do the following:

- [ ] Review the [Code of Conduct][coc] (~5 minutes)
- [ ] Install and setup [Zoom](https://zoom.us) on the computer you will be using (~5 minutes)
- [ ] Install [Charles][charles]
- [ ] Verify your computer has the following installed and available in your `PATH` (~5 minutes)
  - [ ] [git][git] (verify by running `git --version`)
  - [ ] [NodeJS][node] v8.9.3 or greater (verify by running `node --version`)
  - [ ] [npm][npm] (verify by running `npm --version`)
  - [ ] If you have trouble with this, learn more about setting your `PATH` here for [windows][win-path] or [mac][mac-path].
- [ ] Ensure you have `sudo` (on mac/linux) or run your CLI as an Administrator (Windows).
- [ ] Add the following to your hosts file, located at `/etc/hosts` (mac/linux) or `c:\Windows\System32\Drivers\etc\hosts` (windows), which resolves "evil.com" to your own computer:
   ```
   127.0.0.1	localhost evil.com
   ```
- [ ] Ensure you can successfully run the code (~5 minutes)
  - [ ] run `npm install`
  - [ ] run `sudo npm run start:evil.com`
  - [ ] open (https://evil.com:666/index.html) and verify you see "thanks for visiting!"
  - [ ] run `sudo npm run start:site`
  - [ ] open (https://localhost.charlesproxy.com) and verify you see a login
- [ ] Clear the HSTS settings by visiting (https://localhost.charlesproxy.com/hsts-reset) (~1 minute)
- [ ] Optional, but recommended: Read prerequisite learning material (~20 minutes)
  - [ ] [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html)
  - [ ] [Cross-Site Scripting (XSS)][xss]
  - [ ] [Cross-Site Request Forgery (CSRF)][csrf]
  - [ ] [The Rise of Man In The Middle (MITM) Based Session Hijacking Attacks](https://mike.sherov.com/man-in-the-middle/)

## Workshop Outline

The workshop uses expressjs as the server software, but all of the techniques you'll learn apply to
any server software. Try not to worry too much about expressjs specific questions. The goal is to learn how these attacks work and how to **generically** mitigate them!

The workshop works as a series of commits on this repository. We'll be starting at the "basic shell hacker website" commit and will work our way progressively through the concepts. At any point in time, you can reset your code by checking out any of the commits, run `npm install`, and you'll be right back to a good spot to continue from.

You will be learning to exploit and mitigate the following security vulnerabilities and attacks:

1. Man-in-the-Middle
    1. Simulate packet sniffing attack
    1. Set up https
    1. Redirect http to https
    1. Set the Secure cookie flag
    1. Set up HSTS
1. CSRF
    1. Create an attack
    1. Set the sameSite cookie flag
    1. Add CSRF tokens to forms and fetch
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

## License

This material is available for private, non-commercial use under the
[GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html). Please contact me
at mike.sherov@gmail.com for permission to use for any other use.

[xss]: https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)
[csrf]: https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
[charles]: https://www.charlesproxy.com/download/
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[coc]:
  https://github.com/mikesherov/web-security-essentials/blob/master/CODE_OF_CONDUCT.md
[win-path]:
  https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592