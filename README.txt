$Id

Hover Preview for ImageCache
============================

Requires Drupal 6.x, Imagefield, ImageCache, and Content modules.

This module provides a new series of ImageCache formatters. The overall goal
is to enable the ability to provide a hover state of an image when a mouse
rolls over it. This is similar to functionality you would find on many
shopping websites.

The implementation of this module goes a bit further than just a javascript
hover. The idea is you create multiple imagecache presets, and this will allow
you to hover from any preset to any other preset. 

Here's a step-by-step of how to use it.

1) Create at least two imagecache presets, one for your thumbnail/static/small
image, and one for your larger hover image. You can create as many presets as
you like, but for this example we'll use two.

Preset #1 = Thumbnail = Scale and Crop, size of 80x80
Preset #2 = BigImage = Scale and Crop, size of 200x200

2) After saving your presets, you now have new choices available for the field
output. Let's say I am using views, and I created a view that outputs an
imagefield. I can now open the view, click on that field, and head down to the
'format' section. You have new options available to you, such as:

Hover: Thumbnail TO: BigImage
Hover: BigImage TO: Hover

The item on the left is the static image size to output, and the item on the
right is the hover state. 

3) You can also manually output this at the theme layer with a statement
similar to the following. I am assuming you opened a file such as
node-mynodetype.tpl.php.

<?php
  print theme('hover_preview', $node, 'field_mycckfieldname', 'Thumbnail',
	'BigImage');
?>

In this case, field_mycckfieldname is the name of your CCK field, Thumbnail is
the name of the source imagecache preset, and BigImage is the hover state.


IMPORTANT NOTE: If you have a lot of imagecache presets, you are going to have a huge
number of formatters. This is due to the fact that the module maps ALL presets
to ALL other presets. 
