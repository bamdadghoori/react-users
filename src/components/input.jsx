import {Component} from "react"
class Input extends Component {
    render() { 
        return <>
        
   <div className="form-group">
   <label htmlFor="username" className="text-info">{this.props.label}</label><br/>
                                <input type="text" onChange={this.props.onChange} name={this.props.name} id={this.props.id} className="form-control" value={this.props.value} />
   </div>

        </>;
    }
}
 
export default Input;