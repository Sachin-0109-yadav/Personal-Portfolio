const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// Replace with your MongoDB URL (create a free account at https://cloud.mongodb.com)
mongoose.connect('mongodb://localhost:27017/portfolioDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ Connected to MongoDB');
}).catch((err) => {
    console.error('❌ MongoDB connection error:', err);
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();
    res.status(200).json({ message: 'Message saved successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving message.' });
  }
});
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching messages' });
  }
});

// Serve frontend (static files like index.html, CSS, images)
app.use(express.static(path.join(__dirname, '../')));

// Optional: Add a test API
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
