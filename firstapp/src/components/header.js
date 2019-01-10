import React , {Component} from'react';


class Header extends Component {
    constructor(props)
    {
         super(props);

        this.state={
            title:'React App',
            search:'Enter your text'
        }

    }

    inputChange(event){
       // console.log(event.target.value);
        this.setState({'search':event.target.value});
        this.props.newsSearch(event.target.value);
    }
    render(){

        const style={
             header:{
                  backgroundColor:'tomato'
             },
             logo:{
                 textAlign:'center',
                 color:'fff',
                 fonSize:'30px'

             }

        }
        return(
              
            <header >
             <div className="logo" onClick={()=>{console.log("hii")}}> {this.state.title}</div>
             <center><input onChange={this.inputChange.bind(this)} />
             <p>{this.state.search}</p> </center>

            </header>
              
            )
   }

}

 export default Header;
 
 
 /*
const Header = () => {
     return(

       <div> Header</div>
     )

 }

 */