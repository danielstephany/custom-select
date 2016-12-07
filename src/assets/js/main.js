'use strict'

select();

function select() {
	//animation
	var activeSelect;

	$(".select").on('click', function(){
		var $this = $(this);
		activeSelect = $this;
		if (!$this.hasClass('active')){
			$this.addClass('active');
			$this.children('.select__options').slideDown(400);
		} else {	
			$this.children('.select__options').slideUp(400, function(){
				$this.removeClass('active');
			});
		}
	});

	//closes select if clicked outside of
	$(document).on('click', function(e){
		var $this = activeSelect;
		if($(e.target).is(".select, .select__value, select__options, select__options li")){
			return false;
		} else {
			$this.children('.select__options').slideUp(400, function(){
				$this.removeClass('active');
			});
		}
	 
	});

	//input selection code
	$('.select__options li').on('click', function(){
		var $this = $(this);
		var val = $this.html();
		$this.parent('.select__options').siblings('input').attr('value', val);
		$this.parent('.select__options').siblings('.select__value').text(val);
	});

	// loop to check input value on pageload
	$('.select').each(function(item){
		var val = $(this).children('input').attr('value');
		if(val === '' || val === undefined){
			return false;
		} else {
			$(this).children('.select__value').text(val);
		}
	})
}