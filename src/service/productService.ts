
import { writeFile } from 'fs/promises'
import { readFile } from  'fs/promises'

class ProductService{
    async createProduct(data){
        try{
            // cria um arquivo products.json 
            console.log('asdasdasd',data)
            await writeFile('products.json', JSON.stringify(data, null, 2))
        }catch(error){
            console.log(error)
        }
    }

    async listProducts(){
        try{
            console.log("Leitura do arquivo")
            const teste = await readFile('products.json', "utf-8")
                let result = JSON.parse(teste)
                console.log(result)    
                return result
        }catch(error){
            console.log(error)
        }
    }

    async listStock(){
        try{
            const teste = await readFile('products.json', "utf-8")
            let result = JSON.parse(teste)  
            
            const stock = result.map(produto => { 
                produto.valor_estoque =  produto.qtde * produto.preco   
                return produto
            })
            return stock
        }
        catch(error){
            console.log(error)
        }
    }

    async stockValue(){
        try{
            const result = await this.listStock()

            const totalStock = result.reduce((sum, value) => {
                return sum + value.valor_estoque;
            }, 0);
             
            return totalStock

        }catch(error){
            console.log(error)
        }
    }
}

export default new ProductService()