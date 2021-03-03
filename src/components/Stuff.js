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
import Colours from './state/Colours'
import Length from './forms/Length'
import PasswordStrength from './forms/PasswordStrength'
import TempConverter from './forms/TempConvertor'
import List from './forms/List'

let colours = [
  "#C14412",
  "#EBB31A",
  "#8F5318",
  "#009EAD",
  "#395967",
];

const Stuff = ( {displaySquare} ) => (
  <>
    <HeaderClass>Hello World!</HeaderClass>

    <Paragraph> This is my amazing app! </Paragraph>

    {displaySquare ? <Square colour="blue"/> : null}

    <PeopleClass names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>

    <Clicked /><hr></hr>

    <SquareClass colour="hotpink"/><hr></hr>

    <ToggleText initial="Hello" alternate="World"/><hr></hr>

    <Counter initial={50} max={100}/><hr></hr>

    <StepCounter step={5} max={100} /><hr></hr>

    <CatchMe jump={100} /><hr></hr>

    <RollCall names={['name1', 'name2', 'name3']} /><hr></hr>

    <Colours colours={colours}/><hr></hr>

    <Length /><hr></hr>

    <PasswordStrength /><hr></hr>

    <TempConverter /><hr></hr>

    <List /><hr></hr>
  </>
)

Stuff.defaultProps = {
  displaySquare: true
}


export default Stuff;