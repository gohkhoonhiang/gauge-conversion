var main = function() {
	$('.button').hover(
		function() {
			$(this).addClass('button-hover');
		},
		function() {
			$(this).removeClass('button-hover');
		}
	);
	
	$('#convert-btn').click(function() {
		var patternGaugeSts = $('#pattern-gauge-sts-txt').val();
		var patternRequiredSts = $('#pattern-required-sts-txt').val();
		var patternMultipleSts = $('#pattern-required-mult-txt').val();
		var patternAddSts = $('#pattern-required-add-txt').val();
		if (patternAddSts == '') {
			patternAddSts = 0;
		}
		var ownGaugeSts = $('#own-gauge-sts-txt').val();
		var ownRequiredStsTxt = $('#own-required-sts-txt');
		var ownMultipleStsTxt = $('#own-required-mult-txt');
		var ownAddStsTxt = $('#own-required-add-txt');
		convertGauge(patternGaugeSts, patternRequiredSts, patternMultipleSts, patternAddSts, ownGaugeSts, ownRequiredStsTxt, ownMultipleStsTxt, ownAddStsTxt);
	});
};

var convertGauge = function(patternGaugeSts, patternRequiredSts, patternMultipleSts, patternAddSts, ownGaugeSts, ownRequiredStsTxt, ownMultipleStsTxt, ownAddStsTxt) {
	var result = Math.round(((ownGaugeSts*patternMultipleSts*(patternRequiredSts-patternAddSts)/patternMultipleSts/patternGaugeSts)-patternAddSts)/patternMultipleSts)*patternMultipleSts+parseInt(patternAddSts);
	ownRequiredStsTxt.val(result);
	ownMultipleStsTxt.val(patternMultipleSts);
	ownAddStsTxt.val(patternAddSts);
};

$(document).ready(main);