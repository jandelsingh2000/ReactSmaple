import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

import NewsList from './components/news_list';



//data
import JSON from  './db.json';


class App  extends Component {

    constructor(props){
        super(props);

        this.state={

            news:JSON
        }
       
       
    }

     render () {
         return(
           <div>
                <Header/>
                <NewsList newsData={this.state.news}></NewsList>                     
            </div>
         ) 
       }    
    }





   

    


ReactDOM.render(<App/>, document.getElementById('root'))





/*

const App = () => {
    return(
                  <div>
                      <Header/>
                      <h1> Welcome To React1234</h1>                      
                  </div>
    )
}



*/