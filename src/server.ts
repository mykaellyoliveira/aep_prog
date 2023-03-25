// 10 - Importou a classe App, já instanciada de app.ts 
import app from "./app"

// 11 - Criamos a função main(), que será executada qunado o arquivo for chamado / ela será executada
function main() {
    let port = 3000
    // lembrete, ao chamar app.listen, já estamos informando ao servidor, as configurações que foram feitas no app.ts
     try{
         // 12- Estamos usando o método listen do express para criar um servidor, passando como 
         // parametro a porta, "dominio", uma função asincrona e anonima, que irá executar a escrita da mensagem "starting server" toda vez que o servidor for levantar
        app.listen(port, 'localhost', async () => {
            console.log(`Starting server at port ${port}`)
        })
        // 13- no catch estamos capturando qualquer erro que possa ocorrer na criação do servidor, e printando ele no console
     } catch(err){
        console.error('Starting server Error', err)
     }
}

main()
