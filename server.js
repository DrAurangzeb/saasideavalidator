import express from 'express';
import cors from 'cors';
import { PythonShell } from 'python-shell';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

app.post('/validate', async (req, res) => {
  const { businessIdea, apiKey } = req.body;

  const options = {
    mode: 'text',
    pythonPath: 'python3',
    pythonOptions: ['-u'],
    scriptPath: path.join(__dirname),
    args: [businessIdea, apiKey]
  };

  try {
    const results = await PythonShell.run('test_enhanced.py', options);
    res.json(JSON.parse(results[results.length - 1]));
  } catch (error) {
    console.error('Error running Python script:', error);
    res.status(500).json({ error: 'Error validating business idea' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});