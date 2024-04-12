let Speech = new SpeechSynthesisUtterance();
let voices =[];
let voiceselect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged=()=>{ voices=window.speechSynthesis.getVoices();
Speech.voice=voices[0];
voices.forEach((voice,i)=>(voiceselect.options[i] = new Option(voice.name,i)))};
voiceselect.addEventListener("change",()=>
{
    Speech.voice=voices[voiceselect.value];
})
document.querySelector("button").addEventListener("click",()=>
{
    Speech.text= document.querySelector("textarea").value;
    window.speechSynthesis.speak(Speech);
}) 