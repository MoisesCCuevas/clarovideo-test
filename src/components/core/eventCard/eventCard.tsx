import React from 'react';
import { Event } from '../../modals/modalEPG';
import { formatTime } from '../../../utils/utils';
import '../../../theme/components/core/eventCard.scss';

const EventCard : React.FC<Event> = (props) => {
  const {
    name,
    date_begin = 0,
    date_end = 0,
    onMouseEnter,
    selected
  } = props;

  return (
    <div className={`event-card ${selected && 'event-card-selected'}`} onMouseEnter={onMouseEnter}>
      <h4>{name}</h4>
      <div className='event-horary'>
        <span>{`${formatTime(date_begin)} - ${formatTime(date_end)}`}</span>
      </div>
      <div className='icon-button'>
        <i className='fas fa-ellipsis-h'/>
      </div>
    </div>
  );
};

export default EventCard;
