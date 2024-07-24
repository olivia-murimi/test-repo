const btnE1 = document.getElementById("btn")
const errormessagee1 = document.getElementById("errormessage")

 async function fetchimage(){
    const inputValue = document.getElementById("input").value;

    if(inputValue > 10 || inputValue < 1){
     errormessagee1.style.display = "block";
     errormessageE1.innerText = "Number should be between 0 and 11"
     return
    }
    try{
      await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=1&{Math.round (Math.random * 1000
        )}&
        client_id=5H2wZWtiq6G4_7CM4qqbS2yHw8CdUDXJvlf3q0pDqnw`

      ).then((res)=>res.json().then((data)=>{
        console.log(data);
      })
     ); 
     errormessageE1.style.dispaly = "none"
    }catch (error){
      errormessageE1.style.display = "block";
      errormessageE1.innerHTML = "An error happened, try again later"
    }
  
}

btnE1.addEventListener("click", fetchimage)

