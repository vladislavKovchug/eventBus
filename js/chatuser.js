function ChatUserView(el, chatUser, eventBus){
		
	var messageInput = $('<textarea>');
	var sendBtn = $('<button>', {text: 'Send'});
	sendBtn.click(_sendBtnClick);
	
	el.append($('<div>', {text: chatUser}));
	el.append(messageInput);
	el.append(sendBtn)

	function _sendBtnClick(){
		eventBus.sendMessage(EventBusMessages.MESSAGE_ADD, new ChatMessage(chatUser, messageInput.val()));
		messageInput.val('');
	}
	
}