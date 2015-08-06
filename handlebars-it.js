$(function(){

	var rawTemplate = '<div>{{message}}</div>'
	
	var templateFunc = Handlebars.compile(rawTemplate)

	var endResult = templateFunc({
		message: 'hello'
	})

$('div').html(endResult)


//examples:

	$('div').html(c)
	$('body').append(c)
	$('ul').before(c)



	//the thing that you give Handlebars.compile() is your raw string template - > {{}}

	//the thing that Handlebars.compile() gives you, is a function to call

	//when you call that function and pass in data, the thing that the function gives you, 
	//is the end result


})


$(function(){

	var rawtemplate = $('#hbs').html()

	var template = Handlebars.compile('<div>{{message}}</div>')
	template({})

})



$(function(){

	var rawtemplate = '<li>{{name}}</li>'
	var template = Handlebars.compile(rawtemplate)

	users.forEach(function(user){
		var endResult = template({
			name: user.name
		})
	})
	
	$('ul').append(endResult)
})