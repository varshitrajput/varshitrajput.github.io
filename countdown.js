const countdownDate = new Date("2024-03-15T00:00:00").getTime();
const countdownDate2 = new Date("2024-05-20T00:00:00").getTime();
const countdownDate3 = new Date("2024-09-27T00:00:00").getTime();

const countdownElement = document.getElementById("countdown");
const countdownElement2 = document.getElementById("countdown2");
const countdownElement3 = document.getElementById("countdown3");

const update_element = (distance, element) => {
 if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    element.innerHTML = "1000 days!";
  }
    
};

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance1 = countdownDate - now;
  const distance2 = countdownDate2 - now;
  const distance3 = countdownDate3 - now;
  update_element(distance1, countdownElement)
  update_element(distance2, countdownElement2)
  update_element(distance3, countdownElement3)

};

// Update countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);


