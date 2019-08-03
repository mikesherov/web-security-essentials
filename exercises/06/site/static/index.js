helloBtn.addEventListener("click", async e => {
  e.target.disabled = true;
  e.target.innerText = "Done!";
  await fetch("/", {
    credentials: "same-origin",
    method: "POST",
    headers: { "Content-type": "application/x-www-form-urlencoded" },
    body: "message=hello"
  });
  window.location.reload();
});
