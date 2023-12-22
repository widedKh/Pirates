const Pirate=require("../models/pirate.model")

//    display all the pirates
module.exports.findAllPirates=(req, res)=>{
    Pirate.find()
    .then(allPirates=>{
        console.log(allPirates)
        res.json({allPirates})
    })
    .catch(err=>{res.json({message:"error"})})
}

    // add a new pirate
module.exports.AddNewPirate = (req, res) => {
    Pirate.create(req.body)
      .then(newPirate => {
        console.log(newPirate);
        res.json({newPirate});
      })
      .catch(err => {
        console.log(err);
        res.status(404).json({ message: "you have an error", error: err }) 
      });
  };

    //  display the pirate's profile
  module.exports.findOnePirate=(req, res) => {
    Pirate.findOne({ _id: req.params.id })
    .then(onePirate => {
     console.log(onePirate);
     res.json({onePirate});
    })
    .catch(err => {
     console.log(err);
     res.status(400).json({ error: { errors: { name: err } } });
   });
 };
 
    //    delete a pirate
  module.exports.deletePirate= (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
      .then((deleteConfirmation) => {
        console.log(deleteConfirmation);
        res.json({deleteConfirmation});
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ error: "The Pirate cannot be deleted" });
      });
    };