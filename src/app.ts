
// 1 - Importamos o express
import express from 'express'//framework node js para o backend

import mongoose from 'mongoose'
// 19 - Importamos a constante routes  de routes.ts
import routes from './routes'
// receber solicitações apps de dominios diferentes
import cors from 'cors'
// 2- Criamos uma classe App que irá conter e prover para quem chama-la as configurações da aplicação
class App {
    // 3- Critou um atributo publico chamado express, que é do TIPO express.Application
    public express: express.Application

    // 4- Criamos um construtor para a nossa classe
    public constructor() {
        // 5 - Estamos atribuindo para o atributo express, uma instancia express(), para assim acessas o express
        this.express = express()

        // 8 - Chamamos no construtor o método middleware, ou seja, quem instanciar essa classe já irá executar esse método
        this.middlewares()//função interceptadora
        
        //this.database()
        // 22- estamos chamando o método routes, e assim que essa classe for instanciada, ela já executará o método routes
        //obs: por isso o server quando for executado saberá quais são as rotas da minha aplicação
        this.routes()
    }
 
    // 6 - Criamos um método chamado middleware
    private middlewares(): void {
        // 7 - Quem chama o método middleware está utilizando o método use() do express, para informar ao framework 
        // que ele deve entender requisições e respostas no formato json 

        this.express.use(express.json())//falando pro express entender json
        this.express.use(cors())
    }

    private async database(){
        try{
            mongoose.set("strictQuery", true)
            await mongoose.connect('mongodb+srv://mykaellycarvalho:170902@cluster0.dibpsnq.mongodb.net/?retryWrites=true&w=majority')
            console.log('Connect database sucess')
        }
        catch (err){
            console.error('Connect database error')
        }
    }
    // 20 - Criamos um método chamado routes
    private routes(): void{
        // Estamos falando para o express utilizar o que está na constante routes como uma configuração de rotas
        this.express.use(routes)
    }
}

// 9 - Estamos exportando a classe App já intanciada e já utilizando a propriedade express, ou seja, quem chama essa classe automaticamente já utiliza a propriedade .express
export default new App().express