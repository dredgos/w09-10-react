import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
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
import Squares from './liftingstate/Squares'
import SignUp from './liftingstate/SignUp'
import Button from './liftingstate/Button'
import Form from './liftingstate/Form'
// import Max from './liftingstate/Max'
import Articles from './news/Articles'
import Article from './news/Article'
import CreateArticle from './news/CreateArticle'
import ClickedHooks from './hooks/ClickedHooks'
import SquareHooks from './hooks/SquareHooks'
import ToggleTextHooks from './hooks/ToggleTextHooks'
import CounterHooks from './hooks/CounterHooks'
import StepCounterHooks from './hooks/StepCounterHooks'
import CatchMeHooks from './hooks/CatchMeHooks'
import RollCallHooks from './hooks/RollCallHooks'
import PasswordStrengthHooks from './hooks/PasswordStrengthHooks'
import TempConvertorHooks from './hooks/TempConvertorHooks'
import ListHooks from './hooks/ListHooks'
import ColoursHooks from './hooks/ColoursHooks'
import DieHooks from './hooks/DieHooks'


let colours = [
  "#C14412",
  "#EBB31A",
  "#8F5318",
  "#009EAD",
  "#395967",
];



const Stuff = ( {displaySquare} ) => (
  <Router history={ history }>
    <>        
      <HeaderClass>Hello World!</HeaderClass>
      <Switch>
        <Route exact path="/">

          <Paragraph> This is my amazing app! </Paragraph>

        {/* Routes for all the components challenges       */}
        </Route>

          <Route path="/components">
            
            <PeopleClass names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>

            {displaySquare ? <Square colour="blue"/> : null}

            <Clicked /><hr />

            <SquareClass colour="hotpink"/><hr />

          {/* Routes for all the state challenges       */}
          </Route>

          <Route path="/state">

            <ToggleText initial="Hello" alternate="World"/><hr />

            <Counter initial={50} max={100}/><hr />

            <StepCounter step={5} max={100} /><hr />

            <CatchMe jump={100} /><hr />

            <RollCall names={['name1', 'name2', 'name3']} /><hr />

            <Colours colours={colours}/><hr />
            
          </Route>

          {/* Routes practicing the render match params       */}

          <Route path="/squares/:colour" render={( {match} ) => ( <Square colour={match.params.colour} />)} />            

          <Route path="/steps/:max/:step" render={( {match} ) => ( <StepCounter max={+match.params.max} step={+match.params.step} />)} />


          {/* Routes for all the forms challenges       */}
          <Route path="/forms">
            
            <Length /><hr />

            <PasswordStrength /><hr />

            <TempConverter /><hr />

            <List /><hr />

            <Adder /><hr />

            <Transform /><hr />

            <TransformNew transform={Squared}/><hr />

          </Route>


          {/* Routes for all the lifecycle challenges       */}
          <Route path="/lifecycle">
            
            <GodCounter /><hr />

            <TwoCounters /> <hr />
            <Lightbox imgSrc="https://scx2.b-cdn.net/gfx/news/2018/1-park.jpg"/> <hr />

          </Route>


          {/* Routes for all the lifting state/passing data down challenges       */}
          <Route path="/lifting-state">
            <Squares colour="hotpink"/>
            <SignUp minLength={12}/>
            <Button handleUpdate={ (value) => console.log(value) } />
            <Form handleSubmit={ (value) => console.log(value) }/>            
          </Route>


          {/* Routes for all the AJAX challenges       */}
          <Route exact path="/news/create">
            <CreateArticle />
          </Route>

          <Route exact path="/news/:id" render={( {match} ) => ( <Article id={match.params.id}/>)} />
          <Route path="/news">
            <Articles />
          </Route>

          {/* Routes for all the Hooks challenges       */}
          <Route exact path="/hooks">
            <ClickedHooks /> <hr />
            <SquareHooks colour="hotpink"/><hr />
            <ToggleTextHooks initial="Hello" alternate="World"/><hr />
            <CounterHooks initial={50} max={100} /><hr />
            <StepCounterHooks max={100} step={5} /><hr />
            <CatchMeHooks jump={100} /><hr />
            <RollCallHooks names={['Name 1', 'Name 2', 'Name 3', 'Name 4']} /><hr />
            <PasswordStrengthHooks /><hr />
            <TempConvertorHooks /><hr />
            <ListHooks /><hr />
            <ColoursHooks colours={colours}/><hr />
            <DieHooks sides={6} /> <hr />
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