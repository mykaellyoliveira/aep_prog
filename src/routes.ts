
// 15 - Importamos o Router do Express
import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import productController from './controller/productController'
import userFindController from './controller/userFindController'

// 16 - criamso uma constante routes e atribuimos a ela uma instancia de Router() 
const routes = Router()

// 17 - Estamos utilizando o método get da Router e passando como parametro o nome da rota e o que será executado quando ela for chamada

routes.get('/', healthCheckController.check)

routes.get('/users', userFindController.find)
// criando rota post que se chama products e vai executar o método que está no productController
routes.post('/products', productController.create)

routes.get('/products', productController.list)

routes.get('/products-stock', productController.listStock)

routes.get('/products-stock-value', productController.stockValue)

export default routes