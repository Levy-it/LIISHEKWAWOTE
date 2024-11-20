// components/Sidebar.js
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-highlight p-4 text-white">
      <div className="mb-8">
        <h1 className="text-xl font-bold">Liishekwawote</h1>
      </div>
      <nav className="space-y-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/donations">Donations</Link>
        <Link href="/food-options">Food Options</Link>
        <Link href="/reports">Reports</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
