var authToken = document.cookie;
if (authToken == null)
{
    alert("Please login first!");
    window.location.replace("https://zr-o.github.io./loginPage");
}
else
{
    authToken = authToken.substring(19);
    loadProfile();
}

function showToken()
{
    document.getElementById("tokenText").innerHTML = authToken;
}

function loadProfile()
{

}

function basicAuthQuery()
{
    var authURL = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + authToken,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query
        })
    }; 
}