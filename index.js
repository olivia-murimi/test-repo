const btnE1 = document.getElementById("btn")
const errormessage

function fetchimage(){
    const inputValue = document.getElementById("input").value;

    if(inputValue > 10 || inputValue < 1){

    }
  fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=1&client_id=5H2wZWtiq6G4_7CM4qqbS2yHw8CdUDXJvlf3q0pDqnw`).then((res)=>res.json().then((data)=>{
    console.log(data);
  })
 );
}

btnE1.addEventListener("click", fetchimage)

