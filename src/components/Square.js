const Square = ( {colour} ) => {
    
    const squareStyle = {
        backgroundColor: colour,
        height: '200px',
        width: '200px',
        margin: '1rem',
    }

   return (<div style={squareStyle}></div>)
}

Square.defaultProps = {
    colour: "red"
}

export default Square;