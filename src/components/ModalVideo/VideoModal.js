import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

import Img from '../../images/video.svg';

const VideoModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='_zs2769zUS0'
        onClose={() => setOpen(false)}
      />
      <a className='popup-youtube' onClick={() => setOpen(true)}>
        <img src={Img} alt='' />
      </a>
    </React.Fragment>
  );
};

export default VideoModal;
