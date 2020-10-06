function setCookies() {
    const firstname = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;
    if (firstname) document.cookie =`firstname=${firstname}`;
    if (email) document.cookie = `email=${email}`;
  }
  function showCookies() {
    const p = document.createElement("p")
    p.innerHTML = `Cookies: ${document.cookie}`;
    const body = document.querySelector("body");
    body.append(p);
  }
