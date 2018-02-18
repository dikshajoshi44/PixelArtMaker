/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList ,fchild, flink ;
navList= $(".nav-list");
fchild = navList.children.first();
flink = fchild.find('a');
flink.attr("href", "#1");