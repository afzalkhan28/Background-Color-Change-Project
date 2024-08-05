function bgchange(color){
    let colorarray = ["pink", "green", "blue","red","yellow"];
    document.body.style.background = colorarray[color];
}

var colorarray = ["pink", "green", "blue","red","yellow"];
colorbox = document.getElementById("colorbox");
colorarray.forEach(function (color, index) {
    let span = document.createElement("span");
    span.style.backgroundColor = color;
    span.addEventListener("click", function () {
        bgchange(index);
    });
    colorbox.appendChild(span);
});