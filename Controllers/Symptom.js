import Symptom from "../Models/SymptomSchema.js";

export const getAllSymptoms = async ( req, res) => {
  try{
    const allSymptoms = await Symptom.find({creator: req.userId})

    res.status(200).json({message: "get all succcess", data: allSymptoms})
  }
  catch(error){
    res.status(500).json({ error: error.message });
  }
}
 
 export const searchsymptoms = async (req, res) => {
    try {
      const symptoms = await Symptom.find();
      res.json(symptoms);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  
  export const addsymptoms = async (req, res) => {
    const { name, caption } = req.body;
  
    try {
      const newSymptom = new Symptom({ name, caption });
      await newSymptom.save();
      res.status(201).json(newSymptom);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  export const deletesymptom = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedSymptom = await Symptom.findByIdAndDelete(id);
      if (!deletedSymptom) {
        return res.status(404).json({ error: 'Symptom not found' });
      }
      res.json({ message: 'Symptom deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }