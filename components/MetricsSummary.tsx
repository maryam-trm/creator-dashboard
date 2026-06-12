interface Metric {
  name: string;
  value: number | string;
}

interface Props {
  metrics: Metric[];
}

export default function MetricsSummary({ metrics }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map(metric => (
        <div key={metric.name} className="p-4 bg-gray-800 rounded">
          <p className="text-gray-400 text-sm">{metric.name}</p>
          <p className="text-white font-bold text-xl">{metric.value}</p>
        </div>
      ))}
    </div>
  );
}
