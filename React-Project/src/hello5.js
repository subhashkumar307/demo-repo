class Product extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            msg : ''
        }
        this.OnCityChange = this.OnCityChange.bind(this);
    }
    OnCityChange(e){
       this.setState({
            msg: `Selected City : ${e.target.value}`
       })
    } 
    render(){
        return(
            <>
                Your City:
                <select onChange={this.OnCityChange}>
                    <option value="Delhi">Delhi</option>
                    <option value="Patna">Patna</option>
                    <option value="Hyd">Hyd</option>
                    <option value="Mumbai">Mumbai</option>
                </select>
                <h1 className="text-center">{this.state.msg}</h1> 
            </>
        )
    }
}

const MainComponent = () =>(
    <>
        <h2>Events Demo</h2>
        <Product />
    </>
)
ReactDOM.render(
    <MainComponent />,
    document.getElementById("container")
)