const messages = [];

module.exports = app => {
  app
    .route("/")
    .post((request, response) => {
      if (request.session.user) {
        messages.push(
          `message from ${request.session.user.username}: ${request.body.message}`
        );
      }
      response.redirect("/");
    })
    .get((request, response) => {
      if (!request.session.user) {
        response.redirect("/login");
        return;
      }
      const { username, SSN } = request.session.user;
      response.send(`
        Hi, ${username} (${SSN})!<br>
        Today's latest messages:<br><br>
        ${messages.join("<br><br>")}
        <form action="/" method="post">
          <label for="message">Message:</label><br>
          <textarea name="message"></textarea><br>
          <input type="submit">
        </form>

        <button id="helloBtn">Send "Hello" Message</button>
        <script src="/static/index.js"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
      `);
    });
};
