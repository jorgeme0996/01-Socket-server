import { Usuario } from "./usuario";

export class UsuariosLista {

    private lista: Usuario[] = [];

    constructor(){}

    // Agregar un Usuario
    public agregar(usuario: Usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }

    // Actializar un Usuario
    public actualizarNombre( id: string, username: string){
        for(let usuario of this.lista) {
            if(usuario.id === id){
                usuario.username = username
                break;
            }
        }

        console.log('=== Actializando Usuario ===');
        console.log( this.lista );
    }

    // Obtener Lista de Usuarios
    public getLista(){
        return this.lista;
    }

    // Obtener un Usuario
    public getUsuario(id:string){
        return this.lista.find(usuario=> {
            return usuario.id === id
        })
    }

    //Obtener Usuarios en una Sala en particular
    public getUsuariosEnSala(sala:string) {
        return this.lista.filter(usuario=> {
            return usuario.sala === sala
        })
    }

    //Borrar un Usuario
    public deleteUsuario(id:string){
        const tempUsuario = this.getUsuario(id);

        this.lista = this.lista.filter(usuario => {
            return usuario.id !== id;
        })

        return tempUsuario;        
    }
}