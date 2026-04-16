const moodTips = {
  happy: "Keep it up! Share your positivity with someone today.",
  okay: "Take a short break and do something you enjoy.",
  stressed: "Try deep breathing or a short walk to relax.",
  sad: "Be kind to yourself. Reach out to someone you trust."
};

const moods = ["happy", "okay", "stressed", "sad"];
moods.forEach(m => console.log(m));

function showTip() {
  const mood = document.getElementById("mood").value;
  const tip = document.getElementById("tip");

  if (mood === "") {
    tip.textContent = "Please select a mood first.";
    return;
  }

  tip.textContent = `Your mood today is: ${moodTips[mood]}`;

  localStorage.setItem("lastMood", mood);
}