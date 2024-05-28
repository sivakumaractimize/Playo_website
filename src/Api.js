import axios from "axios";

const baseURL = 'https://playo-82b0a-default-rtdb.firebaseio.com';

export const getPlayCards = async () => {
    try {
        const response = await axios.get(`${baseURL}/play.json`);
        const jsonData = response.data;
        // console.log("API Response:", jsonData); 
        if (jsonData) {
           
            const cardsArray = Object.values(jsonData); 
            return cardsArray; 
        } else {
            
            console.log("API Response is null or undefined");
            return [];
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; 
    }
};
export const getBookCards = async () => {
    try {
        const response = await axios.get(`${baseURL}/bookcards.json`);
        const jsonData = response.data;
        // console.log("API Response:", jsonData); 
        if (jsonData) {
           
            const cardsArray = Object.values(jsonData); 
            return cardsArray;
        } else {
         
            console.log("API Response is null or undefined");
            return [];
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}




export const getInfoCardById = async () => {
    try {
        const response = await axios.get(`${baseURL}/infocard.json`);
        const jsonData = response.data;
        // console.log("API Response:", jsonData); 
        if (jsonData) {
            return jsonData; 
        } else {
            
            console.log("API Response is null or undefined");
            return {};
        }
    } catch (error) {
        throw new Error('Failed to fetch card details');
    }
};



