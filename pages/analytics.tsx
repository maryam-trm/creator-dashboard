import Layout from '../components/Layout';
import MetricsSummary from '../components/MetricsSummary';
import SparklineChart from '../components/SparklineChart';
import { analyticsMock } from '../utils/mockData';

export default function Analytics() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-terracotta-500 mb-6">Analytics</h1>
      <MetricsSummary metrics={analyticsMock.metricsSummary} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {analyticsMock.metrics.map(metric => (
          <div key={metric.name} className="p-4 rounded bg-gray-800">
            <h2 className="text-white font-medium">{metric.name}</h2>
            <SparklineChart data={metric.data} />
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-terracotta-400 font-bold text-xl mb-4">Top 5 Heaters</h2>
        {analyticsMock.topHeaters.map(reel => (
          <div key={reel.id} className="p-2 bg-gray-700 rounded mb-2 flex justify-between">
            <span>{reel.title}</span>
            <span className="text-gray-300">{reel.views} views</span>
          </div>
        ))}
      </div>
    </Layout>
  );
}
