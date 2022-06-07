export interface Joke{

    joke: string,
    score: number|null,
    date: string      
}

export interface APIConfig{

    url:string,
    headers:{[key:string]:string},
    key?:string
}

export interface DadJokeResponse{

    id: string;
    joke:string;
    status: number;     
}

export interface NorrisJokeResponse{

    icon_url : string,
    id : string,
    url : string,
    value : string    
}

export interface WeatherResponse{

    lat: number,
    lon: number,
    timezone: string,
    timezone_offset: number
    current: {
        dt: number,
        sunrise: number,
        sunset: number,
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number,
        dew_point: number,
        uvi: number,
        clouds: number,
        visibility: number,
        wind_speed: number,
        wind_deg: number,
        wind_gust: number,
        weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
        ]
    } 
}