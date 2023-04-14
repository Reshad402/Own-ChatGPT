import bot from './assets/bot.svg'
import user from './assets/user.svg'

const form = document.querySelector('form')
const chatContainer = document.querySelector('#chat_container')


//Here we create the (...) term so easily

let loadInterval;

function loader(element){
  element.textContent = '';

  loadInterval = setInterval(() =>{
    element.textContent += '.';

    if(element.textContent === '....'){
      element.textContent = '';
    }
      
},[300])

}


// Here show the text as human write....
function typeText(element,text){
  let index = 0;
  let interval = setInterval(() =>{
    if(index<text.length){
      element.innerHTML = text.chatAt(index)
    index++;
    }
    else{
      clearInterval(interval)
    }
  },[20]

  )}

  // Make unique id For each answer

  function generateUniqueId(){ 
    const timestamp  = date.now();
    const randomNumber = Math.random()*100000;
    // const hexaDecimalString = randomNumber.toString(16)
    return`id-${timestamp}-${randomNumber}`
  }

  //MOw this is chad sequence