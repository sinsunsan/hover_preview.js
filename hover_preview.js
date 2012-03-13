// $Id: hover_preview.js,v 1.1 2010/02/12 00:25:08 rjbrown99 Exp $

/*
 * Hover preview javascript
 *
 * Inspired by http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *   by Alen Grakalic (http://cssglobe.com)
 *
 */

Drupal.behaviors.HoverPreview = function (context) {
  /* CONFIG */
    
    xOffset = 10;
    yOffset = 30;
    
    // these 2 variable determine popup's distance from the cursor
    // you might want to adjust to get the right result
    
  /* END CONFIG */
  // Quand on hover la balise img de class hover-preview
  $("img.hover-preview").hover(function(e){
    // e est la variable qui stocke l'objet img selectionné par Jquery
    
    // En fait récupère simplement le titre de attribut de la balise html img
    this.t = this.title;
    this.title = "";  
    
    xnOffset = this.width;  
    ynOffset = this.height;
    
    //$this = this;
    
    //positionImage = $this.offset();
    //alert(this.vspace);
    //alert(this.hspace);
    //xImage = positionImage.left;
    //yImage = positionImage.top;
    
    // The width of the small image 
    wImage = this.width;
    // The height of the small image
    hImage = this.height;
    
    //xnOffset = 5;
    //ynOffset = 100;
    
    var c = (this.t != "") ? "<br/>" + this.t : "";
    var preview_link = $('#' + this.id + '-url')[0];
    $("body").append("<p id='hover-preview'><img src='"+ preview_link.href +"' alt='Loading Image Preview' />"+ c +"</p>");                
    $("#hover-preview")
      //.css("top",(e.pageY - xOffset) + "px")
      .css("top",(e.pageY - xnOffset) + "px")
      //.css("left",(e.pageX + yOffset) + "px")
      .css("left",(e.pageX + ynOffset) + "px")
      .fadeIn("fast");            
    },
  function(){
    this.title = this.t;  
    $("#hover-preview").remove();
    }); 
  $("img.hover-preview").mousemove(function(e){
    $("#hover-preview")
      //.css("top",(e.pageY - xOffset) + "px")
      .css("top",(e.pageY - ynOffset) + "px")
      //.css("left",(e.pageX + yOffset) + "px");
      .css("left",(e.pageX + xnOffset) + "px");
  });     
};
