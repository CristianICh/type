let mensaje: string = "Hola Mundo";

mensaje = "chanchito feliz"
mensaje = "chao mundo"
console.log(mensaje);

console.log(typeof []);

/*
*tipos de JS
*number
*string
*boolean
*null
*undefined
*object
*function
*
*tipos de TS
*any
*unknown
*never
*arrays
*tuplas
*Enums
*
-tipos inferidos
*/

let extincionDinosuarios: number = 76_000_000
let dinosarioFavorito: string = "T-Rex"
let extintos: boolean = true

function chanchitoFeliz(config: any) {
    return config
}


let animales: string[] = ['chacnchito', 'feliz', 'felipe',]
let nums: number[] = [1, 2, 3]
let checks: boolean[] = []
let nums2: Array<number> = []

//nums.map(x=>x.) //el autocompleado sugiere metodos de tipo de datos

let tupla: [number, string[]] = [1, ['chanchito feliz', 'chanchito felipe']]


const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

//PascalCase
enum Talla { Chica, Mediana, Grande, ExtraGrande }
enum Talla2 { Chica = 2, Mediana, Grande, ExtraGrande }
enum Talla3 { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }

const variable1 = Talla3.Grande
console.log(variable1);


const enum LoadingState { Idle, Loading, Success, Error }

const estado = LoadingState.Success

type Direccion = {
    numero: number,
    calle: string,
    pais: string
}
type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla3,
    direccion: Direccion
}

const objeto: Persona = {
    id: 1,
    nombre: "juan",
    talla: Talla3.Chica,
    direccion: {
        numero: 1,
        calle: 'siempre viva',
        pais: 'Chanchitolandia'

    }
}

const arr:Persona[]=[]

