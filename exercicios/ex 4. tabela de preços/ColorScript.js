cor = (id) => {
    let card = document.getElementById('card' + String(id));
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    card.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    console.log("um")
}

allCor = () => {
    let i = 1;
    while (i < 7) {
        cor(i)
        i++
    }
    console.log("todos")
}