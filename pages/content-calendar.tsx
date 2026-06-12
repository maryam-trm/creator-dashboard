import Layout from '../components/Layout';
import ContentCalendar from '../components/ContentCalendar';
import { calendarMock } from '../utils/mockData';

export default function ContentCalendarPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-terracotta-500 mb-6">Content Calendar</h1>
      <ContentCalendar events={calendarMock} />
    </Layout>
  );
}
