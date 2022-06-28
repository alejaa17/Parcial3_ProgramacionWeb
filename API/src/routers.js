const {Router}=require("express")
const router=Router()
const apiRoute='/api'
const pedidoController=require('./controllers')

//enrutando get y post a la consulta y creacion de pedido
router.get(apiRoute+'/pedidos',controllers.getAll)
router.post(apiRoute+'/pedidos',controllers.create)

module.exports=router