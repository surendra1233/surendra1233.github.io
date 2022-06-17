function generateRandomColor(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

function colorChange(){
    circles = document.querySelectorAll('.circle');
    let color = generateRandomColor();
    circles.forEach(circle => circle.style.backgroundColor = color);
}