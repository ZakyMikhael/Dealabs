var request = require("request");

 var cheerio = require("cheerio");




url = "https://www.dealabs.com/nouveaux";

	request(url, function(err, response, html){

		if (!err){

			var $ = cheerio.load(html);

			var allItems = $(".threadGrid-title").children();

			var items = []; 

			var result = allItems.find("href");

			//allItems.each(function(index){

				//items.push ($(".threadGrid-title").children().find("a.class").text());

			//});

			items.push(result).text;




			console.log(items);

		}

		

	});
