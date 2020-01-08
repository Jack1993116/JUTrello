var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test_users',{ useNewUrlParser: true,  useUnifiedTopology: true });

var schema = new mongoose.Schema({
	email: String,
	password: String,
});

module.exports = mongoose.model('Users', schema);