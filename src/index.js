const { rastrearEncomendas } = require("correios-brasil");
const express = require("express");

const app = express();

app.use(express.json());

// app.get("/rastreio", async (req, res) => {
//     try{
//     	const {id} = req.query;
//     	const result = await rastrearEncomendas([id]);
// 	console.log(result["0"]);
//    	res.json(result["0"]);
//     }catch(e){
// 	res.json({error: e});	
//     }
// });

app.get("/",(req,res) => {
    res.send("hello word");
});

app.listen(process.env.PORT || 3333,() => {
    console.log("iniciado");
    console.log(process.env.PORT);
});
