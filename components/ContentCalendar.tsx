interface Event {
  id: string;
  title: string;
  date: string;
  type: string;
}

interface Props {
  events: Event[];
}

export default function ContentCalendar({ events }: Props) {
  return (
    <div className="space-y-2">
      {events.map(ev => (
        <div key={ev.id} className="p-2 bg-gray-800 rounded flex justify-between">
          <span>{ev.date}</span>
          <span>{ev.title} ({ev.type})</span>
        </div>
      ))}
    </div>
  );
}
