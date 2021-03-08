let squareStyle = {
    height: 200,
    width: 200,
    margin: '1rem'
}

const SquareState = ({selected, handleClick, colour}) => (
       
    <div 
        style={{...squareStyle, backgroundColor: selected ? colour : 'green'}} 
        onClick={handleClick}>
    </div>
)


export default SquareState;
