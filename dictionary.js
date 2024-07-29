const inputEl = document.getElementById("input")
const infoTextEl = document.getElementById ("info-text")
async function fetchAPI(word){

try {
  
  infoTextE1.innerText = `Searching the meaning of "${word}"`
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  const result = await fetch(url).then((res) => res.jon ());
} catch (error) {
  console.log(error);
 
}
inputEl.addEventListener("keyup", (e)=>{
 if(e.target.value && e.key === "Enter"){
    fetchAPI(e.target.value)
 }

});



