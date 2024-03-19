const btnEl = document.getElementById("btn");
const errorMessageEl = document.getElementById("errorMessage");



async function fetchImage (){
    const inputValue = document.getElementById('input').value;
    
    if (inputValue > 10 || inputValue < 1) {
        errorMessageEl.style.display = "block";
        errorMessageEl.innerText = "Number be between 0 - 11";
        return;
    }

    try {
        await fetch(`https://api.unsplash.com/photos?per_page=
        ${inputValue}&page=${Math.round(
          Math.random() * 1000
        )}&
        client_id=Z5JAbmlESylnHwL4jygdjaEhIeTAdXn8L6nIOP2E_AU`
        )  // Add semicolon here
        .then((res) => 
          res.json().then((data) => {
            console.log(data);
          })
        );
        

        errorMessageEl.style.display = "none";
        } catch (error) {
            errorMessageEl.style.display = "block";
            errorMessageEl.innerHTML = "An error happened try again later";
        }
}

btnEl.addEventListener( "click", fetchImage)