function log(msg) {
    var out = document.getElementById('out');
    if (!out) {
        out = document.createElement('ul');
        out.setAttribute('id', 'out');
        document.body.appendChild(out);
    }
    var li = document.createElement('li');
    li.textContent = msg;
    out.appendChild(li);
}
function clearLog() {
    document.getElementById('out').innerHTML = '';
}
