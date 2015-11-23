(function(){
    document.addEventListener('DOMContentLoaded', main, false);

})();
function main(){
    var eb = new EventBus('EventBus1')
	
	
	var userView1 = new ChatUserView($("#user1"), "Vasya", eb);
	var userView2 = new ChatUserView($("#user2"), "Masha", eb);
	
	var chatRoom = new ChatRoom(eb);
	var chatRoomView = ChatRoomView($("#chat"), eb);
}