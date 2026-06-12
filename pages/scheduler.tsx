import Layout from '../components/Layout';
import { schedulerMock } from '../utils/mockData';

export default function Scheduler() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-terracotta-500 mb-6">Scheduler</h1>
      <div className="space-y-4">
        {schedulerMock.map(post => (
          <div key={post.id} className="p-4 bg-gray-800 rounded flex justify-between items-center">
            <div>
              <p className="font-medium">{post.title}</p>
              <p className="text-gray-400 text-sm">{post.platform} | {post.scheduledTime}</p>
            </div>
            <button className="bg-terracotta-500 hover:bg-terracotta-600 px-3 py-1 rounded">Edit</button>
          </div>
        ))}
      </div>
    </Layout>
  );
}
