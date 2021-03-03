import { Component } from 'react'

class HeaderClass extends Component {
    
    
    render() {
        let { children } = this.props;
        
        return(
            <header>
                <h1 className="jumbotron">{children}</h1>
            </header>
        );
    }

    
}

export default HeaderClass;