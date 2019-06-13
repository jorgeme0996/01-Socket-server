import { Socket } from 'socket.io';

export const desconectar = (cliente: Socket) => {
    cliente.on('disconnect', ()=>{
        console.log('Cliente Desconectado');
    });
}

//Escuchar mensajes
export const mensaje = (cliente: Socket, io: SocketIO.Server) => {
    cliente.on('mensaje', (payload: {de:string, cuerpo: string})=> {
        console.log('Mensaje recibido', payload);

        io.emit('mensaje-nuevo', payload);

    })
}

// Configurar Usuario
export const configurarUsuario = (cliente: Socket, io: SocketIO.Server)=>{
    cliente.on('configurar-usuario', (payload: {username: string}, callback: Function)=> {
        console.log('Configurando Usuario', payload.username);

        callback({
            ok:true,
            mensaje: `Usuario ${payload.username}, configurado`
        })

    })
}