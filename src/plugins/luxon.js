import { DateTime, Settings } from 'luxon';

Settings.defaultZoneName = 'Europe/Amsterdam';

window.dateTime = DateTime;

window.time = class Time {
    static format (time) {
        const split = _.split(time, ':');

        if (split.length === 2) {
            return _.join(split, ':');
        }

        if (split.length === 3) {
            split.pop();

            return _.join(split, ':');
        }

        return time;
    }
};

export default window.time;
