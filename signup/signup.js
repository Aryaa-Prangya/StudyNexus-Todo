const email = document.getElementById("email");
const uname = document.getElementById("name");
const pass = document.getElementById("password");
const button = document.getElementById("signup");

button.addEventListener("click", () => {
  const dataobj = {
    email: email.value,
    name: uname.value,
    password: pass.value,
  };
  fetch("http://localhost:4056/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataobj),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Account created successfully!");
      window.location.href = "../signin/signin.html";
    });
});
