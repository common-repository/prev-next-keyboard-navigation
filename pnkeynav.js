jQuery(function() {
	if (jQuery('.post').length < 2) return;
	jQuery(document).keypress(function(e) {
		var f=false, b=false;
		if (e.target.tagName.match(/input|textarea/i)) return;
		switch (e.which) {
			case 75:
			case 107:
				b=true;
				break;
			case 74:
			case 106:
				f=true;
				break;
		}
		if (!f && !b) return;

		jQuery('.post').each( function(i,el) {
			if(f && parseInt(jQuery(el).offset().top,10) > parseInt(jQuery(document).scrollTop(),10)) {
				if(jQuery(document).scrollTop() + jQuery(window).height() >= jQuery(document).height()){
					pnkeynavPage(1);
				}			
				jQuery(document).scrollTop(jQuery(el).offset().top);
				f = false;
			}
			if(b && parseInt(jQuery(el).offset().top,10) >= parseInt(jQuery(document).scrollTop(),10)) {
				var d=jQuery('.post').get(i-1);
				if (i > 0) {
					jQuery(document).scrollTop(jQuery(d).offset().top);
					b = false;
				} else {
					pnkeynavPage(-1);
				}
			}
		});
		if (f) {
			pnkeynavPage(1);
		}
	});
});
function pnkeynavPage (inc) {
	var path = window.location.pathname;
	if (p=path.match(/\/page\/(\d+)\/?$/)) {
		var p = parseInt(p[1], 10) + inc;
		var s = p > 1 ? '/page/'+p+'/' : '';
		window.location.pathname = path.replace(/\/page\/(\d+)\/?$/, s);
	} else if (inc > 0)
		window.location.pathname = path + '/page/2/';
}
