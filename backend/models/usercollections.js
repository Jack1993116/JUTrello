var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test_users',{ useNewUrlParser: true,  useUnifiedTopology: true });

var schema = new mongoose.Schema({
	userid: String,
	collections: Array,
	stared: Array,
	groups: Array
});

module.exports = mongoose.model('Usercollections', schema);