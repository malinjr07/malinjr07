import React, { FC, ReactElement, useState } from 'react';
import ModalVideo from 'react-modal-video';

import Img from '../../images/video.svg';

interface VideoModalProps {}

const VideoModal: FC<VideoModalProps> = (): ReactElement => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel='youtube'
        isOpen={isOpen}
        videoId='_zs2769zUS0'
        onClose={() => setOpen(false)}
      />
      <a className='popup-youtube' onClick={() => setOpen(true)}>
        <img src={Img as unknown as string} alt='' />
      </a>
    </React.Fragment>
  );
};

export default VideoModal;

