<?php

/*
Plugin Name: Prev-Next Keyboard Navigation
Plugin URI: http://www.bbqiguana.com/2009/10/keyboard-navigation-plugin-for-wordpress/
Description: Prev-Next navigation of posts with the J/K keys
Author: Randall Hunt
Version: 0.6
Author URI: http://www.bbqiguana.com/
*/


$keynavCount = 0;

if (!is_admin()) {
	$pnkeynavdir = trailingslashit(get_bloginfo('wpurl')).PLUGINDIR.'/'.dirname(plugin_basename(__FILE__));

	wp_enqueue_script("jquery");
	wp_enqueue_script("pnkeynav", $pnkeynavdir.'/pnkeynav.js', array('jquery'));
}

?>
