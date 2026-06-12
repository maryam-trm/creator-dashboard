import Layout from '../components/Layout';
import HookCard from '../components/HookCard';
import { hooksMock } from '../utils/mockData';

export default function HookVault() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-terracotta-500 mb-6">Hook Vault</h1>
      <div className="flex gap-4 mb-4">
        <input placeholder="Search niche" className="p-2 rounded bg-gray-800" />
        <input placeholder="Search type" className="p-2 rounded bg-gray-800" />
        <input placeholder="Min views" type="number" className="p-2 rounded bg-gray-800" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hooksMock.map(hook => (
          <HookCard key={hook.id} hook={hook} />
        ))}
      </div>
    </Layout>
  );
}
