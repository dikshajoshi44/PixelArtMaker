/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!
family1 = $('#family1');
family2 = $("<div id='family2'><h1>Family2</h1></div>");
bruce = $("<div id='#bruce'><h2>Bruce</h2></div>");
madison = $("<div id='#madison'><h3>Madison</h3></div>");
hunter = $("<div id='#hunter'><h3>Hunter</h3></div>");

family2.insertAfter(family1);
family2.append(bruce);
bruce.append(madison);
bruce.append(hunter);


// <!DOCTYPE html>
// <!--

// This is the HTML document that you'll use jQuery to modify. To take the quiz, click over to app.js!

// -->
// <html lang="en">
// <head>
//     <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
//     <meta charset="UTF-8">
// </head>
// <body>
// 	<div>
// 		<div>
// 			<div id='family1'>
// 				<h1>Family1</h1>
// 				<div id='alex'>
// 					<h2>Alex</h2>
// 					<div id='jane'>
// 						<h3>Jane</h3>
// 					</div>
// 				</div>
// 				<div id='taylor'>
// 					<h2>Taylor</h2>
// 					<div id='bob'>
// 						<h3>Bob</h3>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </body>