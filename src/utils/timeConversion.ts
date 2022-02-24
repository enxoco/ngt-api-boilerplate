// NOTE: time string must look like this 07:05:45PM or this 07:05:45AM and account for 12:00:00AM and convert 12:00:00pm to 12:00:00
export default function timeConversion(s: string) {
    const ampm = s.slice(-2).toUpperCase();
    const hours = Number(s.slice(0, 2));
    let time = s.slice(0, -2);
    if (ampm === 'AM') {
        if (hours === 12) { // 12am edge-case
            return  time.replace(s.slice(0, 2), '00');
        }
        return time;
    } else if (ampm === 'PM') {
        if (hours !== 12) {
            return time.replace(s.slice(0, 2), String(hours + 12));
        } 
        return time; // 12pm edge-case
    }
    return 'Error: AM/PM format is not valid';
}

// less lines using array.split/join and modulus (not my solution)
// function timeConversionSlicker(s) {
//     let AMPM = s.slice(-2);
//     let timeArr = s.slice(0, -2).split(":");
//     if (AMPM === "AM" && timeArr[0] === "12") {
//         // catching edge-case of 12AM
//         timeArr[0] = "00";
//     } else if (AMPM === "PM") {
//         // everything with PM can just be mod'd and added with 12 - the max will be 23
//         timeArr[0] = (timeArr[0] % 12) + 12
//     }  
//     return timeArr.join(":");
// }