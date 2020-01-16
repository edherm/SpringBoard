import React from "react";
import { Link } from "react-router-dom";

class FooterLinks extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <ul>
          <li><a target="_blank" href="https://www.linkedin.com/in/ed-herman/"><i class="fab fa-linkedin"></i></a></li>
          <li><a target="_blank" href="https://angel.co/ed-herman?public_profile=1"><i class="fab fa-angellist"></i></a></li>
          <li><a target="_blank" href="https://github.com/edherm"><i class="fab fa-github"></i></a></li>
          <li><a target="_blank" href="https://edherm.github.io/"><i class="far fa-id-card"></i></a></li>
        </ul>
      </div>
    )
  }
}


export default FooterLinks;