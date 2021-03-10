import { Component } from 'react';
import axios from '../../axiosConfig';
import { Link } from 'react-router-dom'

class Articles extends Component {

    constructor(props) {
        super(props);

        this.state={
            loaded: false,
            articles: [],
        }

    }

    componentDidMount() {
        axios.get("/articles").then(( {data} ) => {
            this.setState({
                loaded: true,
                articles: data.data,
            });
        });
    }

    render() {
        let { loaded, articles } = this.state;

        return ( !loaded ? <p>loading content......</p> :
            <div className="mt-4 mb-4">
                <h3 className="mb-4">Bloggo Magnifico</h3>
                <ul className="list-group">
                    {articles.map(article => (
                        <li key={article.id} className="list-group-item">
                            <Link to={"/news/" + article.id}>{article.title}</Link>
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}

export default Articles;