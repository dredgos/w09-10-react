import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
import TransformNew from './forms/TransformNew'
import Lightbox from './lifecycle/Lightbox'
import Footer from './Footer'
import FourOhFour from '../FourOhFour'
import Squared from './forms/Squared'


let colours = [
  "#C14412",
  "#EBB31A",
  "#8F5318",
  "#009EAD",
  "#395967",
];

const Stuff = ( {displaySquare} ) => (
  <Router>
    <>        
      <HeaderClass>Hello World!</HeaderClass>
      <Switch>
        <Route exact path="/">

          <Paragraph> This is my amazing app! </Paragraph>


        </Route>

          <Route path="/components">
            
            <PeopleClass names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>

            {displaySquare ? <Square colour="blue"/> : null}

            <Clicked /><hr />

            <SquareClass colour="hotpink"/><hr />


          </Route>

          <Route path="/state">

            <ToggleText initial="Hello" alternate="World"/><hr />

            <Counter initial={50} max={100}/><hr />

            <StepCounter step={5} max={100} /><hr />

            <CatchMe jump={100} /><hr />

            <RollCall names={['name1', 'name2', 'name3']} /><hr />

            <Colours colours={colours}/><hr />
            
          </Route>

          <Route path="/squares/:colour" render={( {match} ) => ( <Square colour={match.params.colour} />)} />            



          <Route path="/steps/:max/:step" render={( {match} ) => ( <StepCounter max={+match.params.max} step={+match.params.step} />)} />

          <Route path="/forms">
            
            <Length /><hr />

            <PasswordStrength /><hr />

            <TempConverter /><hr />

            <List /><hr />

            <Adder /><hr />

            <Transform /><hr />

            <TransformNew transform={Squared}/><hr />

          </Route>


          <Route path="/lifecycle">
            
            <GodCounter /><hr />

            <TwoCounters /> <hr />
            <Lightbox imgSrc="https://scx2.b-cdn.net/gfx/news/2018/1-park.jpg"/> <hr />

          </Route>
       

      
      <FourOhFour />
      </Switch>
      <Footer />

    </>
  </Router>
)

Stuff.defaultProps = {
  displaySquare: true
}


export default Stuff;