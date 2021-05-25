var username = prompt("Enter User Name");
var element = <h2>Hello! {username} Welcome to React</h2>;


ReactDom.render(element, document.getElementById("container"));