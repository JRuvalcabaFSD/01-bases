function printtoConsole(constructor:Function) {
  console.log(constructor);  
}

@printtoConsole
export class Pokemon {
  public publicApi:string = "https://pokeapi.co/api/v2/pokemon/"
  constructor(public name:string) {
    
  }
}