

 
  app.get('/api/symptoms', async (req, res) => {
    try {
      const symptoms = await Symptom.find();
      res.json(symptoms);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  
  app.post('/api/symptoms', async (req, res) => {
    const { name, caption } = req.body;
  
    try {
      const newSymptom = new Symptom({ name, caption });
      await newSymptom.save();
      res.status(201).json(newSymptom);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.delete('/api/symptoms/:id', async (req, res) => {
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
  });