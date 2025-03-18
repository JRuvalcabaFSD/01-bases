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

function CheckValidPokemonID():Function {
  return function(target:any,key:string,des:PropertyDescriptor){   
    const original = des.value
    des.value=(id:number)=>{
      if (id<1 || id>800) return console.error("El id del pokemon debe estar entre el 1 y 800");
      return original(id)      
    }    
  }
}

function readyOnly(isWritable:boolean=true):Function {
  return function(target:any,key:string){
    const des:PropertyDescriptor = {
      get(){
        console.log(this);
        
        return "Jesus"
      },
      set(this,value){
        Object.defineProperty(this,key,{
          value:value,
          writable:!isWritable,
          enumerable:false
        })
        
      }
    }
    return des
  }
}

@blockPrototype
@printToConsoleConditional()
export class Pokemon {
  @readyOnly(false)
  public publicApi:string = "https://pokeapi.co/api/v2/pokemon/"
  constructor(public name:string) {}

  @CheckValidPokemonID()
  savePokemonToDB(id:number){
    console.log(`Polemon save to DB ${id}`);    
  }
}