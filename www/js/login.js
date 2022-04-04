// Se connecter sur kwick
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    url="https://greenvelvet.alwaysdata.net/kwick/api/login/" + username + "/" + password

    fetch(url)
.then((res) => res.json())
.then((response) => {

    console.log(response)
    // garder le token dans le local storage
    window.localStorage.setItem('username', username)
    window.localStorage.setItem('token',response.result.token);
    window.localStorage.setItem('id',response.result.id);
    let status = response.result.status;
    if(status == "done"){
        console.log("Login succesfully");
        window.location.href = 'tchats_page.html';
    }else{
        console.log(response)
    }
}).catch(err => {
    if(err.response)
    alert("Identifiqnts incorrects !")
})
}
