import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
  { name: 'Hook Vault', href: '/hook-vault' },
  { name: 'Analytics', href: '/analytics' },
  { name: 'Competitor Tracker', href: '/competitor-tracker' },
  { name: 'Scheduler', href: '/scheduler' },
  { name: 'Content Calendar', href: '/content-calendar' },
  { name: "What's Trending", href: '/whats-trending' },
];

export default function Sidebar() {
  const router = useRouter();
  return (
    <div className="w-64 bg-gray-950 dark:bg-gray-900 min-h-screen flex flex-col p-4">
      <div className="flex flex-col items-center mb-8">
        <div className="w-20 h-20 bg-terracotta-500 rounded-full mb-2" />
        <h2 className="text-white text-lg font-bold">Creator Name</h2>
        <span className="text-gray-400 text-sm">@creator_handle</span>
      </div>
      <nav className="flex flex-col space-y-2">
        {navItems.map(item => (
          <Link key={item.href} href={item.href}>
    
              className={`px-4 py-2 rounded hover:bg-terracotta-600 transition-colors ${
                router.pathname === item.href ? 'bg-terracotta-500' : ''
              }`}
            >
              {item.name}
            
          </Link>
        ))}
      </nav>
    </div>
  );
}
