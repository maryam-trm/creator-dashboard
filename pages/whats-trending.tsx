import Layout from '../components/Layout';
import TrendingItem from '../components/TrendingItem';
import { trendingMock } from '../utils/mockData';

export default function WhatsTrending() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-terracotta-500 mb-6">What's Trending</h1>
      <div className="space-y-4">
        {trendingMock.map(item => (
          <TrendingItem key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
}
