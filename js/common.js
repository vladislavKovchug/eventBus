function ChatMessage(sender, text)
{
    this.sender = sender;
    this.text = text;
}

var EventBusMessages = {
	"UPDATE_UI" : 'UPDATE_UI',
	"MESSAGE_ADD" : 'MESSAGE_ADD'
}