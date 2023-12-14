

 
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
  
  export const deletesymptoms = async (req, res) => {
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