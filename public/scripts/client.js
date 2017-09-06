console.log('js');

function onReady() {
    $('#requestButton').on('click', requestButton)


};


function requestButton() {
    $.ajax({
        method: 'GET',
        url: '/jen',
        success: function (response) {
            console.log('back from the server w/', response);
        }
    })

};


$(document).ready(onReady);
// When the user clicks the button on the DOM a request is sent to a GET route the server.
// Once the request is received on the server, use a console.log to show that the request was received.
//The server will next send back a response 
// to the client.When the client receives the response console.log it out.