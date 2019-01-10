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

            news:JSON,
            filterd:JSON
        }
       
       
    }

     filterdNews(keywords)
      {
        console.log(keywords);
        let filterd=this.state.news.filter((item)=>{
            return item.title.toLowerCase().indexOf(keywords.toLowerCase())>-1
        })
        this.setState({filterd:filterd});
      }

     render () {
         return(
           <div>
                <Header newsSearch={(data)=>{this.filterdNews(data)}}/>
                <NewsList newsData={this.state.filterd}></NewsList>                     
            </div>
         ) 
       }    
    }    


ReactDOM.render(<App/>, document.getElementById('root'));





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