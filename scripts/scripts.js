// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-3.0
function incrementClickCounter() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/ovmoro.info/clicks");
    xhr.responseType = "json";
    xhr.onload = function() {
        console.log(`Clicks: ${xhr.response.value}`);
    }
    xhr.send();
}
function test() {
    incrementClickCounter();
    return ":)";
}
function visits_cb(response) {
    document.getElementById("visits").innerText = response.value;
}
// @license-end

