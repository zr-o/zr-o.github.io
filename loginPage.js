function checkUrl()
{
    var url = window.location.hash;
    console.log(url)
    if(url.indexOf("access_token") > -1)
    {
        document.cookie = "token=" + url.substring(1);
        window.location.replace("https://zr-o.github.io./Home");
    }
    else
    {
        alert("Not Authorized :(");
    }
}

