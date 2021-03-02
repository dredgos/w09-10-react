import Header from './Header'
import Paragraph from './Paragraph'
import Square from './Square'
import People from './People'

const Stuff = ( {displaySquare} ) => (
  <>
    <Header>Hello World!</Header>

    <Paragraph> This is my amazing app! </Paragraph>

    {displaySquare ? <Square colour="blue"/> : null}

    <People names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
  </>
)

Stuff.defaultProps = {
  displaySquare: true
}


export default Stuff;