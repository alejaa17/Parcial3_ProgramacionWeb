const pedidoController={}
const pedido=require('./pedidos.json')

//get
pedidoController.getAll=(res)=>{
    res.json(pedido)
}

//post
pedidoController.create=(req,res)=>{
    const comensal=pedido.length+1
    const nuevopedido=req.body
    nuevopedido["comensal"]=comensal
    pedido.push(nuevopedido)
    res.json(nuevopedido)
}

module.exports=pedidoController