//First Program

// function FormDemo(){
//     const [productName, setName] = React.useState("");
//     const [productPrice, setPrice] = React.useState("");

//     const SubmitClick = () => {
//         document.write(`Name=${productName} <br> Price=${productPrice}`);
//     }

//     return(
//         <form onSubmit={SubmitClick}>
//             <h2>Register Product</h2>
//             <dl>
//                 <dt>Product Name</dt>
//                 <dd>
//                     <input onChange={e=> setName(e.target.value)} type="text" name="productName" value={productName} />
//                 </dd>
//                 <dt>Product Price</dt>
//                 <dd>
//                     <input onChange={e=> setPrice(e.target.value)} type="text" name="productPrice" value={productPrice} />
//                 </dd>
//             </dl>
//             <button>Register</button>
//         </form>
//     )
// }


//Second Program

class FormDemo extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            product : {
                ProductId: '',
                Name: '',
                Price: ''
            }
        }
        this.UpdateForm = this.UpdateForm.bind(this);
    }
    UpdateForm(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            product: {
                ...this.state.product,
                [name]: value
            }
        })
    }

    render(){
        return(
            <div>
                <dl>
                    <dt>Product Id</dt>
                    <dd>
                        <input type="text" onChange={this.UpdateForm} name="ProductId" value={this.state.product.ProductId} />
                    </dd>
                    <dt>Name</dt>
                    <dd>
                        <input type="text" onChange={this.UpdateForm} name="Name" value={this.state.product.Name} />
                    </dd>
                    <dt>Price</dt>
                    <dd>
                        <input type="text" onChange={this.UpdateForm} name="Price" value={this.state.product.Price} />
                    </dd>
                </dl>
                <h3>Product Details</h3>
                <dl>
                    <dt>Product Id</dt>
                    <dd>{this.state.product.ProductId}</dd>
                    <dt>Name</dt>
                    <dd>{this.state.product.Name}</dd>
                    <dt>Price</dt>
                    <dd>{this.state.product.Price}</dd>
                </dl>
            </div>
        )
    }
}

//First Program and Second Program is same maincompent
class MainComponent extends React.Component
{
    render(){
        return(
            <>
                <FormDemo />
            </>
        )
    }
}
ReactDOM.render(
    <MainComponent />,
    document.getElementById("container")
)