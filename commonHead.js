function loadCommonHead()
{
    fetch("commonHead.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('commonHead').innerHTML = data;
        });
}

loadCommonHead();