'use client';

import React, { FC, useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

const VideoModal: FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel='youtube'
        isOpen={isOpen}
        videoId='_zs2769zUS0'
        onClose={() => setOpen(false)}
      />
      <a className='popup-youtube' onClick={() => setOpen(true)}>
        <img src={'/images/video.svg'} alt='' />
      </a>
    </React.Fragment>
  );
};

export default VideoModal;
