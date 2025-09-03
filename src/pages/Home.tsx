import React from 'react';
import Hero from '../components/home/Hero';
import NewsSlider from '../components/home/NewsSlider';
import MatchResults from '../components/home/MatchResults';
import UpcomingMatches from '../components/home/UpcomingMatches';
import QuickStats from '../components/home/QuickStats';
import SocialFeed from '../components/home/SocialFeed';

const Home = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickStats />
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <NewsSlider />
            <MatchResults />
          </div>
          <div className="space-y-8">
            <UpcomingMatches />
            <SocialFeed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;