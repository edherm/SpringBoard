import React from "react";
import { connect } from "react-redux";

class FooterLinks extends React.Component {
  constructor(props) {
    super(props)
  }

  

  render () {
    const klass = this.props.currentUser ? "user" : ""
    return (
      <footer className={klass}>
        <ul className="footer-links-ul">
          <li className="footer-links-li"><a target="_blank" href="https://www.linkedin.com/in/ed-herman/"><i className="fab fa-linkedin"></i></a></li>
          <li className="footer-links-li"><a target="_blank" href="https://angel.co/ed-herman?public_profile=1"><i className="fab fa-angellist"></i></a></li>
          <li className="footer-links-li"><a target="_blank" href="https://github.com/edherm"><i className="fab fa-github"></i></a></li>
          <li className="footer-links-li">© 2019 by Ed Herman:<a target="_blank" href="https://edherm.github.io/"><i className="far fa-id-card"></i></a></li>
        </ul>
      </footer>
    )
  }
}

const msp = state => ({
  currentUser: !!state.session.currentUser
})




export default connect(msp, null)(FooterLinks);