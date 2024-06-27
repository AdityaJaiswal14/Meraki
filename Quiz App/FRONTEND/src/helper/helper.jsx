import axios from 'axios';


// function getToken() {
//     console.log(document.cookie.split(';'))
//     const cookie = document.cookie.split('; ').find(row => row.startsWith('token='));
//     console.log(cookie)
//     if (!cookie) return null;
//     return cookie.split('=')[1];
//   }

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

// // Fetch data from the server
// export async function getServerData(url, callback) {
//     try {
//       const token = getToken();
//       if (!token) {
//         throw new Error('No auth token found');
//       }
//       const response = await axios.get(url, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         },
//         withCredentials: true // Ensures cookies are sent with the request
//       });
//       const data = response?.data;
//       console.log(data);
//       return callback ? callback(data) : data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error; // Rethrow the error for further handling if necessary
//     }
//   }

export async function postServerData(url, result, callback){
    const data = await (await axios.post(url, result,{
        withCredentials: true
    }))?.data;
    console.log(data);
    return callback ? callback(data) : data;
}

// //Post data to the server
// export async function postServerData(url, result, callback) {
//     try {
//       const token = getToken();
//       if (!token) {
//         throw new Error('No auth token found');
//       }
//       const response = await axios.post(url, result, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         },
//         withCredentials: true // Ensures cookies are sent with the request
//       });
//       const data = response?.data;
//       console.log(data);
//       return callback ? callback(data) : data;
//     } catch (error) {
//       console.error('Error posting data:', error);
//       throw error; // Rethrow the error for further handling if necessary
//     }
//   }