const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Report = require('./models/Report');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


app.get('/api/reports', async (req, res) => {
  const reports = await Report.find();
  res.json(reports);
});

app.post('/api/reports', async (req, res) => {
  try {
    const report = new Report(req.body); 
    await report.save();                 
    res.json(report);                    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
