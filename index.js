const btnE1 = document.getElementById("btn")
const errormessageE1 = document.getElementById("errormessage")
 const galleryE1 = document.getElementById("gallery")
 async function fetchimage(){
    const inputValue = document.getElementById("input").value;

    if(inputValue > 10 || inputValue < 1)
      {
     errormessageE1.style.display = "block";
     errormessageE1.innerText = "Number should be between 0 and 11"
     return;
    }
     
    imgs = "";

    try{
      await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=1&{Math.round (Math.random() * 1000

        )}&
        client_id=5H2wZWtiq6G4_7CM4qqbS2yHw8CdUDXJvlf3q0pDqnw`

      ).then((res)=> 
        res.json().then((data)=>{
        if(data){
          data.forEach((pic) => {
           imgs += `
           <img src=${pic.urls.small} alt="image"/>
           `;
           galleryE1.style.display = "block";
           galleryE1.innerHTML = imgs ;
          });
          
        }
      })
     ); 
     errormessageE1.style.dispaly = "none"
    }catch (error){
      errormessageE1.style.display = "block";
      errormessageE1.innerHTML = "An error happened, try again later";
    }
  
}

btnE1.addEventListener("click", fetchimage)


