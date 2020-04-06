'use stric'

class CountdownTimer {
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
        let dayCount = days <= 1000 ? days : '1k+';
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
        daysDOM.textContent = dayCount;
        hoursDOM.textContent = hours;
        minsDOM.textContent = mins;
        secsDOM.textContent = secs;
        // hoursDOM.textContent = hours;
    }
    countDown() {
        this.interval = setInterval(this.start.bind(this), 1000);      
    }

}

const counter = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2022'),
});

counter.countDown(); 
