function ChatRoom(eventBus){
    var chat = [];
	var chatRoomService = new ChatRoomService();
	
	eventBus.registerConsumer(EventBusMessages.MESSAGE_ADD, _postMessage);
	
	function _postMessage(message){
		message = chatRoomService.checkMessage(message);
		chat.push(message);
		eventBus.sendMessage(EventBusMessages.UPDATE_UI, chat);
	}
	
	function _getChatMessages(){
		return chat;
	}
	
	return {
		"postMessage" : _postMessage,
		"getChatMessages" : _getChatMessages
	}
}

function ChatRoomService(){
    return {
        "checkMessage": function(message){
			message.text = message.text.replace('fuck', '????');
			return message;
        }
    }
}

function ChatRoomView(el, eventBus){
	
	eventBus.registerConsumer(EventBusMessages.UPDATE_UI, _render);
	
	function _render(messages){
		el.empty();
		for(var i=0; i<messages.length; i++){
			var messageContainer = $('<div>');
			messageContainer.append('<b>' + messages[i].sender + ':</b> ');
			var messageText = messages[i].text.replace('\n', '<br/>');
			messageContainer.append(messageText);
			el.append(messageContainer);
		}
	}
	
	return {
		"render": _render
	}
}