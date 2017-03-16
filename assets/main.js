function draw(el, duration) {
	$(el).css('animation', 'sketch ' + duration + 's ease-in-out forwards');
	$(el).css('-webkit-animation', 'sketch ' + duration + 's ease-in-out forwards');
	$(el).css('-moz-animation', 'sketch ' + duration + 's ease-in-out forwards');
	$(el).css('-ms-animation', 'sketch ' + duration + 's ease-in-out forwards');
	$(el).css('-o-animation', 'sketch ' + duration + 's ease-in-out forwards');
}

function hide() {
	document.getElementsByClassName('card-shadow')[0].click();
}

function show_ticket() {
	new TimelineMax()
	.to('#tckt', 1, {
		x: "0%",
		ease: Power3.easeOut
	});
	document.getElementById('tckt').setAttribute('onclick', 'unrollCards();');
}

function gotoRoom() {
	document.getElementById('gotoRoom').click();
}

function show_menu(id) {
	new TimelineMax()
	.to(id, 0.5, {
		left: '0',
		ease: Power3.easeOut
	});
}

function show_popup(id) {
	new TimelineMax()
	.to(id, 0.5, {
		top: '1em',
		ease: Power3.easeOut
	});
}

function hide_menu(id) {
	new TimelineMax()
	.to(id, 0.8, {
		left: '-50%',
		ease: Power3.easeIn
	});
}

function hide_popup(id) {
	new TimelineMax()
	.to(id, 0.8, {
		top: '-50%',
		ease: Power3.easeIn
	});
}

function show_arrowkeys() {
	new TimelineMax()
	.to('.arrow', 1, {
		autoAlpha: 1
	})
	.to('.arrow', 1, {
		autoAlpha: 0
	});
}

function hide_arrowkeys() {
	new TimelineMax()
	.to('.arrow-keys', 0.5, {
		top: '-50%',
		ease: Power3.easeIn
	});
}

function gotoLink(link) {
	x = document.createElement('a');
	x.setAttribute('href', link);
	x.click();
}

function openLink(link) {
	window.location.assign(link);
}


function show_card(id) {
	eleid = '#' + id;
	new TimelineMax()
	.set('.card-shadow', {
		className: '+=shown'
	})
	.set(eleid, {
		className: '+=shown'
	}, '-=1')
	.from('.card', 1, {
		y: 30,
		autoAlpha: 0,
		ease: Circ.easeOut
	}, '-=1');
}

function hide_card() {
	new TimelineMax()
	.set('.card-shadow', {
		className: '-=shown'
	})
	.set('.card-box', {
		className: '-=shown'
	}, '-=1');
}

function unrollCards() {
	//rolling out card #zero
	var rollOutCards = new TimelineMax()
	.to('#tckt', 1, {
		x: "-100%",
		ease: Power3.easeIn
	})
	.to($('#background'), 1, {
		autoAlpha: 0,
		ease: Power4.easeOut
	})
	.call(gotoRoom);
}

$(document).ready(function() {
	//loading Scene
	var loadingTl = new TimelineMax();
	loadingTl
	.to('#zero', 0.5, {
		autoAlpha: 1
	})
	.call(draw, ['.st3', '3'])
	.to($('.st3'), 2, {
		fill: "#c63a38",
		stroke: "rgba(0,0,0,0)"
	}, "+=2")
	//mask 1
	.from($('.mask-stripe'), 0.5, {
		autoAlpha: 0,
		ease: Power3.easeOut
	}, "-=1")
	//card 0
	.from($('.card0'), 1, {
		autoAlpha: 0,
		x: "-1000px",
		y: "-1000px",
		ease: Power3.easeOut
	}, "-=1")
	//card 1
	.from($('.card1'), 1, {
		autoAlpha: 0,
		x: "-600px",
		y: "-1000px",
		ease: Power3.easeOut
	}, "-=0.85")
	//card 2
	.from($('.card2'), 1, {
		autoAlpha: 0,
		x: "-200px",
		y: "-1000px",
		ease: Power3.easeOut
	}, "-=0.85")
	//card 3
	.from($('.card3'), 1, {
		autoAlpha: 0,
		x: "0px",
		y: "-1000px",
		ease: Power3.easeOut
	}, "-=0.85")
	//card 4
	.from($('.card4'), 1, {
		autoAlpha: 0,
		x: "200px",
		y: "-1000px",
		ease: Power3.easeOut
	}, "-=0.85")
	//card 5
	.from($('.card5'), 1, {
		autoAlpha: 0,
		x: "600px",
		y: "-1000px",
		ease: Power3.easeOut
	}, "-=0.85")
	//revels'17 text
	.addCallback(draw, '-=0.5', ['.fest-full', '2.5'])
	.to($('.fest-full'), 2.5, {
		fill: "#f5b023",
		stroke: "rgba(0,0,0,0)"
	}, '-=0.5')
	//carnaval
	.addCallback(draw, '-=1', ['.th-half', '1'])
	.to($('.th-half'), 1, {
		fill: "#f9f9fa",
		stroke: "rgba(0,0,0,0)"
	}, '-=1')
	//theme desc
	.call(draw, ['.th-full', '1'])
	.to($('.th-full'), 1, {
		stroke: "rgba(0,0,0,0)",
		fill: "#f9f9fa"
	})
	.to($('#th_8'), 1, {
		fill: "#f5b023"
	}, "-=1")
	.fromTo('#tckt', 1, {
		x: '-100%'
	}, {
		x: '-77%'
	})
	.to('#tckt', 1, {
		boxShadow: '0 0 1.5em 0 #f7af23',
		repeat: -1,
		yoyo: true
	});

	//loadingTl.totalDuration(0.1);

	//ready Scene
	$('.card0').hover(function() {
		TweenMax.to($(this).parent(), 0.5, {
			x: -10,
			y: -10
		});}, function() {
			TweenMax.to($(this).parent(), 0.5, {
				x: 0,
				y: 0
			});
		});
	$('.card1').hover(function() {
		TweenMax.to($(this).parent(), 0.5, {
			x: -6,
			y: -10
		});}, function() {
			TweenMax.to($(this).parent(), 0.5, {
				x: 0,
				y: 0
			});
		});
	$('.card2').hover(function() {
		TweenMax.to($(this).parent(), 0.5, {
			x: -3,
			y: -10
		});}, function() {
			TweenMax.to($(this).parent(), 0.5, {
				x: 0,
				y: 0
			});
		});
	$('.card3').hover(function() {
		TweenMax.to($(this).parent(), 0.5, {
			x: 0,
			y: -10
		});}, function() {
			TweenMax.to($(this).parent(), 0.5, {
				x: 0,
				y: 0
			});
		});
	$('.card4').hover(function() {
		TweenMax.to($(this).parent(), 0.5, {
			x: 3,
			y: -10
		});}, function() {
			TweenMax.to($(this).parent(), 0.5, {
				x: 0,
				y: 0
			});
		});
	$('.card5').hover(function() {
		TweenMax.to($(this), 0.5, {
			x: 6,
			y: -10
		});}, function() {
			TweenMax.to($(this), 0.5, {
				x: 0,
				y: 0
			});
		});
});