let  SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

let recognition= new SpeechRecognition()

recognition.lang="en-US"
recognition.maxAlternatives=1
 recognition.continuous=true
// recognition.interimResults=true

let Output= document.querySelector('.output')

 let button = document.querySelector('button')
  button.addEventListener('click',()=>{
      recognition.start()
      Output.innerHTML="recording"
  })

  let speak =(text)=>{
      let synth=window.speechSynthesis;
      let uterence =new SpeechSynthesisUtterance();
      uterence.text=text
      synth.speak(uterence)
  }
 
  recognition.onresult=(e)=>{
    
          let last =e.results.length-1;
          let text = e.results[last][0].transcript 
          Output.textContent=text
          let confidence= e.results[0][0].confidence
          console.log('Confidence: ' +confidence);
          if (text==="hi") {
              speak("hello sir")
          }
          else(
              speak(text)
          )
       
    
  }





 
