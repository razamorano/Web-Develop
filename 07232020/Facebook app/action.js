var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

// var list = ["tiger", "cat", "bear", "bird"]
// // alert (list[0]);
// for (var i = 0; i <= 3; i++) {
// 	console.log (list[i])
// }

