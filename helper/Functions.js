export const convertFireBaseTimeStampToJS=(time) => {
    if (time !== null && time!== undefined) {
        const fireBasetime = new Date(
            time.seconds *1000 + time.nanoseconds / 1000000,
        );
        return fireBasetime.getDate() + '.' +
        (fireBasetime.getMonth() + 1) + '.' +
        fireBasetime.getFullYear() + ' ' +
        fireBasetime.getHours() + '.' + 
        String (fireBasetime.getMinutes()).padStart(2,'0') + '.' +
        String (fireBasetime.getSeconds()).padStart(2, '0');
    }
}