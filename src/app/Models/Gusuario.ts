export class Gusuario{
    public _id?: string
    public name: string
    public descripcion: string
    public category: string
    public duracion: number
    public image: string
    public fechaCreacion: Date

    constructor(name: string, descripcion: string, category: string, duracion: number, image: string, fechaCreacion: Date){
        this.name = name;
        this.descripcion = descripcion;
        this.category = category;
        this.duracion = duracion;
        this.image = image;
        this.fechaCreacion = fechaCreacion;
    }


} 