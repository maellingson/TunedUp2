import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LiveFeed from "./pages/LiveFeed";
import Profile from "./pages/Profile";
import OtherUserProfile from "./pages/OtherUserProfile";
import ProfileEdit from "./pages/ProfileEdit";
import Nav from "./components/Nav";
import API from "./utils/API";

class App extends Component {
  state = {
    googleuser: {},
    otheruserid: "",
    profile: {
      username: "Alicia Keys",
      location: "New York, NY",
      instruments: "Vocals, Piano",
      genres: "R&B, Jazz, Hip-Hop, Soul",
      bio: "Alicia Augello Cook was born on January 25, 1981, in the Hell's Kitchen neighborhood of New York City’s Manhattan borough. She is the only child of Teresa (Augello), a paralegal and part-time actress, and one of three children of Craig Cook, a flight attendant.Key's father is African American and her mother is of Sicilian (Agrigento and Sciacca) and either Scottish or Irish descent. Named after her Puerto Rican godmother, Keys expressed that she was comfortable with her multiracial heritage because she felt she was able to relate to different cultures.",

      email: "aliciakeys@email.com",
      phone: "xxx-xxx-xxxx",
      image: "https://images.unsplash.com/photo-1517430529647-90cda5b40093?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c0c3c22799cb1acffee5bc833906df8&auto=format&fit=crop&w=700&q=60",

      listings: [],

    }
  }

  componentDidMount() {
    // API.getGoogleUser()
    //   .then(res =>
    //     //console.log('API RES',res.data)
    //     //this.setState({googleuser: res.data})
    //     //console.log(res.data)
    //     this.setState({ googleuser: res.data })
    //   )
    //   .catch(err => console.log(err));
    //this.setState({_id: req.user[0]._id})
    this.loadProfile()
  }

  loadProfile = () => {
    API.getGoogleUser()
      .then(res =>
        //console.log('API RES',res.data)
        //this.setState({googleuser: res.data})
        //console.log(res.data)
        this.setState({ googleuser: res.data })
      )
      .catch(err => console.log(err));
  };

  loadOtherUserId = (otheruserid) => {
    this.setState({otheruserid: otheruserid})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* <Route path="/abc" render={()=><TestWidget num="2" someProp={100}/>}/> */}
            <Route exact path="/" render={(props) => <LiveFeed {...props} googleuser={this.state.googleuser} />} />
            {/* //googleuser={this.state.googleuser} component={LiveFeed} /> */}
            <Route exact path="/livefeed" render={(props) => <LiveFeed {...props} loadOtherUserId={this.loadOtherUserId} googleuser={this.state.googleuser} />} />
            <Route exact path="/myprofile" render={(props) => <Profile {...props} profile={this.state.googleuser} googleuser={this.state.googleuser} />} />
            <Route exact path="/myprofile/edit" render={(props) => <ProfileEdit {...props} updateProfile={this.loadProfile} googleuser={this.state.googleuser} />} />
            <Route path="/users/:otheruserid" render={(props) => <OtherUserProfile {...props} googleuser={this.state.googleuser} otheruserid={this.state.otheruserid}/>} />

            {/* <Route exact path="/myprofile/edit" component={ProfileEdit} />
            <Route exact path="/myprofile/edit" render={(props) => (<ProfileEdit {...props} data={googleuser= this.state.googleuser})}

            <Route path='/page' component={Page} />
            const extraProps = {color: 'red' }
            <Route path='/page' render={(props) => (
              <Page {...props} data={extraProps} />
            )} /> */}

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
