import { Component } from 'react';
import axios from '../../axiosConfig';

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
            })
        })
    }

    render() {
        let { loaded, articles } = this.state;

        return ( !loaded ? <p>loading content......</p> :
            <div className="mt-4 mb-4">
                <h3 className="mb-4">Bloggo Magnifico</h3>
                <ul className="list-group">
                    {articles.map(article => (
                        <li key={article.id} className="list-group-item">
                            <a href={article.id}>{article.title}</a>
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}

export default Articles;