cor = (id) => {
    let container = document.getElementById(id);
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    container.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
}