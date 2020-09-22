function changeMode(size, wight, transform, background, color) {
    return () => {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = wight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}
function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let p = document.createElement("p");
    p.innerText = "Welcome Holberton!";
    document.body.appendChild(p);

    const ButtonSpooky = document.createElement("button");
    ButtonSpooky.innerHTML = "Spooky";
    const ButtonDark = document.createElement("button");
    ButtonDark.innerHTML = "Dark mode";
    const ButtonScream = document.createElement("button");
    ButtonScream.innerHTML = "Scream mode";

    document.body.appendChild(ButtonSpooky);
    document.body.appendChild(ButtonDark);
    document.body.appendChild(ButtonScream);

    ButtonSpooky.onclick = spooky;
    ButtonDark.onclick = darkMode;
    ButtonScream.onclick = screamMode;
}

document.addEventListener("DOMContentLoaded", function (event) {
    main();
});