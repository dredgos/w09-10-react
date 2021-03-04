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
import GodCounter from './lifecycle/GodCounter'
import TwoCounters from './lifecycle/TwoCounters'
import Adder from './forms/Adder'
import Transform from './forms/Transform'

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

    <Clicked /><hr />

    <SquareClass colour="hotpink"/><hr />

    <ToggleText initial="Hello" alternate="World"/><hr />

    <Counter initial={50} max={100}/><hr />

    <StepCounter step={5} max={100} /><hr />

    <CatchMe jump={100} /><hr />

    <RollCall names={['name1', 'name2', 'name3']} /><hr />

    <Colours colours={colours}/><hr />

    <Length /><hr />

    <PasswordStrength /><hr />

    <TempConverter /><hr />

    <List /><hr />

    <Adder /><hr />

    <Transform /><hr />

    <GodCounter /><hr />

    <TwoCounters /> <hr />
  </>
)

Stuff.defaultProps = {
  displaySquare: true
}


export default Stuff;