//script for fvk.html


//easy tool
var $= function(el){
	if(el[0]=="#"){
		return document.querySelector(el);
	}else{
		return document.querySelectorAll(el)
	}
};
var ajax= function( method, url, body, callback ){
		if (body=='undefined') body=null;
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if ( xhr.readyState == 4 ) {
				if (xhr.status == 200 ) {
					 callback(xhr.responseText)
					 console.log(xhr.responseText) 
				}else{
					console.log('there get data from ' + url + ' fialed ')
				}
			}
		};
		xhr.open( method, url, true );
		xhr.send( body )
};


//start
window.onload=function(){
	
	function hiddenAll(){
		Array.prototype.forEach.call( $('.router'),function(item,index,array){
		item.style.display= 'none' });
	};

	//add listen on hashchange
	window.onhashchange=function(event){
		hiddenAll();
		var hash= window.location.hash;
		var sections=hash.split('/');
		//add index when use a second class router
		if( sections[0]=='#section_b' && sections[1]==undefined ){ sections= ['#section_b','section_b_a'] };
		sections.forEach(function(item,index,array){
			if(item[0]!='#'){ item= '#'+item };
			if( $(item) ){  $(item).style.display= 'block' }
		})
	};
	//router inital when index page;
	window.onbeforeunload= function(){ window.location.href="" };
	hiddenAll();
	$("#section_a").style.display='block';


	//scetion_a part
	//model_aa
	var model_aa_input=$('#model_aa').children[1],
		model_aa_screen=$('#model_aa').children[2];
	model_aa_input.addEventListener('keyup',function(){
			model_aa_screen.innerText= this.value
	});

	//model_ab
	var model_ab_input_a= $('#model_ab').children[1],
		model_ab_input_b= $('#model_ab').children[2],
		model_ab_screen= $('#model_ab').children[3];
	function model_ab_plus(){
		var reslut= parseInt(model_ab_input_b.value)+ parseInt( model_ab_input_a.value);
		model_ab_screen.innerText= reslut;
	};
	model_ab_input_a.addEventListener( 'change',function(){
		model_ab_plus()
	});
	model_ab_input_b.addEventListener( 'change',function(){
		model_ab_plus()
	})
	//model_ab inital
	model_ab_plus();


	//section_b part
	//section_b_a
	
	//add listener
	var model_b_a_button= $('#model_b_a').children[0],
		model_b_a_screen= $('#model_b_a').children[2],
		model_b_a_clear= $('#model_b_a').children[1];
	model_b_a_button.onclick= function(){
		ajax('get','./data.txt',undefined,function(r){
			model_b_a_screen.innerText=r;
		})
	};
	model_b_a_clear.onclick= function(){
		model_b_a_screen.innerText=null;
	}

}