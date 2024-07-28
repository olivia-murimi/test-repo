const inputEl = document.getElementById("input")



function fetchAPI(word){
 const
}
inputEl.addEventListener("keyup", (e)=>{
 if(e.target.value && e.key === "Enter"){
    fetchAPI(e.target.value)
 }

})
