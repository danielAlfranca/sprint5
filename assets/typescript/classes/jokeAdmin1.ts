import { Joke } from '../interfaces';
import { APIAdmin } from './APIAdmin';

export class DadJokesAdmin extends APIAdmin{ // CLASE PARA EJERCICIO 1 CON SOLO 1 API

    constructor(){

        super();

        this.APIConfigs = [{

            url:'https://icanhazdadjoke.com/',
            headers: {

                'Accept': 'application/json'
            }
        }]
    }

    protected manageResponse(response:any):Joke{
        
        return {

            joke: this.getJokeFromResponse(response),
            score: null,
            date: (new Date()).toISOString()      
        }
    }

    protected getJokeFromResponse(response){

        return response.joke;
    }
}