// Hooks
export const hooksMock = [
  { id: '1', text: '[X] just killed [Y]', type: 'Hook', niche: 'Fitness', creator: '@fitguru', views: 1200 },
  { id: '2', text: 'Stop doing [X]', type: 'Advice', niche: 'Productivity', creator: '@timeman', views: 3400 },
  { id: '3', text: '[3] things I wish I knew', type: 'List', niche: 'Self-Help', creator: '@selfdev', views: 980 },
];

// Analytics
export const analyticsMock = {
  metricsSummary: [
    { name: 'Total Views', value: 12000 },
    { name: 'Engagement Rate', value: '5.6%' },
    { name: 'Avg Likes', value: 430 },
    { name: 'Avg Comments', value: 24 },
  ],
  metrics: [
    { name: 'Views', data: [100, 200, 300, 250, 400, 500] },
    { name: 'Saves', data: [10, 15, 20, 18, 25, 30] },
    { name: 'Follows', data: [5, 7, 6, 8, 10, 12] },
    { name: 'Skip Rate', data: [20, 18, 15, 25, 22, 18] },
  ],
  topHeaters: [
    { id: '1', title: '10 Tips for Productivity', views: 5000 },
    { id: '2', title: 'Stop Wasting Time', views: 4800 },
  ]
};

// Competitor Reels
export const competitorReelsMock = [
  { id: '1', title: 'Best Fitness Reel', creator: '@competitor1', followers: 12000, views: 5000 },
  { id: '2', title: 'Viral Productivity Reel', creator: '@competitor2', followers: 8000, views: 4800 },
];

// Scheduler
export const schedulerMock = [
  { id: '1', title: 'Post: Workout Tips', platform: 'Instagram', scheduledTime: '2026-06-14 10:00' },
  { id: '2', title: 'Post: Productivity Hack', platform: 'TikTok', scheduledTime: '2026-06-14 12:00' },
];

// Content Calendar
export const calendarMock = [
  { id: '1', title: 'Workout Hook', date: '2026-06-14', type: 'Hook' },
  { id: '2', title: 'Productivity Reel', date: '2026-06-15', type: 'Reel' },
];

// Trending
export const trendingMock = [
  { id: '1', title: 'AI Content Trend', tags: ['AI', 'Content', 'Viral'] },
  { id: '2', title: 'New Social Media Hack', tags: ['Social', 'Viral'] },
];
