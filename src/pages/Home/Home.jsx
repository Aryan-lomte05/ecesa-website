import React from 'react';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import GroupPhoto from '../../components/GroupPhoto/GroupPhoto';

export default function Home() {
  return (
    <div className="main-content">
      <Hero />
      <Features />
      <GroupPhoto />
    </div>
  );
}
