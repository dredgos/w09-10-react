import { Component } from 'react';
import axios from '../../axiosConfig';

class Comments extends Component {

    constructor(props) {
        super(props);

        this.state={
            loaded: false,
            comments: [],
        }

    }

    componentDidMount() {
        let { articleID } = this.props;

        axios.get(`/articles/${articleID}/comments`).then(( { data }) => {
            this.setState({
                loaded: true, 
                comments: data.data,
            })
        })
    }

    render() {
        
        let { loaded, comments } = this.state;
        

        return ( !loaded ? <p>loading content......</p> :
            <div>
                <h5>Comments</h5>
                <ul className="list-group mt-4 mb-4">
                    {comments.map(comment => (                       
                        <li key={comment.id} className="list-group-item">
                            <h5 className="list-group-item-heading">{comment.comment}</h5> 
                            <p className="list-grou-item-text">{comment.email}</p>
                        </li>                            
                        
                    ))}

                </ul>
            </div>
        );
    }
}

export default Comments;