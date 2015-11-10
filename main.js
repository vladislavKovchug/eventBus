(function(){
    document.addEventListener('DOMContentLoaded', main, false);

})();
function main(){
    var eb = new EventBus('EventBus1')


    var userService = new ChatUserService();
    var userController = new ChatUserController($("#user1"), "vasya", userService, eb);
    var userController = new ChatUserController($("#user2"), "Masha", userService, eb);

    var chatRoom = new ChatRoom();
    var chatRoomController = new ChatRoomController($("#chat"));
    var chatRoomService = new ChatRoomService();

    eb.registerConsumer('MESSAGE_ADD', chatRoomService.onMessage(chatRoom, chatRoomController));
}