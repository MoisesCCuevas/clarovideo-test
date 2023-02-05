import React from "react";
import '../../../theme/components/core/channelInfo.scss';
import { Channel } from '../../modals/modalEPG';

const ChannelInfo : React.FC<Channel> = (props) => {
  const {
    image,
    number
  } = props;
  return (
    <div className="channel-card">
      <span className="text">{number}</span>
      <img alt="" src={image} />
    </div>
  );
}

export default ChannelInfo;
