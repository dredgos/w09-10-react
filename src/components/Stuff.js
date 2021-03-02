import HeaderClass from './HeaderClass'
import Paragraph from './Paragraph'
import Square from './Square'
import PeopleClass from './PeopleClass'
import Clicked from './Clicked'
import SquareClass from './SquareClass'
import ToggleText from './ToggleText'
import Counter from './Counter'
import StepCounter from './StepCounter'
import CatchMe from './CatchMe'
import RollCall from './RollCall'

const Stuff = ( {displaySquare} ) => (
  <>
    <HeaderClass>Hello World!</HeaderClass>

    <Paragraph> This is my amazing app! </Paragraph>

    {displaySquare ? <Square colour="blue"/> : null}

    <PeopleClass names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>

    <Clicked />

    <SquareClass colour="hotpink"/>

    <ToggleText initial="Hello" alternate="World"/>

    <Counter initial={50} max={100}/>

    <StepCounter step={5} max={100} />

    <CatchMe jump={100} />

    {/* <RollCall names={} /> */}
  </>
)

Stuff.defaultProps = {
  displaySquare: true
}


export default Stuff;