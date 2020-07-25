import React, {useEffect, useState} from 'react';
import './Notification.css';

export default function Notification(props) {
  const [ isActive, setIsActive ] = useState(false);

  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount


  return (
    <div className="notification-wrapper">
      { props.message.length && props.message }
    </div>
  )
}