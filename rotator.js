(function(){
	"use strict";	
	const contents = $("#container p");
	let counter = 1;
	rotator();
	function rotator() { 
		$(`#container p:nth-child(${counter})`).fadeIn(2000, function () { 
			//
			if ($(this).is("#container p:last-child")) {
				//
				setTimeout(function () {
					$(`#container p:nth-child(${counter})`).fadeOut(2000, function () {
						counter = 1;
						rotator();
					});
				}, 3000);
					
			} else {
				// 
				setTimeout(function () {
					$(`#container p:nth-child(${counter})`).fadeOut(2000, function () {
						counter++;
						rotator()
					});
					// 7 seconds wait
				}, 3000);
			}

		 });
	}

}());
