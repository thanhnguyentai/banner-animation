/*===================================================*/
function get(el) {
    if(typeof el === "string") 
        return document.getElementById(el);
    return el;
}

function setStyleCss3(object, key, value) {
  var keyName = key.substr(0,1).toUpperCase() + key.substr(1);
  object.style['webkit' + keyName] = value;
  object.style['moz' + keyName] = value;
  object.style['ms' + keyName] = value;
  object.style[key] = value;
}

var animationEvents = ["webkitTransitionEnd", "transitionend", "msTransitionEnd"];
var animationKeyframeEvents = ["webkitAnimationEnd", "animationend", "MSAnimationEnd"];

function registerTransitionEnd(element, callback) {
	var isEndTransition = false;

	var callbackTransitionEnd = function() {
		if(isEndTransition)
		  	return;
		isEndTransition = true;

		if(this.removeEventListener) {
			for(var i = 0; i < animationEvents.length; i++) {
				this.removeEventListener(animationEvents[i], callbackTransitionEnd, false);
			}
		} else if(this.detachEvent) {
			for(var i = 0; i < animationEvents.length; i++) {
				this.detachEvent(animationEvents[i], callbackTransitionEnd, false);
			}
		}

		if(callback)
			callback();
	};

	if(element.addEventListener) {
		for(var i = 0; i < animationEvents.length; i++) {
			element.addEventListener(animationEvents[i], callbackTransitionEnd, false);
		}
	} else if(element.attachEvent) {
		for(var i = 0; i < animationEvents.length; i++) {
			element.attachEvent(animationEvents[i], callbackTransitionEnd, false);
		}
	}
}

function registerKeyframeEnd(element, callback) {
	var isEndKeyframe = false;

	var callbackKeyframeEnd = function() {
		if(isEndKeyframe)
		  	return;
		isEndKeyframe = true;

		if(this.removeEventListener) {
			for(var i = 0; i < animationKeyframeEvents.length; i++) {
				this.removeEventListener(animationKeyframeEvents[i], callbackKeyframeEnd, false);
			}
		} else if(this.detachEvent) {
			for(var i = 0; i < animationKeyframeEvents.length; i++) {
				this.detachEvent(animationKeyframeEvents[i], callbackKeyframeEnd, false);
			}
		}

		if(callback)
			callback();
	};

	if(element.addEventListener) {
		for(var i = 0; i < animationKeyframeEvents.length; i++) {
			element.addEventListener(animationKeyframeEvents[i], callbackKeyframeEnd, false);
		}
	} else if(element.attachEvent) {
		for(var i = 0; i < animationKeyframeEvents.length; i++) {
			element.attachEvent(animationKeyframeEvents[i], callbackKeyframeEnd, false);
		}
	}
}

/*===================================================*/

function step1() {
	var frame1Bg    = get('frame1Bg');
	var frame1Text1 = get('frame1Text1');
	var frame1Text2 = get('frame1Text2');
	var frame1Card  = get('frame1Card');

	var currentDuration = 0;

	setStyleCss3(frame1Bg, 'animation', 'fadeIn 0.5s ease-in-out ' + (currentDuration+1) + 's forwards');
	currentDuration += 1.5;

	setStyleCss3(frame1Text1, 'animation', 'fadeIn 0.5s ease-in-out ' + (currentDuration+0.5) + 's forwards');
	setStyleCss3(frame1Text2, 'animation', 'fadeIn 0.5s ease-in-out ' + (currentDuration+0.5) + 's forwards');
	currentDuration += 1;

	registerKeyframeEnd(frame1Card, function() {
		step2();
	});

	setStyleCss3(frame1Card, 'animation', 'cardComeIn 1.5s ease-in-out ' + (currentDuration+0.5) + 's forwards');
	currentDuration += 2;
}

function step2() {
	var frame1BgContainer    = get('frame1BgContainer');
	var frame1Text1Container = get('frame1Text1Container');
	var frame1Text2Container = get('frame1Text2Container');
	var frame1Light1 = get('frame1Light1');
	var frame1Light2 = get('frame1Light2');

	var currentDuration = 0;

	setStyleCss3(frame1Light1, 'animation', 'fadeIn 1s ease-in-out ' + (currentDuration) + 's forwards');
	setStyleCss3(frame1Light2, 'animation', 'fadeIn 1.5s ease-in-out ' + (currentDuration) + 's forwards');
	currentDuration += 1;

	registerKeyframeEnd(frame1BgContainer, function() {
		step3();
	});
	setStyleCss3(frame1Text1Container, 'animation', 'fadeOut 1s ease-in-out ' + (currentDuration) + 's forwards');
	setStyleCss3(frame1Text2Container, 'animation', 'fadeOut 1s ease-in-out ' + (currentDuration) + 's forwards');
	setStyleCss3(frame1BgContainer, 'animation', 'fadeOut 1s ease-in-out ' + (currentDuration) + 's forwards');
	currentDuration += 1;
}

function step3() {
	var frame1Card  = get('frame1Card');
	var frame2Text = get('frame2Text');
	var frame2TextContainer = get('frame2TextContainer');
	var product1Container = get('product1Container');
	var product1 = get('product1');
	var product2Container = get('product2Container');
	var product2 = get('product2');
	var product3Container = get('product3Container');
	var product3 = get('product3');

	var frame3 = get('frame3');

	var currentDuration = 0;
	setStyleCss3(frame1Card, 'animation', 'cardRotate 1s ease-in-out ' + (currentDuration) + 's forwards');
	currentDuration += 1;

	setStyleCss3(frame2Text, 'animation', 'fadeIn 1s ease-in-out ' + (currentDuration+0.5) + 's forwards');
	currentDuration += 1.5;

	setStyleCss3(frame2TextContainer, 'animation', 'fadeOut 0.5s ease-in-out ' + (currentDuration+1) + 's forwards');
	currentDuration += 1.5;

	setStyleCss3(product1, 'animation', 'fadeIn 0.5s ease-in-out ' + (currentDuration) + 's forwards');
	currentDuration += 0.5;

	setStyleCss3(product1Container, 'animation', 'zoomOut1 0.5s ease-in-out ' + (currentDuration + 0.5) + 's forwards');
	currentDuration += 1;

	setStyleCss3(product2, 'animation', 'fadeIn 0.5s ease-in-out ' + (currentDuration) + 's forwards');
	currentDuration += 0.5;

	setStyleCss3(product2Container, 'animation', 'zoomOut2 0.5s ease-in-out ' + (currentDuration + 0.5) + 's forwards');
	currentDuration += 1;

	setStyleCss3(product3, 'animation', 'fadeIn 0.5s ease-in-out ' + (currentDuration) + 's forwards');
	currentDuration += 0.5;

	setStyleCss3(product3Container, 'animation', 'zoomOut2 0.5s ease-in-out ' + (currentDuration + 0.5) + 's forwards');
	currentDuration += 1;

	setStyleCss3(frame3, 'animation', 'fadeIn 1s ease-in-out ' + (currentDuration + 2) + 's forwards');
}


step1();