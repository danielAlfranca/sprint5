import { DadJokesAdmin } from "./jokeAdmin1";
import { JokesAdmin } from "./jokeAdmin2";
import { WeatherAdmin } from "./weatherAdmin";
import { Joke, WeatherResponse } from "../interfaces";


export default class JokeApp{

    private jokes:Joke[] = [];

    private jokesApi:DadJokesAdmin|JokesAdmin;

    private weatherApi:WeatherAdmin;

    private currentBkg = 1;

    private get containerJokes(){

        return document.getElementById('acuditsContainer')
    }

    constructor(typeOfJokes:string){

        if(typeOfJokes=='bromas variadas') this.jokesApi = new JokesAdmin();

        else if(typeOfJokes=="dad's jokes") this.jokesApi = new DadJokesAdmin();

        this.weatherApi = new WeatherAdmin();

        this.paintWeather(this.weatherApi);

    }

    public getJoke(){

        if (!this.prevHasScore() && this.jokes.length) {

            return alert("Abans de continuar has de puntuar l'anterior acudit");
        }

        const query = this.jokesApi.query();

        query
        .then(joke=>{ 
            
            this.addJoke(joke); 
            this.showJoke(joke); 

        }).catch(e=>this.manageError('joke'))
    }

    private addJoke(joke:Joke){

        this.jokes.push(joke);
    }

    private showJoke(joke:Joke) {

        const clone = document.querySelector('template').content.cloneNode(true) as HTMLElement;

        clone.querySelector('.acudit-text').innerHTML = joke.joke;

        this.removeIconsListeners();

        this.containerJokes.innerHTML = '';        

        this.containerJokes.appendChild(clone);

        this.changeBackground();
    }

    private removeIconsListeners() {

        const icons = this.containerJokes.querySelectorAll('i');

        Object.keys(icons || {}).forEach(keys => icons[keys].removeEventListener('click', this.vote))
    }

    private vote(value) {

        [...this.jokes].pop().score = value;

        this.paintSelection();
    }


    private paintSelection() {

        const icons = this.containerJokes.querySelectorAll('i'),
            target = event.target,
            cls = ['text-white', 'text-warning'];

        let element, isTarget;

        Object.keys(icons).forEach(key => {

            element = icons[key];
            isTarget = target == element;

            element.classList.remove(cls[Number(isTarget)]);
            element.classList.add(cls[Number(!isTarget)]);
        });
    }

    private changeBackground(){

        const container = document.querySelector('.bkg') as HTMLElement;

        container.classList.remove('bkg'+this.currentBkg);

        this.currentBkg =  this.currentBkg == 3 ? 1: (this.currentBkg + 1);

        setTimeout(()=>container.classList.add('bkg'+this.currentBkg),10)

        ;        
    }

    private prevHasScore() {

       return (([...this.jokes].pop()) || {
            score: null
        }).score !== null
    }

    protected manageError(type:string){

        const item = type == 'joke' ? 'la broma':'el temps';

        alert("Hi ha hagut un error i no s'ha pogut carregar " + item); 
        return false
    }


    private paintWeather(weatherApi:WeatherAdmin){

        weatherApi.query().then((response)=>{

            console.log(response);

            const container = document.getElementById('weatherDisplay'),
                  icon = container.querySelector('img'),
                  temp = container.querySelector('#temp');

            icon.setAttribute('src',this.getWeatherIcon(response));
            temp.innerHTML = response.main.temp + 'º';

            container.classList.remove('d-none');
        });        
    }

    private getWeatherIcon(obj){
      
        return this.weatherApi.getWeatherIcon(obj)
    }
    
}