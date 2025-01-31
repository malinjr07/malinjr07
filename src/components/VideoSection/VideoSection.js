import React from 'react';
import VideoModal from '../ModalVideo/VideoModal';

const VideoSection = () => {
    return (
        <section className="video-section">
            <h2 className="d-none">hiddin</h2>
            <div className="video-wrap">
                <div className="popup-video">
                    <div className="ball">
                        <VideoModal />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;