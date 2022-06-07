import { APIAdmin } from './APIAdmin';


export class WeatherAdmin extends APIAdmin{ // CLASE PARA EJERCICIO 4
    
    constructor(){

        super();

        this.APIConfigs = [{

            url:'https://api.openweathermap.org/data/2.5/weather',
            headers: {

                'Accept': 'application/json'
            },
            key:'c418fd89427bc617220cfa45fbdfa497'
        }]
    }

    public async query():Promise<any>{

       await this.configWeatherURL();
 
       return super.query();       
    }

    public getWeatherIcon(obj){

        const icon:string = obj.weather[0].icon

        return "http://openweathermap.org/img/w/" + icon + ".png"
    }

    private async configWeatherURL(){

        const  config = this.getConfig(), 
               coords =  await this.getLocalCoordinates();

        config.url += `?lat=${coords.latitude}&lon=${coords.longitude}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${config.key}`;
    }

    private getLocalCoordinates():Promise<any>{

        const   newYorkCoords = { 
            
                    latitude:"40.730610",
                    longitude:"-73.935242" 
                };
       
         if(navigator.geolocation) {
            
            return new Promise(function(resolve,reject) {
            
                navigator.geolocation.getCurrentPosition(resolve,reject);

            }).then((obj:GeolocationPosition)=>({

                latitude:obj.coords.latitude, 
                longitude:obj.coords.longitude

            })).catch(error=>newYorkCoords);
        }
 
        return Promise.resolve(newYorkCoords) // PILLAR COORDENADAS DE NUEVA YORK COMO DEFAULT;
    }

}