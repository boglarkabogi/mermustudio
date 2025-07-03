document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".number");

  counters.forEach(counter => {
    const target = parseInt(counter.textContent);
    let count = 0;
    const speed = target < 50 ? 20 : target < 100 ? 10 : 1;

    counter.textContent = 0;

    const interval = setInterval(() => {
      count++;
      counter.textContent = count;

      if (count >= target) {
        counter.textContent = target;
        clearInterval(interval);
      }
    }, speed);
  });
});
