// var people = [

// 	{
// 		name: 'Will',
// 		age: 33,
// 		occupation: 'student',
// 		id: 1
// 	},

// 	{
// 		name: 'Tom',
// 		age: 24,
// 		occupation: 'dentist',
// 		id: 2
// 	},

// 	{
// 		name: 'Glompy',
// 		age: 123,
// 		occupation: 'advisor',
// 		id: 3
// 	}

// ];

// s

// 	{
// 		name: 'Will',
// 		age: 33,
// 		occupation: 'student',
// 		id: 1
// 	},

// 	{
// 		name: 'Tom',
// 		age: 24,
// 		occupation: 'dentist',
// 		id: 2
// 	},

// 	{
// 		name: 'Glompy',
// 		age: 123,
// 		occupation: 'advisor',
// 		id: 3
// 	}

// ];


// $(function(){

// 	ul = $('ul')

// 	people.forEach(function(person){
// 		ul.append('<li data-id=' + person.id + '>' + person.name + ' <a class="get-id" href="#">Get Id</a>' + ' <a class="occupation" href="#">Occupation</a>' + ' <a class="delete" href="#">Delete</a>' + '</li>')
// 	})

// 	$('ul').on('click', '.get-id', function(){
// 		console.log($(this).parent().data('id'))
// 	})

// 	$('ul').on('click', '.occupation', function(){
// 		var id = $(this).parent().data('id')
// 		var person = _.find(people, {id: id})
// 		console.log(person.occupation)
// 	})

// 	$('ul').on('click', '.delete', function(){
// 		$(this).parent().remove()
// 	})
// })




// $(function(){

// 	ul = $('ul')

// 	people.forEach(function(person){
// 		ul.append('<li data-id=' + person.id + '>' + person.name + ' <a class="get-id" href="#">Get Id</a>' + ' <a class="occupation" href="#">Occupation</a>' + ' <a class="delete" href="#">Delete</a>' + '</li>')
// 	})

// 	$('ul').on('click', '.get-id', function(){
// 		console.log($(this).parent().data('id'))
// 	})

// 	$('ul').on('click', '.occupation', function(){
// 		var id = $(this).parent().data('id')
// 		var person = _.find(people, {id: id})
// 		console.log(person.occupation)
// 	})

// 	$('ul').on('click', '.delete', function(){
// 		$(this).parent().remove()
// 	})
// })










var people = [

	{
		name: 'Will',
		age: 33,
		occupation: 'jr web dev',
		id: 1
	},

	{
		name: 'Stat',
		age: 31,
		occupation: 'nurse',
		id: 2
	},

	{
		name: 'Glompy',
		age: 216,
		occupation: 'Will\'s alter ego',
		id: 3
	}

];

$(function(){

	ul = $('ul')

	people.forEach(function(person){
		ul.append('<li data-id=' + person.id + '>' + person.name + ' <a class="get-id" href="#">Get Id</a>' + ' <a class="occupation" href="#">Occupation</a>' + ' <a class="delete" href="#">Delete</a>')
	})

	$('ul').on('click', '.get-id', function(){
		console.log($(this).parent().data('id'))
	})

	$('ul').on('click', '.occupation', function(){
		var id = $(this).parent().data('id')
		var person = _.find(people, {id: id})
		console.log(person.occupation)
	})


})


//create links for 'get id', 'occupation', and 'delete', and log them to the console