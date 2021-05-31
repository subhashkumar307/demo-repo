//const Product = (props) => (
//    <>
//        <dl className="mr-5 border">
//            <dt>Name</dt>
//            <dd>{props.Name}</dd>
//            <dt>Price</dt>
//            <dd>{props.Price}</dd>
//            <dt>Preview</dt>
//            <dd>
//                <img width="100" height="100" src={props.Photo} />
//            </dd>
//        </dl>
//    </>
//)

//const MainComponent = () => (
//    <>
//        <h3>Products Catalog</h3>
//        <div class="card-deck">
//            <Product Name={'Nike Casuals'} Price={3100.25} Photo={'../../Images/Nike Casual.png'} />
//            <Product Name={'Shirt'} Price={2500.25} Photo={'../../Images/Shirt.png'} />
//            <Product Name={'JBL Speaker'} Price={3400.25} Photo={'../../Images/JBL Speaker.png'} />
//            <Product Name={'Earpons'} Price={2800.25} Photo={'../../Images/earpons.png'} />
//        </div>
//    </>
//)

//ReactDOM.render(
//    <MainComponent />,
//    document.getElementById("container")
//)

//Second Program

class Product extends React.Component
{
    Name;
    Price;
    Photo;
    render(){
        return(
            <>
                <dl>
                    <dt>Name</dt>
                    <dd>{this.props.Name}</dd>
                    <dt>Price</dt>
                    <dd>{this.props.Price}</dd>
                    <dt>Photo</dt>
                    <dd>
                        <img src={this.props.Photo} width="100" height="100" />
                    </dd>
                </dl>
            </>
        )
    }
}

class MainComponent extends React.Component
{
    render(){
        return(
            <>
                <div className="card-deck">
                <Product Name={'Nike Casuals'} Price={3100.25} Photo={'../../Images/Nike Casual.png'} />
                <Product Name={'Shirt'} Price={2500.25} Photo={'../../Images/Shirt.png'} />
                <Product Name={'JBL Speaker'} Price={3400.25} Photo={'../../Images/JBL Speaker.png'} />
                <Product Name={'Earpons'} Price={2800.25} Photo={'../../Images/earpons.png'} />
                </div>
            </>
        )
    }
}

ReactDOM.render(
    <MainComponent />,
    document.getElementById("container")
)