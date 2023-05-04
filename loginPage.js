function checkUrl()
{
    var url = window.location;
    console.log(url)
    var access_token = new URLSearchParams(url.hash).get('access_token');
    console.log(access_token);
}

