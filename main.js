const EMPTY_HEART = '♡';
const FULL_HEART = '♥';
const modal = document.querySelector("#modal");
const hearts = document.querySelectorAll("span.like-glyph");


document.addEventListener("DOMContentLoaded", () => {
  modal.classList.add('hidden')
  hearts.forEach(hearts => hearts.addEventListener("click", clickHearts))
  console.log("LIKE")
 
})
function clickHearts(hearts) {
  mimicServerCall()
  .then(() => {
if (hearts.target.innerText === EMPTY_HEART){
  hearts.target.innerText === FULL_HEART
  hearts.target.classList.add('activated-heart')
}
else {
  hearts.target.classList.remove('activated-heart')
  hearts.target.innerText === EMPTY_HEART
}
// else if (hearts.target.innerText === FULL_HEART){
//   hearts.target.innerText === EMPTY_HEART
//   hearts.target.classList.remove('activated-heart')
// }
  })
  .catch(() => {
    modal.className ="show"
    // modal.classList.remove('hidden')
    setTimeout(() => {
    modal.className = "hidden"}, 3000)
  })

}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
