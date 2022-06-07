import { DadJokesAdmin } from './jokeAdmin1';

export class JokesAdmin extends DadJokesAdmin { // CLASE PARA EJERCICIO 5

    constructor(){

        super();

        this.APIConfigs = [...this.APIConfigs,{

            url:'https://api.chucknorris.io/jokes/random',
            headers: {'Accept': 'application/json' }
            }    
        ];

        console.log(this.APIConfigs);
    }

    protected getConfig(){

        return this.APIConfigs[Math.round(Math.random())];
    }

    protected getJokeFromResponse(response){

       return response.value !== undefined ? response.value:response.joke;
    }

}