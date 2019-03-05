// Get elements from page
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

console.log(video);


// Build out functions

// togglePlay function allows the video to be played and paused accordingly
function togglePlay() {
    const method = video.paused ? "play" : "pause";
    video[method]();
}

// updateButton function changes the icon when played/paused for better UX
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}

// skip function to be used when used decides to forward or rewind video
function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

// handleRangeUpdate function defines how much of the video will be skipped when skip function is executed
function handleRangeUpdate() {
    video[this.name] = this.value
}

// handleProgress function updates flex-basis of video.progress__filled to match the progress bar with the video being played
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.getElementsByClassName.flexBasis = `${percent}%`
}

// Hook up the event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach(button => button.addEventListener("click", skip));

ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));