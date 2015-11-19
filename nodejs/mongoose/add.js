/*
 * More details here http://mongoosejs.com/docs/guide.html
 */
//require mongoose model defines in model/blog.js (see Files)
var BlogPost = require("./model/blog");

//create new model
var post = new BlogPost({
	title: "My first post",
	author: "Yash Kumar",
	body: "We want to make documentation obsolete"
});

//save model to MongoDB
post.save(function(err) {
	if (err) {
		//return err;
		process.exit(1);
	} else {
		console.log("Post saved");
		process.exit(0);
	}
});
