
$(document).ready(function() { 
    var url_string = window.location.href;
    var url = new URL(url_string);
    var name = url.searchParams.get("name");
    var phone = url.searchParams.get("phone");
    var email = url.searchParams.get("email");
    var message = url.searchParams.get("message");
    var urgency = url.searchParams.get("urgency");

    $("#name").html(name);
    $("#phone").html(phone);
    $("#email").html(email);
    $("#message").html(message);
    if (urgency=='0'){
        $("#urgency").html("Baixa");
        $("#urgency").css('background-color', 'green');
    } else if(urgency=='1') { 
        $("#urgency").html("Média");
        $("#urgency").css('background-color', 'yellow');
    } else if(urgency=='2') {
        $("#urgency").html("Alta");
        $("#urgency").css('background-color', 'red');
    }
    
});