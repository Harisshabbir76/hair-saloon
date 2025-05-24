const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const User = require('./Models/User');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const Contact=require ('./Models/Contact')
const Appointment = require('./Models/Appointment');

// Initialize express app first
const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
};

// Apply middleware in correct order
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://harrishere:Haris123@tododb.qyf9c.mongodb.net/hairsaloon?retryWrites=true&w=majority&appName=Tododb';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})  
.then(() => {
    console.log('MongoDB connected');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Routes
app.post('/signup', async (req, res) => {
    const { name, email, age, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
        return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ success: false, message: 'Email already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        const user = await User.create({ 
            name, 
            email, 
            age, 
            password: hashedPassword 
        });
        
        res.status(201).json({ 
            success: true, 
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                age: user.age
            } 
        });
    } catch (error) {
        console.error('Signup Error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Server error during signup',
            error: error.message 
        });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    try {
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const token = `user-${user._id}-${Date.now()}`;
        
        res.status(200).json({ 
            success: true, 
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});












app.get('/logout', (req, res) => {
    // Invalidate the token here if you are using a token-based authentication
    // For JWT, you would typically handle this on the client side by removing the token
    res.status(200).json({ 
        success: true, 
        message: 'Logged out successfully' 
    });
});





app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ 
            success: false, 
            message: 'All fields are required' 
        });
    }

    try {
        const contact = await Contact.create({ name, email, message });
        res.status(201).json({ 
            success: true, 
            message: 'Message sent successfully',
            contact 
        });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Server error', 
            error: error.message 
        });
    }
});



app.post('/appointment', async (req, res) => {
  try {
    const { name, age, gender, services, date, startTime, endTime, phone, payment } = req.body;
    
    // Validate required fields
    if (!name || !age || !gender || !services || !date || !startTime || !endTime || !phone || !payment) {
      return res.status(400).json({ 
        success: false,
        message: 'All fields are required' 
      });
    }

    // Create appointment
    const appointment = await Appointment.create({
      name,
      age,
      gender,
      services: Array.isArray(services) ? services : [services],
      date,
      startTime,
      endTime,
      phone,
      payment,
      status: 'pending'
    });

    res.status(201).json({ 
      success: true,
      message: 'Appointment created successfully',
      appointment,
      redirectUrl: `/appointment/confirmation/${appointment._id}`
    });

  } catch (error) {
    console.error('Appointment error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error',
      error: error.message 
    });
  }
});

app.get('/appointment/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ 
        success: false,
        message: 'Appointment not found' 
      });
    }
    res.status(200).json({
      success: true,
      appointment
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});










// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});