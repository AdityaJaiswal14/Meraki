import axios from 'axios';

export function attemptsNumber(result){
    return result.filter(r => r !== undefined).length
}

export function earnPointNumber(result, answers, points){
    return result.map((element, i) => answers[i] === element).filter(i => i).map(i => points).reduce((prev, curr) => prev + curr, 0); 
}

export function flagResult(totalPoints, earnPoints){
    return (totalPoints * 40 / 100) < earnPoints;
}

export async function getServerData(url, callback){
    const data = await (await axios.get(url))?.data;
    console.log(data);
    return callback ? callback(data) : data;
}

export async function postServerData(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    console.log(data);
    return callback ? callback(data) : data;
}