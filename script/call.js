$(document).ready(function(){
    $('body').prepend('<div class="teacher">성남 그린컴퓨터 강쌤반 <a href="tel:010-3321-7317"><i class="fa-solid fa-square-phone"></i> 질문 010-3321-7317</a></div>')
    $('.teacher').css({position: 'fixed', width: '100%', height: '40px', background:'rgba(64,108,178,1)', zIndex: '777777', bottom: '0%', display: 'flex', justifyContent:' center', alignItems: 'center', color:' #fff'})
    $('.teacher a').css({color: '#e9ff7b', marginLeft: '30px'})
})