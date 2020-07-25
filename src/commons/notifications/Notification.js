import React, {useEffect, useState, memo } from 'react';
import './Notification.css';

function Notification(props) {
  const [ isActive, setIsActive ] = useState(false);

  useEffect(() => {
    setIsActive(true);

    setTimeout(() => setIsActive(false), 3000);
  }, [props.message.get('id', 0)])

  if(isActive) {
    return (
      <div className="notification-wrapper">
        { props.message.get('message', '') }
      </div>
    )
  }

  return null;
}

export default memo(Notification);