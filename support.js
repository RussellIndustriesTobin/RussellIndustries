// javascript
const ticketBtn = document.getElementById("ticket")

ticketBtn.addEventListener("click", function(){
    const text = quill.getText();
    console.log(text); // Display the plain text content    
    this.classList.toggle('clicked');
    var img = document.createElement('img');
    img.src = './images/check.png'; // Replace with your image path
    img.style.width = '100%';
    img.style.height = 'auto';
    this.innerHTML = '';
    this.appendChild(img);
})
