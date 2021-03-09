import { Component } from 'react';
import axios from '../../axiosConfig';

class CreateArticle extends Component {

    constructor(props) {
        super(props);

        this.state={
            title: "",
            content: "",
            tags: ""
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleChangeContent = this.handleChangeContent.bind(this)
        this.handleChangeTags = this.handleChangeTags.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChangeTitle(e) {
        this.setState({ title: e.currentTarget.value })
    }

    handleChangeContent(e) {
        this.setState({ content: e.currentTarget.value })
    }

    handleChangeTags(e) {
        this.setState({ tags: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        let { title, content, tags } = this.state;

        axios.post("/articles", {
            title: title,
            content: content,
            tags: tags.split(/\s*, \s*/),
        }).then(( ) => {
            this.setState({
                title: "",
                content: "",
                tags: "",
            })

        });
    }

    render() {
        let { title, content, tags } = this.state;

        return (
            <form className="form-group" onSubmit={this.handleSubmit}>
                <h4 className="mb-4">Add an Article</h4>
                <label htmlFor="title">Title</label>
                <input 
                    onChange={this.handleChangeTitle} 
                    className="form-control mb-4" 
                    value={title}
                    type="text" 
                    id="title" 
                    name="title" />
                <label htmlFor="content">Content</label>
                <input 
                    onChange={this.handleChangeContent} 
                    className="form-control mb-4" 
                    value={content}
                    type="text" 
                    id="content" 
                    name="content"/>
                <label htmlFor="tags">Tags</label>
                <input 
                    onChange={this.handleChangeTags} 
                    className="form-control mb-4" 
                    value={tags}
                    type="text" 
                    id="tags" 
                    name="tags"/>
                <button className="btn btn-primary mb-4">Submit</button>
                
            </form>
        );
    }
}

export default CreateArticle;