=== Prev-Next Keyboard Navigation ===
Contributors: bbqiguana 
Donate link: http://www.bbqiguana.com/donate/
Tags: keyboard, navigation, nav, keys
Requires at least: 2.1
Tested up to: 3.3.1
Stable tag: 0.6

Allows visitor to scoll through the posts on a page with the J/K keys.

== Description ==
Prev-Next Keyboard Navigation adds javascript to allow moving through postings on index and archive pages using the J/K keys to skip to the next or previous post.

A "post" is defined as any DIV with the class "post".

= Features =
* Scrolls the current post to the top
* View next post with "J", previous post with "K"
* After the last post on a page, continues to the next page

= Planned features: =
* Allow admins to define custom classnames to match for posts

== Installation ==
1. Download the Keyboard Navigation zip file.
2. Extract the files to your WordPress plugins directory.
3. Activate the plugin via the WordPress Plugins tab.

== Frequently Asked Questions ==
none

== Screenshots ==
none

== Changelog ==

= 0.6 = 
* Fixed the algorythm to account for fractional scrollTop property in Firefox

= 0.5 =
* Adds a listener to page scroll event, to update the position for keyboard navigation

= 0.4 =
* Continues to next page when you pass the last (or first) post on the current page

= 0.3 =
* Moved javascript to separate file
* Added jQuery
* Fixed scrolltop
* Tested on Windows Vista in Firefox 3, Internet Explorer 7, Google Chrome 3, Safari 4

= 0.2 =
* Don't add key navigation on single posts
* Don't function on keypress inside of textarea or input elements

= 0.1 =
* Initial version.
