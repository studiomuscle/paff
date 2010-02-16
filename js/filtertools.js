
window.onload = function(){
	$('#v0').audivid("time",114);
	$('#v0').attr('f', 44444);
	$('#filterlist').change(onSelectChange);


	
	var filters = new Array("feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur",
"feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","feDistantLight","fePointLight","feSpotLight");

}

function onSelectChange(){
    var selected = $("#filterlist").val();
	//alert (selected);
    $('#v0').attr('f', selected);    
    var output = "";
}



