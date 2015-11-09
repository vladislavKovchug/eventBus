function ChatUserService(){
    return {
        onSend: function(eventBus, chatUser, messageInput){
            return function(){
                eventBus.sendMessage('MESSAGE_ADD', new ChatMessage(chatUser, messageInput.val()));
                messageInput.val('');
            }
        }
    };
}

function ChatUserController(el, chatUser, userService, eventBus){
    this.messageInput = $('<textarea>');
    this.sendBtn = $('<button>', {text: 'Send'});

    el.append($('<div>', {text: chatUser}));
    el.append(this.messageInput);
    el.append(this.sendBtn)

    this.sendBtn.click(userService.onSend(eventBus, chatUser, this.messageInput));
}