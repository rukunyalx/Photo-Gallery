const btnEl = document.getElementById("btn");
const errorMessageEl = document.getElementById("errorMessage");
const galleryEl = document.getElementById("gallery");



async function fetchImage (){
    const inputValue = document.getElementById('input').value;
    
    if (inputValue > 10 || inputValue < 1) {
        errorMessageEl.style.display = "block";
        errorMessageEl.innerText = "Number be between 0 - 11";
        return;
    }

    imgs = " ";


    try {
      btnEl.style.display = "none";
      const loading = `<img src ="spinner.svg" />`;
      galleryEl.innerHTML - loading;

      const response = await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random() * 1000)}&client_id=8YzVxy9oq5w8iacwsgP_3mB0oWItgbn_N7wTSz916yM`);
      const data = await response.json();
        if(data){
          data.forEach((pic) => {
            imgs +=`
            <img src=${pic.urls.small} alt="image"/>`;
            
            galleryEl.style.display = "block"
            galleryEl.innerHTML = imgs;
            btnEl.style.display = "block";
          

          });
        }
        

        errorMessageEl.style.display = "none";
        } catch (error) {
            errorMessageEl.style.display = "block";
            errorMessageEl.innerHTML = "An error happened try again later";
            btnEl.style.display = "none";
        }
}

btnEl.addEventListener( "click", fetchImage)