$("ul").on("click", "li", function(){
	$(this).toggleClass("class");//toggleclass for calling class from css file to apply color and line-through  
});
$("input").keypress("click", function(event){//keypress triggers the event &to enter the text

	if(event.which==13){//enter character code is 13
			var text=$(this).val();//to take the input text
			$(this).val("");//for input will be empty
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + text + "</li>");
	}//to insert last child of element
	
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();//to remove the text and fade out with milli seconds
	});
	event.stopPropagation();//to stop bubbling of an parent element
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();//fadeToggle method for plus to remove input field
});