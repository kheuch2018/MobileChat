function send(){
    console.log("reussi");
    let user_id = localStorage.getItem("id");
    let token = localStorage.getItem("token");
    let message = document.getElementById("message").value;
    let username = localStorage.getItem("username")
    console.log(username);
    let message2 = encodeURI(message)

    fetch("https://greenvelvet.alwaysdata.net/kwick/api/say/" + token + "/" + user_id + "/" + message2)
    .then((response) => response.json())
    .then((response) => {
      if (response.result.status == "done") {
        console.log(response);
        let messageE = document.createElement("div");
        messageE.style = "margin-top: 10px";
        messageE.className = "row";
        let messageC = document.createElement("div");
        messageC.className = "col-6 msg_me";
        let messageA = document.createElement("p");
        messageA.style = "margin-bottom: -4px;";
        let messageAStrong = document.createElement("strong");
        messageAStrong.innerHTML = username;
        let content = document.createElement("p");
        content.innerHTML = message;
        messageA.appendChild(messageAStrong);
        messageC.appendChild(messageA);
        messageC.appendChild(content);
        messageE.appendChild(messageC); 
        let a = document.getElementById("tchat_messages").appendChild(messageE);
        console.log("message envoyé !");
        document.getElementById("message").value = ""
      }
      conversation = document.getElementById("chat-content")
      conversation.scrollTop = conversation.scrollHeight
    })
}