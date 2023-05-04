let authToken = document.cookie;

function showToken()
{
    document.getElementById("tokenText").innerHTML = authToken;
}