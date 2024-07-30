const inputEl = document.getElementById("input")
const infoTextEl = document.getElementById ("info-text")
const meaningContainerEl = document.getElementById("meaning-container")
const titleEl = document.getElementById("title")
const meaningEl = document.getElementById("meaning")

async function fetchAPI(word){

try {
   infoTextEl.style.display ="block";
   meaningContainerEl.style.display = "none";
  infoTextEl.innerText = `Searching the meaning of "${word}"`
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  const result = await fetch(url).then((res) => res.jon ());


  infoTextEl.style.display = "none"
  meaningContainerEl.style.display = "block";
   titleEl.innerText = result[0].word
} catch (error) {
  console.log(error);
 
}
inputEl.addEventListener("keyup", (e)=>{
 if(e.target.value && e.key === "Enter"){
    fetchAPI(e.target.value)
 }

});

}


