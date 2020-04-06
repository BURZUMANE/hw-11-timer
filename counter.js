export default class CountdownTimer {
    constructor({
        selector,
        targetDate
    }) {
        this.selector = selector
        this.targetDate = targetDate;
    }

    start() {
        const currentTime = new Date();
        const time = this.targetDate - currentTime;
        /*
         * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
         * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
         */
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        /*
         * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
         * остатка % и делим его на количество миллисекунд в одном часе
         * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
         */
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        /*
         * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
         * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
         */
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

        /*
         * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
         * миллисекунд в одной секунде (1000)
         */
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        let timer = document.querySelector(this.selector);
        let daysDOM = timer.querySelector('span[data-value="days"]');
        const hoursDOM = timer.querySelector('span[data-value="hours"]')
        const minsDOM = timer.querySelector('span[data-value="mins"]')
        const secsDOM = timer.querySelector('span[data-value="secs"]')
        daysDOM.textContent = days;
        hoursDOM.textContent = hours;
        minsDOM.textContent = mins;
        secsDOM.textContent = secs;

        console.log(secs, timer);

    }
    countDown() {
        this.interval = setInterval(this.start.bind(this), 1000);
        
    }

}
