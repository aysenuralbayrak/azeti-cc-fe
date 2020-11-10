import * as React from 'react';
import {ProfileForm} from '../components/forms/ProfileForm';

export class ProfilePage extends React.Component {

  render() {
    return (
      <div className="main">
        <ProfileForm/>
      </div>
    );
  }
}