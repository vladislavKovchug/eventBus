var test=unitjs;

describe("Test ChatRoom", function() {
	
    it("test adding message to ChatRoom", function() {
		
		var eb = new EventBus('EventBus1');
		var chatRoom = new ChatRoom(eb);
		
		chatRoom.postMessage(new ChatMessage('user1', 'message 1'));
		
		var chatMesssages = chatRoom.getChatMessages();
		test.value(chatMesssages[0].sender).isEqualTo('user1');
		test.value(chatMesssages[0].text).isEqualTo('message 1');
		
		chatRoom.postMessage(new ChatMessage('vasya', 'hello'));
		
		chatMesssages = chatRoom.getChatMessages();
		test.value(chatMesssages[0].sender).isEqualTo('user1');
		test.value(chatMesssages[0].text).isEqualTo('message 1');
		test.value(chatMesssages[1].sender).isEqualTo('vasya');
		test.value(chatMesssages[1].text).isEqualTo('hello');

    });

    it("test asynchronous adding message to ChatRoom using EventBus", function(done) {
		var eb = new EventBus('EventBus1');
		var chatRoom = new ChatRoom(eb);
		eb.sendMessage(EventBusMessages.MESSAGE_ADD, new ChatMessage('user1', 'async message 1'));
		
		setTimeout(function(){
			chatMesssages = chatRoom.getChatMessages();
			test.value(chatMesssages[0].sender).isEqualTo('user1');
			test.value(chatMesssages[0].text).isEqualTo('async message 1');
			done();
		}, 1000);
    });
});

describe("Test ChatRoomService", function() {
	var chatRoomService = new ChatRoomService();
	
    it("test for replace wrong words in message", function() {
		var message1 = new ChatMessage('sender', 'some message');
		var result1 = chatRoomService.checkMessage(message1);
		test.value(result1.text).isEqualTo(message1.text);
		
		var message2 = new ChatMessage('sender', 'fuck you');
		var result2 = chatRoomService.checkMessage(message2);
		test.value(result2.text).isEqualTo('???? you');
    });

});