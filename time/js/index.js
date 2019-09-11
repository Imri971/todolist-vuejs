function displayAlert()
{
    console.log("coucou");
    let p = document.getElementById('para');
    let nb = parseInt(p.textContent);
    nb++;
    p.textContent = nb;
}
setInterval(displayAlert,1000);