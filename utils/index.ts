import { manufacturers } from "@/constants";
import { CarProps, filterProps } from "@/types";

export async function fetchCars(filters: filterProps) {

    const {manufacturer,year,model,limit,fuel} = filters

    const headers = {
    
            'X-RapidAPI-Key': 'cb31831241msh0949666ca80c45fp194f31jsnca23f17893f6',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        
    }

    const response = await fetch (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {headers:headers})

    const result = await response.json();

    console.log("Hello"+result);

    return result;
    
}

/*Explanation for the above function: 
This function, fetchCars, is an asynchronous function that makes an HTTP request to an external API to fetch information about cars. Here's a step-by-step explanation of how this function works:
a) This function is marked as async, which means it can perform asynchronous operations such as making HTTP requests.
b)In this section, an object called headers is defined. This object contains two HTTP headers:

'X-RapidAPI-Key': This header includes an API key that is used for authentication when making requests to the RapidAPI-hosted service.
'X-RapidAPI-Host': This header specifies the host or domain of the API that you are making a request to.

c)This line of code makes an HTTP GET request to the URL 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla'. It also includes the headers object you defined earlier as part of the request. This is how you pass the API key and host information to the API service. The await keyword is used to wait for the response to be received before proceeding.

d)After making the request, the function waits for the response to be received, and then it uses the .json() method to parse the response body as JSON. This converts the JSON data received from the API into a JavaScript object.

e)Finally, the parsed JSON data is returned from the function as a JavaScript object. This allows the calling code to work with the data retrieved from the API.*/

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 8000; // Base rental price per day in rupees
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0); //whole number rounding
  };
  

export const generateCarImageUrl = (car: CarProps, angle? : string) =>{
        const url = new URL('https://cdn.imagin.studio/getimage')

        const { make, year, model} = car;

        url.searchParams.append('customer','hrjavascript-mastery')

        url.searchParams.append('make',make)
        url.searchParams.append('modelFamily', model.split(' ')[0])
        url.searchParams.append('zoomType','fullscreen')
        url.searchParams.append('modelYear',`${year}`)
        url.searchParams.append('angle',`${angle}`)


        return `${url}`
}

//key... hrjavascript-mastery