import React, {Component} from 'react';

class Contact extends Component {

  newRedirect() {
   window.location = '/go_home_roger';
   alert("Thank YOU. Please Come Back tomorrow for more 'Challenge The DOM!!'");
   }

  render() {
    return (
      <div>
        <h3> Contact ME page !!! </h3>
        <form>
          <input className="contact_me" placeholder="Email"/>
          <br/>
          <input className="contact_me" placeholder="Phone Number"/>
          <br/>
          <input className="contact_me" placeholder="Job Title"/>
          <br/>
          <input className="contact_me" placeholder="Donation"/>
          <br/>
          <input className="contact_me" placeholder="Type Email"/>
        </form>

        <br/>
        <input id="enter" type="submit" value="Submit" onClick={this.newRedirect}/>
      </div>
    );
  }
}


export default Contact;
