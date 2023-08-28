export var profesorBase = {
    nombre: "Manuel",
    apellidos: "M.P.",
    correo: "manuelmacpe@gmail.com",
    foto:"./assets/media/fotommp.jpg"
    
}
export class alumnosBD{
    static correoA(correoA: any) {
      throw new Error('Method not implemented.');
    }

    constructor(
        public nombreA: string,
        public apellidoA: string,
        public edadA: number,
        public correoA: string,
        public telefonoA: string,
        public fotoA: string,
        public estadoA: boolean,
        public notaA: number
        
    ){}
}
