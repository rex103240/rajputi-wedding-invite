import React from 'react';
import AudioManager from './AudioManager';
import InvocationHero from './InvocationHero';
import MuhuratCountdown from './MuhuratCountdown';
import EventsTimeline from './EventsTimeline';
import QuickContactRSVP from './QuickContactRSVP';
import RajputiFooter from './RajputiFooter';

const MainInvitationCard = ({ audioRef }) => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      {/* Persistent Audio Control */}
      <AudioManager audioRef={audioRef} />

      {/* Main Sections */}
      <InvocationHero />
      <MuhuratCountdown />
      <EventsTimeline />
      <QuickContactRSVP />
      <RajputiFooter />
    </div>
  );
};

export default MainInvitationCard;
