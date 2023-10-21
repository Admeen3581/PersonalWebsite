function loadCommonHead()
{
    fetch("../commonElements/commonHead.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('commonHead').innerHTML = data;
        });
}

loadCommonHead();

document.addEventListener('DOMContentLoaded', loadCommonHead);