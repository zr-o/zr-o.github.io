function checkUrl()
{
    var url = window.location.hash;
    if(url != null)
    {
        document.cookie = "token=" + url.substring(1);
        window.location.replace("https://zr-o.github.io./Home");
    }
    else
    {
        alert("Not Authorized :(");
    }
    console.log(url)
}

