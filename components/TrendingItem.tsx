interface Trending {
  id: string;
  title: string;
  tags: string[];
}

interface Props {
  item: Trending;
}

export default function TrendingItem({ item }: Props) {
  return (
    <div className="p-4 bg-gray-800 rounded">
      <p className="text-white font-medium">{item.title}</p>
      <div className="mt-1 flex flex-wrap gap-1">
        {item.tags.map(tag => (
          <span key={tag} className="text-gray-400 text-xs bg-gray-700 px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
