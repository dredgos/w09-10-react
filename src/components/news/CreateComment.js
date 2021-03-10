import axios from '../../axiosConfig';
import { Component } from 'react';

class CreateComment extends Component {

    constructor(props){
        super(props);

        this.state={
            email: "",
            comment: "",
        }

        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeComment = this.handleChangeComment.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeEmail(e) {
        this.setState({ email: e.currentTarget.value });
    }

    handleChangeComment(e) {
        this.setState({ comment: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault()
        let { email, comment } = this.state;
        let { articleID } = this.props;

        axios.post(`/articles/${articleID}/comments`, {
            email: email,
            comment: comment,
        }).then(( ) => {
            this.setState({
                email: "",
                comment: "",
            });
        });
    }

    render() {

        let {email, comment} = this.state;
        return (
            <form className="form-group" onSubmit={this.handleSubmit}>
                <h4 className="mb-4">Add a Comment</h4>
                <label htmlFor="email">Email</label>
                <input 
                    onChange={this.handleChangeEmail}
                    className="form-control mb-4"
                    value={email}
                    type="email"
                    id="email"
                    name="email"
                />
                <label htmlFor="comment">Comment</label>
                <input 
                    onChange={this.handleChangeComment}
                    className="form-control mb-4"
                    value={comment}
                    type="text"
                    id="comment"
                    name="comment"
                />
                <button className="btn btn-primary mb-4">Submit</button>
                
            </form>
        );
    }
}

export default CreateComment;