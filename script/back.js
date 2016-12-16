$(function(){
	var m = 0;
	$(window).scroll(function(){
		if($(this).scrollTop() > 800 && $(this).scrollTop() < 1100){
			$("#back").fadeIn(200);
		}
		else if($(this).scrollTop() < 800)
		{
			$("#back").fadeOut(200);
		}
		else if(m == 0  && $(this).scrollTop() > 1150){
			$(window).one('scroll',function(){
	     	audio[1].play();
		    audio[0].pause();
		    audio[0].currentTime = 0.0;
		    time_r = 1;
		    time_t = 2;
	     	$(".cd").attr("id","run");
			m = 1;
			});
		}
	$("#back").click(function(){
		$(window).scrollTop(0); 
	 });
	});
	$(window).trigger('scroll');
	var mask =  $('.mask');
	var sidebar = $('.sidebar');
	$('.sidebar_menu').click(function(){
		mask.fadeIn();
		$('.sidebar').css("right",0);
	});
	$('.mask').click(function(){
		mask.fadeOut();
		$('.sidebar').css("right",-sidebar.width());
	});
	$(".log").click(function(){
		alert("你到底多重？");
	});
	//音乐控制
	var music = document.getElementById("music");
    var audio = getByAudio(music);
	function getByAudio(parents){
		var boxArr = new Array();
		var oAudios = parents.getElementsByTagName('*');
		for(var i=0 ; i<oAudios.length;i++){
			if( oAudios[i].tagName == 'AUDIO' )
			boxArr.push(oAudios[i]);
		}
		return boxArr;
	}
	var time_r = 1;
	var time_t = 1;
	var time_x = 1;
	$(".bg_music li").eq(0).click(function(){
		if(time_r == 1){
		audio[0].play();
		audio[1].pause();
		audio[1].currentTime = 0.0;
		audio[2].pause();
		audio[2].currentTime = 0.0;
		time_t = 1;
		time_x = 1;
		time_r = 2;
		$(".cd").attr("id","run");
		}else{
		audio[0].pause();
		time_r = 1;
		$(".cd").attr("id","--");
		}
	});
	$(".bg_music li").eq(1).click(function(){
		if(time_t == 1){
		audio[1].play();
		audio[0].pause();
		audio[0].currentTime = 0.0;
		audio[2].pause();
		audio[2].currentTime = 0.0;
		time_r = 1;
		time_x = 1;
		time_t = 2;
		$(".cd").attr("id","run");
		}else{
			audio[1].pause();
			time_t = 1;
		$(".cd").attr("id","--");
		}
	});
	$(".bg_music li").eq(2).click(function(){
		if(time_x == 1){
		audio[2].play();
		audio[1].pause();
		audio[1].currentTime = 0.0;
		audio[0].pause();
		audio[0].currentTime = 0.0;
		time_r = 1;
		time_t = 1;
		time_x = 2;
		$(".cd").attr("id","run");
		}else{
			audio[2].pause();
			time_x = 1;
		$(".cd").attr("id","--");
		}
	});
    $("#green-play").click(function(){
		if(time_r == 1){
		audio[0].play();
		audio[1].pause();
		audio[1].currentTime = 0.0;
		audio[2].pause();
		audio[2].currentTime = 0.0;
		time_t = 1;
		time_x = 1;
		time_r = 2;
		$(".cd").attr("id","run");
		}else{
		audio[0].pause();
		time_r = 1;
		$(".cd").attr("id","--");
		}
	});
})