/**  
  * This script is set up with the assumption that you're using the Drupal 
  */
$(document).ready(function($) {
	$('#block-cck-blocks-field-terms-of-use, #block-cck-blocks-field-media-resources').wrapAll('<div id="media_resources_js"><div id="scroll_wrap"><div class="media_inner"></div></div></div>');
        
        media_imgs = 0;
        
        
        $('#media_resources_js img').each(function(index) 
        {
            media_imgs = media_imgs + 1;
            if (this.height > this.width)
            {
                $(this).addClass("img_vertical");
            }
            
        });
        
        if (media_imgs > 0)
        {
            $("#block-cck-blocks-field-terms-of-use").show();
            $("#block-cck-blocks-field-media-resources").show();
            
            $("#media_resources_js").before('<p class="centered"><a class="button" id="media_button">Media Resources</a></p>');
            $("#media_resources_js .media_inner").prepend('<h2>Media Resources</h2>');
            $("#media_resources_js .media_inner").prepend('<a id="media_close">Close Window</a>');
            
            $('#media_button').click(function(){
                    $("#media_resources_js").show();
                    $("body").css("overflow", "hidden");
            });
            
            $('#media_resources_js').click(function(){
                    $("#media_resources_js").hide();
                    $("body").css("overflow", "");
            });
            
            $('#media_close').click(function(){
                    $("#media_resources_js").hide();
                    $("body").css("overflow", "");
            });
            
            $('#media_resources_js .media_inner').click(function(event){
                    event.stopPropagation();
            });
            
            $('#media_resources_js .image a').each(function(index) 
            {
                str = $(this).attr('href');
                filename = str.split('\\').pop().split('/').pop();
                $(this).attr('download', filename);
                $('<p class="media_download"><a class="button" href="' + str + '" download="' + filename + '">Download</a></p>').appendTo($(this).parent().parent());
            });
        }
});
