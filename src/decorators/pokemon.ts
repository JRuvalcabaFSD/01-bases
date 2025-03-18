function printtoConsole(constructor:Function) {
  console.log(constructor);  
}

const printToConsoleConditional = (print:boolean=false):Function=>{
  if (print) return printtoConsole
  return ()=>{}
  
}

const blockPrototype = function (constructor:Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

@blockPrototype
@printToConsoleConditional(true)
export class Pokemon {
  public publicApi:string = "https://pokeapi.co/api/v2/pokemon/"
  constructor(public name:string) {
    
  }
}