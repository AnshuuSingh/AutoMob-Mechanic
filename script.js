document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  const login = document.getElementById("login");
  const logout = document.getElementById("logout");
  const reports = document.getElementById("reports");
  const username = localStorage.getItem("username");
  const welcome = document.getElementById("welcome");
  const user = document.getElementById("hiUser");


  if (isLoggedIn ) {
    login.style.display = "none";
    logout.style.display = "inline";
    reports.style.display = "inline";
    welcome.style.display="block";
    user.innerHTML = "Hi " + username + "!";
  } else {
    
    window.location.href = "login.html";
    return;
  }

  logout.onclick = function (e) {
    e.preventDefault();
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");

    login.style.display = "inline";
    logout.style.display = "none";
    reports.style.display = "none";
    welcome.style.display = "none";

    window.location.href = "login.html";
  };
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("show");
  }
});

function goback(){
  if(document.referrer){
    location.assign(document.referrer);
  }
  else{
    location.assign("home.html");
  }
}

const logout = document.getElementById("logout");
logout.addEventListener("click", ()=>{
  alert("Logged out successfully");
})
