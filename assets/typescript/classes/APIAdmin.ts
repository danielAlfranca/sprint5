import { APIConfig } from '../interfaces';

export abstract class APIAdmin{ // clase general para la gestion de las apis

    protected APIConfigs:APIConfig[];

    constructor(){};

    public query():Promise<any>{

        const config = this.getConfig();

        return fetch(config.url, {
            method: "GET",
            headers: config.headers

        }).then(response => response.json())
        .then(response=>this.manageResponse(response))        
    }

    protected getConfig(){

        return [...this.APIConfigs].pop();
    }

    protected manageResponse(response){

        return response
    }    

}