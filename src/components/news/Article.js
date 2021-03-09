import { Component } from 'react';
import axios from '../../axiosConfig';
import Comments from './Comments';


class Article extends Component {
    constructor(props) {
        super(props);

        this.state={
            loaded: false,
            article: [],
        }

    }


    componentDidMount() {
        let { id } = this.props;
        axios.get(`/articles/${id}`).then(( {data} ) => {
            this.setState({
                loaded: true,
                article: data.data,
            })
        })
    }

 

    render() {
        
        let { loaded, article } = this.state;

        return ( !loaded ? <p>loading content......</p> :
            <>
                <div className="mt-4 mb-4">
                    <h4 className="mb-4">{article.title}</h4>
                    <p className="mb-4">{article.content}</p>
                    <h5>Tags</h5>
                    <ul>
                    {article.tags.map((tag, index) => (
                        <li key={index}>
                            {tag}
                        </li>
                    ))} 
                    </ul>
                </div>
                <div>   
                    <Comments articleID={article.id} />
                </div>
            </>
        );
    }
}

Article.propTypes = {

};

export default Article;