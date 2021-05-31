class HeaderComponent extends React.Component
{
    render(){
        return (
            <>
                <h1 className="text-center text-white bg-danger mt-3 p-2">Amazon Shooping</h1>
            </>
        )
    }
}

class NavComponent extends React.Component
{
    render(){
        return(
            <>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </>
        )
    }
}

class FooterComponent extends React.Component
{
    render(){
        return(
            <>
                <div className="bg-danger text-white text-center">&copy; copyright 2021</div>
            </>
        )
    }
}
class ProductComponent extends React.Component
{
    Name = "";
    Price = 0;
    Photo = "";
    render(){
        return(
            <>
                <div className="card">
                    <div className="card-header">
                        <h3>{this.props.Name}</h3>
                    </div>
                    <div className="card-body">
                        <img src={this.props.Photo} width="100" height="100"></img>
                        <p>{this.props.Price}</p>
                    </div>
                </div>
            </>
        )
    }
}

class MainComponent extends React.Component
{
    render(){
        return(
            <>
                <HeaderComponent />
                <div className="row mt-3" style={{height: '500px'}}>
                    <div className="col-3">
                        <NavComponent />
                    </div>
                    <div className="col-9">
                        <h2>Shopping Home Page</h2>
                        <p>Special Offers</p>
                        <ProductComponent Name={'Nike Casuals'} Price={3200.25} Photo={'../../Images/Nike Casual.png'} /> 
                    </div>
                </div>
                <FooterComponent />
            </>
        )
    }
}
ReactDOM.render(
    <MainComponent />,
    document.getElementById("container")
)