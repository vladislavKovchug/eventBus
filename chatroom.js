function ChatRoom(){
    this.chat = [];
}

function ChatRoomController(el){
    var element = el;

    return{
        updateUI: function(chatRoom){
            el.empty();
            for(var i=0; i<chatRoom.chat.length; i++){
                var messageContainer = $('<div>');
                messageContainer.append('<b>' + chatRoom.chat[i].sender + ':</b> ');
                var messageText = chatRoom.chat[i].text.replace('\n', '<br/>');
                messageContainer.append(messageText);
                el.append(messageContainer);
            }
        }
    }
}

function ChatRoomService(){
    return {
        onMessage: function(chatRoom, chatRoomController){
            return function(message){
                chatRoom.chat.push(message);
                chatRoomController.updateUI(chatRoom);
            }
        }
    }
}