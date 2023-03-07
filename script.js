/** บันทึกลงชีต */
const scriptURL = 'https://script.google.com/macros/s/AKfycbyP0EAs0Vo7CbHpGbhJTsMi_y8sBH6Fj1fmOERbDDPUjEdqWlN1rSXN1b64OxLVixo/exec'
const form = document.forms['formSubmit']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response =>
    document.getElementById("formSubmit").reset(),
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'บันทึกข้อมูลเรียบร้อยแล้ว',
      showConfirmButton: false,
      timer: 2000
    }))
    .catch(error => console.error('Error!', error.message))
})

/*---------------------------------------*/
$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});
