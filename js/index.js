var ourRequest = new XMLHttpRequest();

ourRequest.open("GET","https://learnwebcode.github.io/json-example/pets-data.json");
ourRequest.onload = function(){
	if (ourRequest.status>=200 && ourRequest.status<400) {
		var ourData = JSON.parse(ourRequest.responseText);	
  		renderData(ourData);
	}
	else console.log("Server returned Error");

};

ourRequest.onerror= function(){
	console.log("Connection Error");
};

ourRequest.send();

Handlebars.registerHelper("calAge",function(birthyear){
	var age=new Date().getFullYear()-birthyear;
	if (age>0) {
		return age + " Years old";
	}
	else {
		return " Just born.";
	}
});

function renderData(data){
	var rawTemplate = $("#petsTemplate").html();
	var compiledTemplate = Handlebars.compile(rawTemplate);
	var ourGeneratedHTML = compiledTemplate(data);
	$("#animal-info").html(ourGeneratedHTML);
};