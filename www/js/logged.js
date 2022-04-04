window.onload = () => {
    let user_id = localStorage.getItem('id');
    let token = localStorage.getItem('token');
    console.log(token);
    console.log(user_id);
    fetch('https://greenvelvet.alwaysdata.net/kwick/api/user/logged/' + token)
    .then((res) => res.json())
    .then((response) => {
        console.log(response);
        if(response.result.status == 'done'){
            let users_logged = response.result.user
            console.log(users_logged);
            console.log(response.result.user.length);
            for(var i = 0; i < response.result.user.length; i++){
            $('#rest').append("<div class='col-1'>"
            +"<img src='icon/user.png' alt='user icon' class='user2' style='margin-right: -20px'>"
            +"<div class='logged'>"
            + "<p style='margin-left: -30px; margin-top : 14px'>"+ users_logged[i] +"</p>"
            +"</div>"
        +"</div>"
        )}
            }
        })
}