const postBtn = document.getElementById("post-btn").addEventListener("click", function(){
    // take the text in the input field
    const comment = document.getElementById("comment-text").value;
    
    // take the comment box
    const commentBox = document.getElementById("comment-box")
    
    // create element
    const newComment = document.createElement("p")
    newComment.innerText = comment;
    
    // see teh comment to the UI
    commentBox.appendChild(newComment)


})