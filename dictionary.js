const inputEl = document.getElementById("input")



function fetchAPI(word){
 const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  const result = fetch(url).then((res) => res.jon ());
}
inputEl.addEventListener("keyup", (e)=>{
 if(e.target.value && e.key === "Enter"){
    fetchAPI(e.target.value)
 }

})

