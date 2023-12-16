function loadCommonFooter()
{
    fetch("../commonElements/commonFooter.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('commonFooter').innerHTML = data;
        });
}

loadCommonFooter();