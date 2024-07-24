const btnEl = document.getElementById("btn")
const errormessageEl = document.getElementById("errormessage")
 const galleryEl = document.getElementById("gallery")
 async function fetchimage(){
    const inputValue = document.getElementById("input").value;

    if(inputValue > 10 || inputValue < 1)
      {
     errormessageEl.style.display = "block";
     errormessageEl.innerText = "Number should be between 0 and 11"
     return;
    }
     
    imgs = "";

    try{
      await fetch(`https://api.unsplash.com/photos/?per_page=${inputValue}&page=1&{Math.round (Math.random() * 1000

        )}&
        client_id=5H2wZWtiq6G4_7CM4qqbS2yHw8CdUDXJvlf3q0pDqnw`

      ).then((res)=> 
        res.json().then((data)=>{
        if(data){
          data.forEach((pic) => {
           imgs += `
           <img src=${pic.urls.small} alt="image"/>
           `;
           galleryEl.style.display = "block";
           galleryEl.innerHTML = imgs ;
          });
          
        }
      })
     ); 
     errormessageEl.style.dispaly = "none"
    }catch (error){
      errormessageEl.style.display = "block";
      errormessageEl.innerHTML = "An error happened, try again later";
    }
  
}

btnEl.addEventListener("click", fetchimage)



