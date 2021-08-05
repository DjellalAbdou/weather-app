import React from 'react';
import PropTypes from 'prop-types';

import userPic from 'assets/images/profile_logo_.jpg';

import classNames from 'classnames';

const ContentHeader = ({ selectedDegreeType, saveSelectedDegreeType }) => {

  const CdegreeType = classNames({
    'content-header__degree-type': true,
    'content-header__degree-type--selected': selectedDegreeType === 'C',
  });

  const FdegreeType = classNames({
    'content-header__degree-type': true,
    'content-header__degree-type--selected': selectedDegreeType === 'F',
  })

  const handleDegreeClick = (type) => () => {
    saveSelectedDegreeType && saveSelectedDegreeType(type);
  }

  return (
    <div className="content-header">
      <div className="content-header__title"> Welcome Anonymose User</div>
      <div className="content-header__right-elem">
        <div className={CdegreeType} onClick={handleDegreeClick('C')}>°C</div>
        <div className={FdegreeType} onClick={handleDegreeClick('F')}>°F</div>
        <div className="content-header__profile">
          <img src={userPic} alt="profile" className="content-header__profile-pic" />
        </div>
      </div>
    </div>
  )
}

ContentHeader.propTypes = {
  selectedDegreeType: PropTypes.string.isRequired,
  saveSelectedDegreeType: PropTypes.func.isRequired
}

export default ContentHeader;