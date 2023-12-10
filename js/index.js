const targetDate = new Date('December 27, 2023 23:59:59').getTime();

// Update the countdown every second
const updateCountdown = () => {
  const currentDate = new Date().getTime();
  const timeDifference = targetDate - currentDate;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the countdown values
  document.getElementById('days').innerText = formatTime(days);
  document.getElementById('hours').innerText = formatTime(hours);
  document.getElementById('minutes').innerText = formatTime(minutes);
  document.getElementById('seconds').innerText = formatTime(seconds);
};

// Format time values to have leading zeros if needed
const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

// Initial call to update the countdown
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);


document.getElementById("openMaps").addEventListener("click", function () {
  const address = "HYATT Regency Tashkent";

  if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
    // Open Yandex Maps on iOS
    window.location.href = `https://maps.yandex.com/?text=${encodeURIComponent(address)}`;
  } else if (/android/i.test(navigator.userAgent)) {
    // Open Yandex Navigator on Android
    window.location.href = `https://yandex.com/maps/?text=${encodeURIComponent(address)}`;
  }
});