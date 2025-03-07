
const soundMap = {
    w: "snare.mp3",
    a: "kick-bass.mp3",
    s: "crash.mp3",
    d: "tom-1.mp3",  
    j: "tom-2.mp3",
    k: "tom-3.mp3",
    l: "tom-4.mp3",
  };
  

  document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", () => {
      const soundKey = button.textContent; 
      playSound(soundKey);
    });
  });


 document.addEventListener("keydown", (event) => {
    const soundKey = event.key; 
    if (soundMap[soundKey]) {
        playSound(soundKey);
    }
});
  
  function playSound(key) {
    const audio = new Audio(soundMap[key]);
    audio.play();
  }
  
