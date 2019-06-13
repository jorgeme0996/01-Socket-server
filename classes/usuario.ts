export class Usuario {

    public id: string;
    public username: string;
    public sala: string;

    constructor(id: string){
        this.id = id;
        this.username = 'sin-nombre';
        this.sala = 'sin sala'
    }
}