// S'enregistrer sur kwick
function check_inputs(){
    let username = document.getElementById("username").value;
    console.log(username);
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;

    if(username == " "){
        console.log("Username can't be blank");
    }else{
        console.log("Valid");
    }

    if(password !== password2){
        console.log("Passwords are not the same");
    }else{
        console.log("Valid"); 
    }  
        fetch("https://greenvelvet.alwaysdata.net/kwick/api/signup/" + username + "/" + password)
    .then((res) => res.json())
    .then((response) => {
        console.log(response);
        let status = response.result.status;
        if(status == "done"){
            console.log("Sign up succesfully !");
            window.location.href = 'tchat_page.html';
        }
        if(status == "failure"){
            console.log("Login failed");
        };
    })
}
