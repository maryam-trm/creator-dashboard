interface Reel {
  id: string;
  title: string;
  creator: string;
  followers: number;
  views: number;
}

interface Props {
  reel: Reel;
}

export default function ReelCard({ reel }: Props) {
  const handleSave = () => {
    alert(`Saved "${reel.title}" to Hook Vault`);
  };

  return (
    <div className="p-4 rounded shadow-md bg-gray-800 flex flex-col justify-between">
      <p className="text-white font-medium">{reel.title}</p>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-gray-400 text-sm">{reel.creator}</span>
        <span className="text-gray-400 text-sm">{reel.views} views</span>
      </div>
      <button
        onClick={handleSave}
        className="mt-2 bg-terracotta-500 hover:bg-terracotta-600 text-white py-1 px-3 rounded"
      >
        Save to Hook Vault
      </button>
    </div>
  );
}
