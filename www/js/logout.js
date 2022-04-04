// Se déconnecter de kwick
function logout() {
    let user_id = localStorage.getItem("id");
    let token = localStorage.getItem("token");
    console.log(token);
    fetch("https://greenvelvet.alwaysdata.net/kwick/api/logout/" + token + "/" + user_id)
.then((res) => res.json())
.then((response) => {
    console.log("Logout succesfully");
    window.location.href = 'index.html';
})
}