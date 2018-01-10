function postComment() {
	var commenter = document.getElementById("commenterName").value;
	var comment = document.getElementById("commentText").value;

	//Insert comment into "comments" div in this format:
  	//<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>
	
	// Create template string using lodash
	//var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
	var commentTemplate = document.getElementById("comment-template").innerHTML;
	// Create template function
	var templateFn = _.template(commentTemplate);

	var commentsDiv = document.getElementById("comments");

	// Execute template function with JSON object for the interpolated values
	var templateHTML = templateFn({'comment': comment, 'commenter': commenter});

	// Append rather than replace!
	commentsDiv.innerHTML += templateHTML;
}