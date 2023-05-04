function checkUrl()
{
    var url = window.location;
    var access_token = new URLSearchParams(url.hash).get('access_token');
    console.log(access_token);
}

