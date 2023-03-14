class Timer {
  constructor(selector) {
    this.timerEl = document.querySelector(selector);
    this.timerEl.textContent = this.getDate();
    this.timerId;
  }

  destroy() {
    clearInterval(this.timerId);
  }

  getDate() {
    let date = new Date();
    let formatter = new Intl.DateTimeFormat('ru', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });

    return formatter.format(date);
  }

  render() {
    this.timerId = setInterval(() => {
      this.timerEl.textContent = this.getDate();
    }, 1000);
  }
}

const timer = new Timer('.timer');
timer.render();
