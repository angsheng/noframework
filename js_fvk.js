//script for fvk.html


//easy tool
var $=function(el){
	if(el[0]=="#"){
		return document.querySelector(el);
	}else{
		return document.querySelectorAll(el)
	}
}


//start
window.onload=function(){

	function routeInital(){
		Array.prototype.forEach.call( $('section'),function(item,index,array){
			item.style.display="none"
		})
	};
	//router inital

	routeInital();
	Array.prototype.forEach.call( $('.index'),function(item,index,array){
			item.style.display="block";
		});
	//inital the navigator button
	Array.prototype.forEach.call( $(".nav_button"),function(item,index,array){
		item.onclick= function(){
			routeInital();	
			$( this.getAttribute('to') ).style.display="block"
		}
	});

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
	

}