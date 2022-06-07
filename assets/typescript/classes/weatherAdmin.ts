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

    public async query():Promise<any>{ // espera a autorizacion para utilizar navigator.geolocation y hace la query

       await this.configWeatherURL();
 
       return super.query();       
    }

    public getWeatherIcon(obj){ // formatea url para icono del tiempo

        const icon:string = obj.weather[0].icon

        return "http://openweathermap.org/img/w/" + icon + ".png"
    }

    private async configWeatherURL(){ // formatea url para peticion de la api

        const  config = this.getConfig(), 
               coords =  await this.getLocalCoordinates();

        config.url += `?lat=${coords.latitude}&lon=${coords.longitude}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${config.key}`;
    }

    private getLocalCoordinates():Promise<any>{ // extrae coordenadas de localizacion del navegador si se puede

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