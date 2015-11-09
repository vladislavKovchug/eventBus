function EventBus(eventBusName){
    this.name = eventBusName;
    this.consumers = [];
}

EventBus.prototype.registerConsumer = function(consumer){
    this.consumers.push(consumer);
}

EventBus.prototype.sendMessage = function(message){
    for(var i=0; i<this.consumers.length; i++){
        setTimeout(function(consumer){
            return function(){
                consumer(message);
            }
        }(this.consumers[i]), 1000);
    }
}