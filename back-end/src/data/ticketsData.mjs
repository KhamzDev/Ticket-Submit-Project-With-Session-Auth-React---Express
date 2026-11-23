export const ticketsData = [
{
    id: 1,
    createdAt: "2026-11-22T08:15:00.000Z",
    status: "open",
    user: { id: 1, user: "john", company: "Microsoft" },
    ticket: {
      title: "SSO login failing on staging environment",
      desc: "Users from the Microsoft tenant receive a 403 error after SAML authentication.",
      priority: "high",
    },
  },
  {
    id: 2,
    createdAt: "2026-11-22T08:42:00.000Z",
    status: "open",
    user: { id: 2, user: "steve", company: "Microsoft" },
    ticket: {
      title: "Webhook delivery delays exceeding 5 minutes",
      desc: "Order status webhooks are arriving late during peak traffic windows.",
      priority: "medium",
    },
  },
  {
    id: 3,
    createdAt: "2026-11-22T09:05:00.000Z",
    status: "open",
    user: { id: 3, user: "Clara", company: "Oracle" },
    ticket: {
      title: "Unable to export monthly billing CSV",
      desc: "Clicking export on the October invoice view times out after 30 seconds.",
      priority: "medium",
    },
  },
  {
    id: 4,
    createdAt: "2026-11-22T09:18:00.000Z",
    status: "open",
    user: { id: 4, user: "maya", company: "Oracle" },
    ticket: {
      title: "API rate limit headers missing on 429 responses",
      desc: "Retry-After header is absent when throttling kicks in on the v2 endpoint.",
      priority: "low",
    },
  },
  {
    id: 5,
    createdAt: "2026-11-22T09:30:00.000Z",
    status: "open",
    user: { id: 5, user: "liam", company: "Microsoft" },
    ticket: {
      title: "Role permission changes not reflecting immediately",
      desc: "Updating a teammate's role to admin takes several minutes to apply in the UI.",
      priority: "medium",
    },
  },
  {
    id: 6,
    createdAt: "2026-11-22T09:44:00.000Z",
    status: "open",
    user: { id: 6, user: "sophia", company: "Oracle" },
    ticket: {
      title: "Custom domain SSL certificate renewal warning",
      desc: "Dashboard shows a renewal warning for app.oracle-partner.example.com.",
      priority: "high",
    },
  },
  {
    id: 7,
    createdAt: "2026-11-22T09:51:00.000Z",
    status: "open",
    user: { id: 1, user: "john", company: "Microsoft" },
    ticket: {
      title: "Request to increase sandbox project quota",
      desc: "Need to spin up 4 additional test environments for Q4 integration testing.",
      priority: "low",
    },
  },
  {
    id: 8,
    createdAt: "2026-11-22T10:02:00.000Z",
    status: "open",
    user: { id: 3, user: "Clara", company: "Oracle" },
    ticket: {
      title: "Audit log search filter ignores date range",
      desc: "Selecting a custom start and end date still returns events from the last 24 hours.",
      priority: "medium",
    },
  },
  {
    id: 9,
    createdAt: "2026-11-22T10:11:00.000Z",
    status: "open",
    user: { id: 4, user: "maya", company: "Oracle" },
    ticket: {
      title: "Duplicate notification emails on ticket updates",
      desc: "Subscribers receive two identical email alerts whenever a comment is added.",
      priority: "low",
    },
  },
  {
    id: 10,
    createdAt: "2026-11-22T10:19:00.000Z",
    status: "open",
    user: { id: 5, user: "liam", company: "Microsoft" },
    ticket: {
      title: "Production deployment pipeline stuck in queued state",
      desc: "Build #418 has been queued for 20 minutes without assigning a runner.",
      priority: "urgent",
    },
  },
];