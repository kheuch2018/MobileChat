/*const { timeStamp } = require("console");*/

window.onload = () => {
  let token = localStorage.getItem('token');
  let timeStamp = 0;

  // setInterval(scrap_msg, 1000)
  

  fetch('https://greenvelvet.alwaysdata.net/kwick/api/talk/list/' + token + '/' + timeStamp)
    .then((response) => response.json())
    .then((response) => {
      if (response.result.status == 'done') {
        let all_messages = response.result.talk;
        console.log(response);
        console.log(all_messages.length);

        

        for(let message of all_messages){
          console.log(response.result.talk);
          $('#tchat_messages').append("<div class='row' style='margin-top: 10px;'>"
                    +"<div class='col-6 msg_user2' style='margin-top:px;'>"
                        +"<p style='margin-bottom: -4px;'><strong>" + message.user_name + "</strong></p>"
                        +"<p>"+ message.content +"</p>"
                    +"</div>"
                +"</div>"
          )
        }

        
        conversation = document.getElementById("chat-content")
        conversation.scrollTop = conversation.scrollHeight   
  }})
}