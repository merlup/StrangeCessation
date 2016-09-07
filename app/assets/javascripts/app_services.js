
app.factory('Request', ['railsResourceFactory',function(railsResourceFactory){
 return railsResourceFactory({url: '/requests', name: 'request'});
}]);


app.factory('SliderImage', ['railsResourceFactory',function(railsResourceFactory){
 return railsResourceFactory({url: '/sliderimages', name: 'sliderimage'});
}]);

app.factory('Question', ['railsResourceFactory',function(railsResourceFactory){
 return railsResourceFactory({url: '/questions', name: 'question'});
}]);

app.factory('Choices', ['railsResourceFactory',function(railsResourceFactory){
 return railsResourceFactory({url: '/choices', name: 'choice'});
}]);

app.factory('Users', ['railsResourceFactory',function(railsResourceFactory){
 return railsResourceFactory({url: '/users', name: 'user'});
}]);

app.factory('PriceSheetImage', ['railsResourceFactory',function(railsResourceFactory){
 return railsResourceFactory({url: '/price_sheet_images', name: 'price_sheet_image'});
}]);