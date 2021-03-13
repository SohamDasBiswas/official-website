const typedTextSpan = document.querySelector(".typed-text");
const coursorSpan =document.querySelector(".cursor");
const textarray =["C","C++","CSS","HTML","JavaScript","Kotlin", "Python"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type()
{
    if(charIndex<textarray[textArrayIndex].length)
    {
        if(!coursorSpan.classList.contains("typing")) coursorSpan.classList.add("typing");
        typedTextSpan.textContent += textarray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else
    {
        coursorSpan.classList.remove("typing");
        setTimeout(eraise, typingDelay);
    }
}
function eraise()
{
    if(charIndex>0)
    {
        if(!coursorSpan.classList.contains("typing")) coursorSpan.classList.add("typing");
        typedTextSpan.textContent = textarray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(eraise, typingDelay);
    }
    else
    {
        coursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textarray.length) textArrayIndex=0;
        setTimeout(type, typingDelay+1100);
    }
}
document.addEventListener("DOMContentLoaded", function()
{
    if(textarray.length) setTimeout(type, newTextDelay +250);
})