{	"user" : "A",	"friends" : ["B","C","D"] }
{	"user" : "B",	"friends" : ["A","C","D","E"] }
{	"user" : "C",	"friends" : ["A","B","D","E"] }
{	"user" : "D",	"friends" : ["A","B","C","E"] }
{	"user" : "E",	"friends" : ["B","C","D"] }

// after map

{   key: ["A","B"], value: ["B","C","D"] }
{   key: ["A","C"], value: ["B","C","D"] }
{   key: ["A","D"], value: ["B","C","D"] }

{   key: ["A","B"], value: ["A","C","D","E"] }
{   key: ["B","C"], value: ["A","C","D","E"] }
{   key: ["B","D"], value: ["A","C","D","E"] }
{   key: ["B","E"], value: ["A","C","D","E"] }

{   key: ["A","C"], value: ["A","B","D","E"] }
{   key: ["B","C"], value: ["A","B","D","E"] }
{   key: ["C","D"], value: ["A","B","D","E"] }
{   key: ["C","E"], value: ["A","B","D","E"] }


// ..... //


// after group 
{
	key: {["A","B"]}, value: {["B","C","D"],["A","C","D","E"]}
		
}

// after reduced





// code



