console.log('js');

function onReady() {
    $('#requestButton').on('click', callJen);

    callJen();
};


function callJen() {
    $.ajax({
        method: 'GET',
        url: '/jen',
        success: function (response) {
            console.log('back from the server w/', response);
        var $div 



        }
    })

};





$(document).ready(onReady);
