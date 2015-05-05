//http://repl.it/languages/JavaScript

var sourceArray = 
[
    {	"user" : "A",	"friends" : ["B","C","D"] },
    {	"user" : "B",	"friends" : ["A","C","D","E"] }
];
var reformattedArray = sourceArray.map(function(obj){ 
   var rObj = {};
   console.log('working on obj:');
   console.log(obj);
   //console.log('obj.user:');
   //console.log(obj.user);
   //var currentId = '';
   
   //var userName = obj.user;
   obj.friends.forEach(function(name) {
       //console.log('obj.name:');
	   //console.log(userName + name); 
	   //currentId = userName + name;
	   //console.log(obj.user);
	   //console.log(name);
	   var myKey = [ name, obj.user ].sort();
	   //console.log(myKey);
	   //console.log(obj.friends);
	   rObj["key"] = myKey;
	   rObj["values"] = obj.friends;
	   
	   console.log('current --->');
	   console.log(rObj);
	   
  });
   
   //rObj[obj.user] = currentId;
   console.log('return rObj:');
   console.log(rObj);
   
   rr = {   key: ["A","B"], value: ["B","C","D"] },
        {   key: ["A","C"], value: ["B","C","D"] },
        {   key: ["A","D"], value: ["B","C","D"] };

   return rObj;
});
//console.log(sourceArray);
console.log(reformattedArray);