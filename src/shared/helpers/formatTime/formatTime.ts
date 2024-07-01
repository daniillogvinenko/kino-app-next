export const secondsToTime = (seconds: number | undefined): string => {
    if (seconds === undefined) return "0:0";

    const minutesRes: number = Math.floor(seconds / 60);

    const secondsRes: number = Math.floor(seconds % 60);

    let res: string = "";

    if (secondsRes.toString().length === 1) {
        res = "0" + secondsRes.toString();
    } else {
        res = secondsRes.toString();
    }

    return minutesRes + ":" + res;
};

export const timeToSeconds = (time: string) => {
    const [minutes, seconds] = time.split(":");

    return +minutes * 60 + +seconds;
};
