(function(){
    document.addEventListener('DOMContentLoaded', main, false);

})();

var eb;
var eb2;

function main(){
    eb = new EventBus('EventBus1')
    eb.registerConsumer(function(text){ console.log('Consumer1: ' + text)});
    eb.registerConsumer(function(text){ console.log('Consumer2: ' + text)});
    eb.registerConsumer(function(text){ console.log('Consumer3: ' + text)});

    eb2 = new EventBus('EventBus2')
    eb2.registerConsumer(function(text){ console.log('Consumer4: ' + text)});
    eb2.registerConsumer(function(text){ console.log('Consumer5: ' + text)});
    eb2.registerConsumer(function(text){ console.log('Consumer6: ' + text)});

    document.getElementById('send-message-btn').onclick = sendMessage;
}


function sendMessage(){
    var message = document.getElementById('message').value;
    eb.sendMessage('[message1]' + message);
    eb2.sendMessage('[message2]' + message);
}
