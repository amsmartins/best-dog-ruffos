function latir() {

const dogvideo = document.querySelector("#dogvideo");
const latir = document.querySelector("#latir");

if (dogvideo.paused) {
    dogvideo.play();
    latir.textContent = "Parar Ruffos";
 } else {
    dogvideo.pause();
    latir.textContent = "Fazer Ruffos se mover";
 }
}