const MenuModel = require('../../models/menu/menu.model');
const fs = require('fs');

const pizza = async (req, res) => {
    fs.readFile('./assets/pizzamakarna.json', 'utf8', async (err, data) => {
        if (err) {
            res.status(500).json({ msg: 'Hata oluştu' });
        } else {
            const menuData = await JSON.parse(data);
            MenuModel.insertMany(menuData).then(function(){
                console.log("Data inserted") 
                res.status(200).json({  });
                 // Success
            }).catch(function(error){
                res.status(500).json({ msg: 'Hata oluştu' });
                console.log(error)      // Failure
            });
            
        }
    });
    
}

const alkoller=async(req,res)=>{
    fs.readFile('./assets/json/alkoller.json', 'utf8', async (err, data) => {
        if (err) {
            res.status(500).json({ msg: 'Hata oluştu' });
        } else {
            const menuData = await JSON.parse(data);
            MenuModel.insertMany(menuData).then(function(){
                console.log("Data inserted") 
                res.status(200).json({  });
                 // Success
            }).catch(function(error){
                res.status(500).json({ msg: 'Hata oluştu' });
                console.log(error)      // Failure
            });
            
        }
    });
}

module.exports = { pizza,alkoller };