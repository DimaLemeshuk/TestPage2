
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const burger = document.querySelector(".header_burger");
const menu = document.querySelector(".menu");
const body = document.querySelector(".body");

burger.onclick = function() {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
	body.classList.toggle("lock");
}

////////////////////////////////////////////////////////////////////////////////

var form = document.querySelector(".footer-form_cl")
//form.addEventListener('submit',formSend)

/*async function formSend(e){
	e.preventDefault();

	var name = form.name.value;
	var e_mail = form.e_mail.value;
	var message1 = form.message1.value;
	var message2 = form.message2.value;
	var formData;

	alert("fff")

	var fail = validateForm();
	alert(fail);

	if(fail != "" ) {
		document.getElementById('error').innerHTML = fail;
		return; 
	} else if(fail == "") {


		alert('2');

		formData = new FormData(form);

		let response = await fetch('sendmail.php', {
			method: 'POST',
			body: formData
		});
		
		alert("3");

		if(response.ok){
			let response = await response.json();
			alert(result.message)
			document.getElementById('send_succes').style.display = 'block';
			document.getElementById('footer-form').style.display = 'none';
			//formData = new FormData(form);
		}else{
			alert("Error")
		}

	}
}*/

/*const SendForm = document.querySelector("Send")
SendForm.onclick = function(){
	var name = form.name.value;
	var e_mail = form.e_mail.value;
	var message1 = form.message1.value;
	var message2 = form.message2.value;
	var formData;

	alert("fff")

	var fail = validateForm();
	alert(fail);

	if(fail != "" ) {
		document.getElementById('error').innerHTML = fail;
		return; 
	} else {

	}

}*/

jQuery('.SendF').click( function() {
	alert("туть")
	var form = jQuery(this).closest('form');

	if (validateForm() == "" ) {
		alert("туть2")
		var actUrl = form.attr('action');

		jQuery.ajax({
			url: actUrl,
			type: 'post',
			dataType: 'html',
			data: form.serialize(),
			success: function(data) {
				alert("goood")
			},
			error: function() {
				alert("Baaad")
			}
		})
	} 
})

function validateForm() {
	var name = form.name.value;
	var e_mail = form.e_mail.value;

	if(name.length == 0 ||e_mail.length == 0 ) {
		return "Заповніть поля e-mail та ім'я "; 
	}else if( name.length <=1 || name.length > 30 ) {
		return "Введіть коректне ім'я";
	}else if( e_mail.length<6) {
		return "Введіть коректний e-mail";
	}

	return "";
}

const FormOK = document.querySelector("New");
FormOK.onclick = function() {
//function returnForm() {
	document.getElementById('send_succes').style.display = 'none';
	document.getElementById('footer-form').style.display = 'block';
	document.getElementById('footer-form').reset();
}

///////////////////////////////////////////////
const swiper = new Swiper('.swiper2', {

	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},

  });

  const swiper1 = new Swiper('.swiper1', {

	direction: 'vertical',

	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

  });
