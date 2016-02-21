
var addPost = function(event){
	event.preventDefault();
	var name = $('#name').val();
	var name = $('#name').val();
	var $table = $('#blofTable');
	var bear = {};
		bear.name = name;
		bear.age = age;
		bear.gender = gender;
	
	$.ajax({
		url: '/api/bears',
		method: "POST",
		data: bear,
	}).done(function(data){
		console.log("worked", data);

		$table.append('<tr id=' + data._id + '>\
                   <td>' + data.name + '</td>\
                   <td>' + data.age + '</td>\
                   <td>' + data.gender + '</td>\
                   <td><button class="btn btn-danger deleteBear">Hibernate Bear</button></td>\
                 </tr>'
               );
			
			$('.deleteBear').on('click', deleteBear);
	})
	$('#name').val("");
	$('#age').val("");
	$('#gender').val("");
}
$('.deleteBear').on('click', deleteBear);