//changement couleur et bords des li
$('li:first').css('background-color', '#17F6F4')
$('li:first').css('border', '#17F6F4')
$('li:eq(1)').css('background-color', '#DCF617')
$('li:eq(1)').css('border', '#DCF617')
$('li:eq(2)').css('background-color', '#F617F5')
$('li:eq(2)').css('border', '#F617F5')
$('li:eq(3)').css('background-color', '#F68317')
$('li:eq(3)').css('border', '#F68317')

//cacher les li que l'utilisateur découvrira en cliquant dessus
$('li:eq(1)').hide();
$('li:eq(2)').hide();
$('li:eq(3)').hide();

//montrer
$('li:first').click(function(){
    $('li:eq(1)').show();
  });

$('li:eq(1)').click(function(){
    $('li:eq(2)').show();
});

$('li:eq(2)').click(function(){
    $('li:eq(3)').show();
});

//fichier audio au dernier clic
//titre clignote
var audio = new Audio('chanson_anniv.mp3');
$('li:eq(3)').click(function(){
    $('body').css('background', 'url(images/anniv.jpg) no-repeat center center');
    audio.play();
    $('h1').fadeOut(1000).delay(1000).fadeIn(1000);     
});












