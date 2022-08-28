function onSendMessage() {
    var element = document.getElementsByTagName('small')
    if (element.length > 0) {
        for (index = element.length - 1; index >= 0; index--) {
            element[index].parentNode.removeChild(element[index]);
        }
    }
    
    
    $.ajax({
        
        url: '/send_mail',
        type: 'POST',
        
        contentType: "application/json",
        dataType: 'json',
        data: JSON.stringify({
            'name': document.getElementById('name-input').value,
            'email': document.getElementById('email-input').value,
            'message': document.getElementById('message-input').value,
            'csrf_token': document.getElementById('csrf_token').value
        }),
        success: function(data, textStatus, jqXHR) {
            for (let key in data) {
                block_to_insert = document.createElement( 'small' );
                block_to_insert.innerHTML = data[key];
                block_to_insert.className = 'text-sm text-red-700 font-base';
                
                container_block = document.getElementById(key);
                container_block.style.color = 'red';
                container_block.style.fontSize = '9px';
                container_block.appendChild( block_to_insert );
                
                window.setTimeout(function(){location.reload()},1500)
            }
            
        },
        error: function(data) {
            block_to_insert = document.createElement( 'small' );
            block_to_insert.innerHTML = 'Error occured while sending message';
            block_to_insert.className = 'text-sm text-red-700 font-base';
            
            container_block = document.getElementById('subbmit');
            container_block.appendChild( block_to_insert );
        }
    });   
}

