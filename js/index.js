document.getElementById('submit').addEventListener('click',getColors)


//This function is called when the “Get color Scheme” button is clicked. It gets the value of the color input and removes the “#” character from the beginning of the string. It also gets the value of the select input. It then uses the fetch function to make a request to thecolorapi.com to get a color scheme based on the input values. When the response is received, it calls the showColors function with the data.
function getColors(){
    const color = document.getElementById('color').value.slice(1)
    const mode = document.getElementById('select').value
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
        .then(response => response.json())
        .then(data => showColors(data))
}


//This function takes in an object containing color data and sets the background color of each div with class “showCase” to one of the colors in the scheme. It also sets the text content of each div to the hex value of that color.
function showColors(colors){
   for(i = 0; i <5; i++){
        const divNumber = document.getElementById(`color${i}`)
        divNumber.style.backgroundColor = colors.colors[i].hex.value
        divNumber.innerHTML = `<p>${colors.colors[i].hex.value}</p>`
        document.getElementById('select').value = ""
   }
}


//This code adds an event listener to each div with class “showCase”. When a div is clicked, it calls the copyToClipboard function with the text content of that div as an argument. The copyToClipboard function uses the Clipboard API to write that text to the clipboard.
function copyToClipboard(color) {
    navigator.clipboard.writeText(color)
      .then(() => console.log(`Copied ${color} to clipboard`))
      .catch(err => console.error(`Error copying ${color} to clipboard: ${err}`));
  }
  
  for (let i = 0; i < 5; i++) {
    const divNumber = document.getElementById(`color${i}`);
    divNumber.addEventListener('click', () => copyToClipboard(divNumber.textContent));
  }


