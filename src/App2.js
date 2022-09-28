import React from "react";
import Top from "./TopPage";
import { Route, BrowserRouter } from "react-router-dom";
import Param from "./Param";
import Calc from "./Calc"; 

class App extends React.Component {

  render() {
    return (
      <div>

        <div>
          <BrowserRouter>
            <Route exact path='/' component={Top} />
            <Route path='/a/:id' component={Param} />
            <Route exact path='/Calc' component={Calc} />
             
          </BrowserRouter>

          {/* <BrowserRouter>
            <Route exact path='/' component={Top} />
            <Route exact path='/joiningGuide' component={JoiningGuide} />
            <Route exact path='/topSponsors' component={TopSponsor} />
            <Route exact path='/aboutUs' component={AboutUs} />
            <Route path='/ref/:id' component={Param} />
            <Route path='/view/:id' component={Param2} />
          </BrowserRouter> */}
        </div>

      </div>
    );
  }
}

export default App;
