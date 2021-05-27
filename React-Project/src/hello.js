//var username = prompt("Enter User Name");
//var element = <h2>Hello! {username} Welcome to React</h2>;

//ReactDom.render(element, document.getElementById("container"));

// First Program

//var product = {
  //  Name: "JBL Speaker",
    //Price: 4500.00,
    //Photo: "../../Images/JBL Speaker.png"
//}
//var imageStyle = "img-fluid";
//var element = (
  //  <>
    //    <dl>
      //      <dt>Name</dt>
        //    <dd>{product.Name}</dd>
          //  <dt>Price</dt>
           // <dd>{product.Price}</dd>
            //<dt>Preview</dt>
            //<dd>
              //  <img className={imageStyle} width="100" height="100" src={product.Photo} />
            //</dd>
        //</dl>

    //</>
//)

//ReactDOM.render(element, document.getElementById("container"));

//Second Program

//const pic = "../../Images/JBL Speaker.png";
//const element = React.createElement("div",
  //  {
    //    className : "container",
    //    align: "center"  
    //},
    //"Welcome to React.js",
    //React.createElement("h2", {
      //  align: "center"
    //},
    //"Introduction to JSX"
    //),
    //React.createElement("img", {
     //   src: "../../Images/JBL Speaker.png",
     //   width: 300,
     //   height: 200,
     //   alt: "Speaker"
    //})
//);

//ReactDOM.render(
//    element,
//    document.getElementById("container")
//);

//Third Program

//var categories = ["Electronics", "Footwear", "Fashion"];

//var element = (
//    <>
 //       <h3>Categories</h3>
 //       <ul>
  //          {
               // categories.map(function(category){  // This is also use 
                //    return <li>{category}</li>
                //})
   //             categories.map(category=>
   //                 <li key={category}>{category}</li>
   //                 )
   //         }
    //    </ul>

    //</>
//)

//ReactDOM.render(
//    element,
//    document.getElementById("container")
//);

//Fourth Program

var data = [
    {Name: "JBL Speaker", Price: 4500.55, Photo: "../../Images/JBL Speaker.png"},
    {Name: "Shirt", Price: 3500.44, Photo: "../../Images/Shirt.png"}
]

var element = (
    <>
        <div className="card-deck">
            {
                data.map(product =>
                    <div className="card" key={product.Name}>
                    <div class="card-header">
                          <h2>{product.Name}</h2>
                    </div>
                    <div class="card-body">
                          <img src={product.Photo} width="100" height="100" />
                          <p>{product.Price}</p>
                    </div>
                  </div>
                )
            }

        </div>
    </>
)

ReactDOM.render(
        element,
        document.getElementById("container")
);