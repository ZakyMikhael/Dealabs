var express = require ('express'); 
      var path = require ('path')
      var request = require ('request'); 
      var cheerio = require ('cheerio'); 
      var fs = require ('fs'); 
      var app = express(); 

      var url = "https://www.dealabs.com/nouveaux"; 
      request (url, function (err, resp, html){
  if (err){
    console.log(err); 
  }else{
    //var html = cheerio.load('<div class="entry">...</div>');
    var $ = cheerio.load(html);
      //console.log (html);
       //console.log(html);

     $('.thread-title > a').each(function(){
      var link = $ (this); 
      var text = link.text(); 
      var href = link.attr('href');
      
      console.log(text + " -> " + href);
}); 
     $('.userHtml > div').each(function(){
      var link = $ (this); 
      var text = link.text(); 
      console.log(text + " -> ");

		
	}); 

	/*$('.overflow--wrap-off > .thread-price text--b vAlign--all-tt cept-tp size--all-l size--fromW3-xl').each(function(){
      var link = $ (this); 
      var text = link.text(); 
      console.log(text + " -> ");

		
	}); */
     $('.thread-price text--b vAlign--all-tt cept-tp size--all-l size--fromW3-xl > a').each(function(){
      var link = $ (this); 
      var text = link.text(); 
      console.log(text + " -> ");



		}); 


      }
});