const express = require("express")
const SSC = require("sscjs")
const app = express()
const ssc = new SSC('https://enginetestnet.rishipanthee.com');



const PORT = process.env.PORT || 5000



app.get("/balance/:user", function(req, res) {

    
    ssc.find('nft', 'MINEinstances', {'account' : `${req.params.user}` }, 1000, 0, [], (err, result) => {

        let wood = 0;
        let steel = 0;
        let gold = 0;
    
       result.forEach(data => {
    
        if (data.properties?.name == "Wood"){
    
            wood ++;
    
        }

        if (data.properties?.name == "Steel"){
    
            steel ++;
    
        }

        if (data.properties?.name == "Gold"){
    
            gold ++;
    
        }
    
       });
       
       const balance = {
            "Wood": wood,
            "Steel": steel,
            "Gold": gold
       }
    
       res.json(balance)
    
    })


})



app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`)
})