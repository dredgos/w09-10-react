import HeaderClass from './state/HeaderClass'
import Paragraph from './Paragraph'
import Square from './Square'
import PeopleClass from './state/PeopleClass'
import Clicked from './state/Clicked'
import SquareClass from './state/SquareClass'
import ToggleText from './state/ToggleText'
import Counter from './state/Counter'
import StepCounter from './state/StepCounter'
import CatchMe from './state/CatchMe'
import RollCall from './state/RollCall'

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

    <RollCall names={['name1', 'name2', 'name3']} />
  </>
)

Stuff.defaultProps = {
  displaySquare: true
}


export default Stuff;