const users = {
  substantial: {
    password: "1",
    SSN: "123-45-6789"
  },
  attacker: {
    password: "1",
    SSN: "456-78-9012"
  }
};

module.exports = app => {
  app
    .route("/login")
    .post((request, response) => {
      const { username, password } = request.body;
      const user = users[username];
      if (user && user.password === password) {
        request.session.user = {
          username,
          SSN: user.SSN
        };

        response.redirect("/");
      } else {
        response.redirect("/login");
      }
    })
    // 🐨 Add hidden input to form with CSRF token
    // 💰 <input type="hidden" name="_csrf" value=${request.csrfToken()}>
    .get((request, response) => {
      response.send(`
        <form action="/login" method="post">
        <label for="username">username</label> <input name="username"><br>
        <label for="password">password</label> <input type="password" name="password"><br>
        <input type="submit">
        </form>
      `);
    });
};
