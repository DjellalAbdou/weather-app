import React from 'react';
import userPic from 'assets/images/profile_logo_.jpg';

import classNames from 'classnames';

const ContentHeader = () => {
  const degreeType = classNames({
    'content-header__degree-type': true,
    'content-header__degree-type--selected': true,
  });

  return (
    <div className="content-header">
      <div className="content-header__title"> Welcome Anonymose User</div>
      <div className="content-header__right-elem">
        <div className={degreeType}>°C</div>
        <div className="content-header__degree-type">°F</div>
        <div className="content-header__profile">
          <img src={userPic} alt="profile" className="content-header__profile-pic" />
        </div>
      </div>
    </div>
  )
}

export default ContentHeader;