/**
 * Created by divesh212 on 20/8/16.
 */
console.log("main3 included");
<<<<<<< HEAD
const socket = io();

$(function () {

    const username = localStorage.getItem('user');

    $('#submitchat').click(function () {
        console.log("Clicked on sent");
        socket.emit('chat',
            {
                user: username,
                msg: $('#chatmessage').val()
            })
    });

    socket.on('chat', function (data) {
        console.log("chat sent");
        $('#chatbox').append(data.user
            + ': ' + data.msg + '<br>')
    })
});
=======
>>>>>>> ddb8db34d4211b69114494cc94ff7536e475c2b9
