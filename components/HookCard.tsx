interface Hook {
  id: string;
  text: string;
  type: string;
  niche: string;
  creator: string;
  views: number;
}

interface Props {
  hook: Hook;
}

export default function HookCard({ hook }: Props) {
  const handleUse = () => {
    alert(`Hook inserted: ${hook.text}`); // TODO: link to /script page
  };

  return (
    <div className="p-4 rounded shadow-md bg-gray-800 flex flex-col justify-between">
      <p className="text-white font-medium">{hook.text}</p>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-gray-400 text-sm">{hook.creator}</span>
        <span className="text-gray-400 text-sm">{hook.views} views</span>
      </div>
      <button
        onClick={handleUse}
        className="mt-2 bg-terracotta-500 hover:bg-terracotta-600 text-white py-1 px-3 rounded"
      >
        Use this
      </button>
    </div>
  );
}
