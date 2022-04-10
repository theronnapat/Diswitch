
export default function Ping(client) {
    client.on('message', (message) => {
        if (message.content === 'bot') {
            message.reply('hello');
        }          
    })
}