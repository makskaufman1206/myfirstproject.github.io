$('.burger-open').click(function() {
    $('.burger-open').toggleClass('open')
    $('.burger-close').toggleClass('open');
    $('.nav-item').toggleClass('open');
})

$('.burger-close').click(function() {
    $('.burger-open').toggleClass('open')
    $('.burger-close').toggleClass('open');
    $('.nav-item').toggleClass('open');
});

var card = document.getElementsByClassName("srv-blck");
for (i=0; i<card.length; i++) {
    card[i].addEventListener("click", function() {
        titles = this.children;
        for (let title of titles) {
            txt_title = title.getAttribute('value');
            title_form = document.querySelector('.title_form')
            title_form.textContent = txt_title;
            $('body').css('overflow', 'hidden');
            $('.background_form').css('display', 'block');
            $('.forms-blocks').css('display', 'flex');
            $('.block_form').css('display', 'block');
        }

    })
}

$(".btn-close").click(function() {
    $('body').css('overflow', 'visible');
    $('.background_form').css('display', 'none');
    $('.forms-blocks').css('display', 'none');
    $('.block_form').css('display', 'none');
    $('.input_form').val('');

    title_form.textContent = "";  
})

const TOKEN = "7162359214:AAFZpcIwNzr0A9M5H7ECvfKr_PCPC13UvYM";
const CHAT_ID = "-1002027040579";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();         
  if ($('.tel-inp').val().length == 19) {
    message = `Заявка с сайта\n\n`;
    message += `Услуга: ${txt_title}\n`;
    message += `Клиент:  ${ this.name.value }\n`;
    message += `Телефон:  ${ this.telephone.value }\n`;
    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mod: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = "";
        this.telephone.value = "";
        $('.block_form').css('display', 'none')
        $('.block_submitted-form').css('display', 'block')
     })
    .catch((err) => {
      console.warn(err);
    })
    .finally(() =>{
      console.log('Конец')
    })
  }
  else { alert('номер телефона введён не верно') }
})

$('.btn_form_ok').click(function() { 
    $('.background_form').css('display', 'none');
    $('.forms-blocks').css('display', 'none');
    $('.block_submitted-form').css('display', 'none');
    $('body').css('overflow', 'visible');
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.border = "none";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.border = "1px solid gray";
      panel.style.borderRadius = "0px 0px 15px 15px";
      panel.style.borderTop = "none";
    } 
  });
}