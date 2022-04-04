// Ping avec XMLHttpRequest
const requete = new XMLHttpRequest() 
const method = "GET"
const url = "https://greenvelvet.alwaysdata.net/kwick/api/ping"

requete.open(method, url)
requete.onreadystatechange = function() {
    if (requete.readyState == 4) {
        console.log(requete.responseText);
    }
}
requete.send()

// Ping avec fetch
fetch("https://greenvelvet.alwaysdata.net/kwick/api/ping")
.then((res) => res.json())
.then ((response) => {
    console.log(response);
})

// Signup 
fetch("https://greenvelvet.alwaysdata.net/kwick/api/signup/bill/secret")
.then((res) => res.json())
.then((response) => {
    console.log(response);
})

// Login
fetch("https://greenvelvet.alwaysdata.net/kwick/api/login/bill/secret")
.then((res) => res.json())
.then((response) => {
    console.log(response)
})

// Logout
fetch("https://greenvelvet.alwaysdata.net/kwick/logout/46efaa193f9a7d8dace33a94e9397842/2")
.then((res) => res.json())
.then((response) => {
    console.log(response)
})