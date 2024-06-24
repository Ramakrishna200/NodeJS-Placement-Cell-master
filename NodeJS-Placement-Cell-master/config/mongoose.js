const mongoose = require('mongoose');

// Set strictQuery to true or false to suppress the warning
mongoose.set('strictQuery', true);

const DB = 'mongodb+srv://krishna:krishna123@cluster0.9dcqd2t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connecting to the database
mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));
db.once('open', () => {
	console.log('Connected to Database :: MongoDB');
});

module.exports = mongoose;
