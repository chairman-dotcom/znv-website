var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* global jQuery */

(function() {
	"use strict";

	jQuery(document).on( 'action.init_hidden_elements', trx_addons_cf7_init );
	
	function trx_addons_cf7_init(e, container) {
		if (container === undefined) container = jQuery('body');
		if (container.length === undefined || container.length === 0) return;
		
		container.find('.wpcf7:not(.alert_inited)').each( function() {
			var $form = jQuery(this);
			// Decorate messages
			$form
				.addClass('alert_inited')
				.on('wpcf7:submit wpcf7submit', function(e, details) {
					var response = $form.find('.wpcf7-response-output');
					if ( response.length ) {
						response
							.addClass('trx_addons_message_box')
							.removeClass('trx_addons_message_box_info trx_addons_message_box_error trx_addons_message_box_success');
						if ( typeof e == 'object' && typeof e.detail == 'object' && typeof e.detail.status != 'undefined' ) {
							if ( e.detail.status == 'validation_failed' ) {
								response.addClass('trx_addons_message_box_error');
							} else if ( e.detail.status == 'mail_sent' ) {
								response.addClass('trx_addons_message_box_success');
							} else {
								response.addClass('trx_addons_message_box_info');
							}
						}
						response.fadeIn();
					}
				})
				.on('click keypress change', function() {
					$form.find('.wpcf7-response-output:visible').fadeOut();
				} );
			// Remove validation tip and class on any key pressed in the field
			$form
				.on('change', 'input,select,textarea', function() {
					var $self = jQuery(this),
						$wrap = $self.parents('.wpcf7-not-valid');
					if ( $self.val() !== '' ) {
						if ( $self.hasClass( 'wpcf7-not-valid' ) ) {
							$self.removeClass('wpcf7-not-valid');
						} else if ( $wrap.length > 0 ) {
							$wrap.removeClass('wpcf7-not-valid');
						}
					}
				});
		} );
	}
	
})();


}
/*
     FILE ARCHIVED ON 22:03:46 Sep 20, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:25:52 Aug 12, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.738
  exclusion.robots: 0.045
  exclusion.robots.policy: 0.032
  esindex: 0.015
  cdx.remote: 1096.361
  LoadShardBlock: 107.336 (3)
  PetaboxLoader3.datanode: 85.415 (5)
  PetaboxLoader3.resolve: 145.152 (3)
  load_resource: 198.667 (2)
*/