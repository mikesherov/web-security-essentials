helloBtn.addEventListener("click", async e => {
  e.target.disabled = true;
  e.target.innerText = "Done!";
  await fetch("/", {
    credentials: "same-origin",
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      // 🐨 Add CSRF token header
      // 💰 "csrf-token": e.target.dataset.csrftoken
    },
    body: "message=hello"
  });
  window.location.reload();
});
