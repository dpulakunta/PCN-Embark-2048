/*
function getRandomImages() {

	var cycle = new Array();
	cycle[0] = "asuc.jpg";
	cycle[1] = "band.jpg";
	cycle[2] = "choir.jpg";
	cycle[3] = "clara.jpg";
	cycle[4] = "coco.jpg";
	cycle[5] = "creative.jpg";
	cycle[6] = "direction.jpg";
	cycle[7] = "honnie.jpg"; 
	cycle[8] = "interns.jpg";
	cycle[9] = "itik.jpg";
	cycle[10] = "jazz.jpg";
	cycle[11] = "marketing.jpg"; 
	cycle[12] = "modern.jpg";
	cycle[13] = "putritos.jpg";
	cycle[14] = "scene.jpg";
	cycle[15] = "sean.jpg"; 
	cycle[16] = "stage.jpg";
	cycle[17] = "tinikling.jpg";
	cycle[18] = "trad.jpg";
	cycle[19] = "white.jpg"; 

	var limit = 3,
	    amount = 3,
	    lower_bound = 0,
	    upper_bound = 19,
	    unique_random_numbers = [];

	if (amount > limit) limit = amount; //Infinite loop if you want more unique
	                                    //Natural numbers than existemt in a
	                                    // given range
	                                    
	while (unique_random_numbers.length < limit) {
	    var random_number = Math.round(Math.random()*(upper_bound - lower_bound) + lower_bound);
	    if (unique_random_numbers.indexOf(random_number) == -1) { 
	        // Yay! new random number
	        unique_random_numbers.push( random_number );
	    }
	}
    
   	var img1 = cycle[unique_random_numbers[0]];
   	var img2 = cycle[unique_random_numbers[1]];
   	var img3 = cycle[unique_random_numbers[2]];

   	var src1 = "img/cycle/" + img1;
   	var src2 = "img/cycle/" + img2;
   	var src3 = "img/cycle/" + img3;

   	$('.slideshow_top img').attr('src',src1);
	$('.slideshow_mid img').attr('src',src2);
	$('.slideshow_bot img').attr('src',src3);
}

*/

function startCycleOne() {
	setInterval(function() {
		getRandomImagesOne()
	}, 5000);
}

function startCycleTwo() {
	setInterval(function() {
		getRandomImagesTwo()
	}, 8000);
}

function startCycleThree() {
	setInterval(function() {
		getRandomImagesThree()
	}, 6500);
}

function startCycles() {
	startCycleOne();
	startCycleTwo();
	startCycleThree();
}

function getRandomImagesOne() {

	var cycle = new Array();
	cycle[0] = "asuc.jpg";
	cycle[1] = "band.jpg";
	cycle[2] = "choir.jpg";
	cycle[3] = "clara.jpg";
	cycle[4] = "coco.jpg";
	cycle[5] = "creative.jpg";
	cycle[6] = "direction.jpg";

	var limit = 1,
	    amount = 1,
	    lower_bound = 0,
	    upper_bound = 6,
	    unique_random_numbers = [];

	if (amount > limit) limit = amount; //Infinite loop if you want more unique
	                                    //Natural numbers than existemt in a
	                                    // given range
	                                    
	while (unique_random_numbers.length < limit) {
	    var random_number = Math.round(Math.random()*(upper_bound - lower_bound) + lower_bound);
	    if (unique_random_numbers.indexOf(random_number) == -1) { 
	        // Yay! new random number
	        unique_random_numbers.push( random_number );
	    }
	}
    
   	var img1 = cycle[unique_random_numbers[0]];
   	var src1 = "img/cycle/" + img1;
   	$('.slideshow_top img').attr('src',src1);

}

function getRandomImagesTwo() {

	var cycle = new Array();
	cycle[7] = "honnie.jpg"; 
	cycle[8] = "interns.jpg";
	cycle[9] = "itik.jpg";
	cycle[10] = "jazz.jpg";
	cycle[11] = "marketing.jpg"; 
	cycle[12] = "modern.jpg";

	var limit = 1,
	    amount = 1,
	    lower_bound = 7,
	    upper_bound = 12,
	    unique_random_numbers = [];

	if (amount > limit) limit = amount; //Infinite loop if you want more unique
	                                    //Natural numbers than existemt in a
	                                    // given range
	                                    
	while (unique_random_numbers.length < limit) {
	    var random_number = Math.round(Math.random()*(upper_bound - lower_bound) + lower_bound);
	    if (unique_random_numbers.indexOf(random_number) == -1) { 
	        // Yay! new random number
	        unique_random_numbers.push( random_number );
	    }
	}
    
   	var img2 = cycle[unique_random_numbers[0]];
   	var src2 = "img/cycle/" + img2;
   	$('.slideshow_mid img').attr('src',src2);

}

function getRandomImagesThree() {

	var cycle = new Array();
	cycle[13] = "putritos.jpg";
	cycle[14] = "scene.jpg";
	cycle[15] = "sean.jpg"; 
	cycle[16] = "stage.jpg";
	cycle[17] = "tinikling.jpg";
	cycle[18] = "trad.jpg";
	cycle[19] = "white.jpg"; 

	var limit = 1,
	    amount = 1,
	    lower_bound = 13,
	    upper_bound = 19,
	    unique_random_numbers = [];

	if (amount > limit) limit = amount; //Infinite loop if you want more unique
	                                    //Natural numbers than existemt in a
	                                    // given range
	                                    
	while (unique_random_numbers.length < limit) {
	    var random_number = Math.round(Math.random()*(upper_bound - lower_bound) + lower_bound);
	    if (unique_random_numbers.indexOf(random_number) == -1) { 
	        // Yay! new random number
	        unique_random_numbers.push( random_number );
	    }
	}
    
   	var img3 = cycle[unique_random_numbers[0]];
   	var src3 = "img/cycle/" + img3;
   	$('.slideshow_bot img').attr('src',src3);

}
