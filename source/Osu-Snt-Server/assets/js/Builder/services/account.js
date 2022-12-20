function getIDbyTOKEN(arg)
{
    fetch(`http://localhost:1024/check/token/${arg}`).then(function(response){ return response.json(); }).then(function(data)
    {
        return data.id;
    });
}

function loginButton()
{
    username = document.getElementById("login_username").value;
    password = document.getElementById("login_password").value;

    redirect(`http://localhost:1024/check/password/${username};${password}`);
}

function registerButton()
{
    username = document.getElementById("register_username").value;
    password = document.getElementById("register_password").value;

    fetch(`http://localhost:1024/check/username/${username}`).then(function(response){ return response.json(); }).then(function(data)
    {
        if(data.taken)
        { 
            redirect(`http://localhost:1024/check/username/${username}`);
            return;
        }
    });

    if(password == '')
        return;

    fetch(`http://localhost:1024/insert/register/${username};${password}`).then(function(response){ return response.json(); }).then(function(data)
    {
        data.token;
    });
    
}