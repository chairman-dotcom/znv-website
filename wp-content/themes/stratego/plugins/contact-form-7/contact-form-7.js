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

/* global jQuery, STRATEGO_STORAGE */

( function() {
	"use strict";

	jQuery( document ).on( 'action.ready_stratego', function() {

		jQuery(".wpcf7-form").each( function () {

			var $form = jQuery( this );

			// CF7 checkboxes and radio - add class to correct check/uncheck pseudoelement when input at right side of the label
			$form.find( '.wpcf7-checkbox > .wpcf7-list-item > .wpcf7-list-item-label,.wpcf7-radio > .wpcf7-list-item > .wpcf7-list-item-label' )
				.each( function() {
					var $label = jQuery( this );
					if ($label.next( 'input[type="checkbox"],input[type="radio"]' ).length > 0) {
						$label.addClass( 'wpcf7-list-item-right' );
					}
				} );
			$form.find( '.wpcf7-checkbox > .wpcf7-list-item > .wpcf7-list-item-label,.wpcf7-radio > .wpcf7-list-item > .wpcf7-list-item-label,.wpcf7-wpgdprc > .wpcf7-list-item > .wpcf7-list-item-label' )
				.on( 'click', function() {
					var $chk = jQuery( this ).siblings( 'input[type="checkbox"],input[type="radio"]' );
					if ( $chk.length > 0 ) {
						if ( $chk.attr( 'type' ) == 'radio' ) {
							jQuery( this ).parents( '.wpcf7-radio' )
							.find( '.wpcf7-list-item-label' ).removeClass( 'wpcf7-list-item-checked' )
							.find( 'input[type="radio"]' ).each( function(){
								this.checked = false;
							} );
						}
						$chk.get( 0 ).checked = $chk.get( 0 ).checked ? false : true;
						jQuery( this ).toggleClass( 'wpcf7-list-item-checked', $chk.get( 0 ).checked );
						$chk.trigger('change');
					}
				} );

			// Remove 'disabled' from submit button if acceptance checkbox is not checked
			var $submit = $form.find( 'input:submit' );
			if ( $submit.length > 0 ) {
				var submit_reset_timeout = 0;
				// Remove on first run
				$submit.prop( 'disabled', false );
				// Remove on change any field
				$form.on( 'change', 'input,select,textarea', function() {
					setTimeout( function() {
						$submit.prop( 'disabled', false ).removeAttr( 'disabled' );
					}, submit_reset_timeout );
				} );
				// Remove after form reset (after AJAX queries also)
				$form.get(0).addEventListener( 'wpcf7reset', function() {
					setTimeout( function() {
						$submit.prop( 'disabled', false ).removeAttr( 'disabled' );
					}, submit_reset_timeout );
				} );
				// Remove after any AJAX query
				// Commented, because previous handler already fix a problem
				if ( false ) {
					jQuery( document ).on( 'ajaxComplete', function(e) {
						setTimeout( function() {
							$submit.prop( 'disabled', false ).removeAttr( 'disabled' );
						}, submit_reset_timeout );
					} );
				}
			}
		} );
	} );

} )();


}
/*
     FILE ARCHIVED ON 22:03:47 Sep 20, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:15:33 Aug 12, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.474
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.042
  esindex: 0.024
  cdx.remote: 377.862
  LoadShardBlock: 182.729 (3)
  PetaboxLoader3.datanode: 267.995 (5)
  load_resource: 561.804 (2)
  PetaboxLoader3.resolve: 374.713 (2)
*/