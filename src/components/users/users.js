import React, {Component} from 'react'
import axios from '../../axios'

export default class users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: [],
            searchWord:''
        };
    }
    getUsersData() {
        axios
            .get('',{})
            .then(res => {
                console.log(res.data)
                const data = res.data.value

                console.log(res.data.value.length)
                        
                const users = data.map(u =>  
                    
                    <div className="row">
                      
                         <div className="col-sm-4">
                             <div className="card">
                                     <div className="card-body">
                                      <hr/>
                                      <p className="card-text"> {u.datePublished} </p>
                                     <img className="card-img-top" width = "200" height = "150" src={u.image.thumbnail.contentUrl} alt={u.description}/>
                                      <p className="card-text">{u.description}</p>
                                            
                                        <a href={u.url}>Read More on</a>
                                    </div>
                             </div>
                        </div>
                    
                    </div>
                   

   
                    )

                    this.setState({
                        users
                    })

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }

    searchTaskByVal = (event) => {
        this.setState({
            searchWord: event.target.value
     
            })  
            this.onhandler();
    }

onhandler() {
    axios
    .get('',{})
    .then(res => {
            const found = res.data.value[0].find(element => element == this.state.searchWord);
                console.log(found);
    })

}
    render() {

        return (


            <div> 
                 <h3 className="card-title"> Live News Application </h3>
                 <div className="col-8 col-md-9 col-lg-9 col-sm-6">
                    <div className="form-group">
                        <label htmlFor="search">Search</label>
                         <input type="text" className="form-control" placeholder="Search news" onChange={this.searchTaskByVal} />
                    </div>
                </div>
                {this.state.users}
            </div>
            
        )
    }
}
