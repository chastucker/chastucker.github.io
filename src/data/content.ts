/**
 * Single source of truth for site content.
 *
 * Tone: plain and understated. State things once, without adjectives doing
 * persuasion work. No metrics used as a flex — describe the work, not its size.
 *
 */

export const site = {
  name: 'Charles Tucker',
  role: 'Senior Software Engineer',
  location: 'Washington, DC',
  url: 'https://chastucker.com',
  description:
    'Charles Tucker — software engineer in Washington, DC. I build whole products — mobile, web, and the backend under both — at Trenchant Analytics and on Go Travel.',
};

export const contact = {
  email: 'cgt34@cornell.edu',
  github: 'https://github.com/chastucker',
  githubHandle: 'chastucker',
  linkedin: 'https://www.linkedin.com/in/charles-tucker-7a1442162/',
  linkedinLabel: 'Charles Tucker',
};

/**
 * The position: not a technology specialty, but a mode — taking whole products
 * from nothing to shipped, across mobile, web, and backend. Three independent
 * proof points follow immediately so the claim isn't left hanging.
 */
export const intro = [
  `I'm a software engineer in Washington, DC. I build whole products — the mobile app, the
   web app, and the backend under both — mostly in TypeScript. What I'm usually there for is
   being the person who gets the thing out the door.`,
  `Right now that's AcqBot at Trenchant Analytics, an AI platform for federal acquisition,
   where I own product areas end to end. Before that I led the team that took Zinnia Health's
   post-discharge patient app to both app stores in about 100 days, under HIPAA. Outside of
   work I'm the only engineer on Go Travel, a product I'm co-founding.`,
];

export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  location: string;
  context?: string;
  body: string[];
  stack: string[];
  href?: string;
};

export const roles: Role[] = [
  {
    company: 'Trenchant Analytics',
    title: 'Senior Software Engineer',
    start: '2024',
    end: 'Present',
    location: 'Remote',
    href: 'https://acqbot.com',
    context: `AcqBot is an AI platform for federal acquisition — it takes procurement work
      that normally runs for months and gets it down to days.`,
    body: [
      `I own product areas end to end: scoping the work, breaking it into tickets, and setting
       the technical direction — then either building it myself or handing implementation to
       other engineers working from that scope. I work across the whole application rather
       than one lane, and the range runs from a single customer's request to a new product
       area.`,
      `The evaluation module is the clearest example. It worked, but it was confusing enough
       that people struggled with it. I rebuilt it: reworked the flow so it makes sense,
       added role assignment so the right people get the right steps, and changed how
       assessments are taken so an evaluator can pull up every source document and video
       while they work instead of hunting for them. I built the logic that drives an
       evaluation and the parsing that sets one up from source material, and shook the
       design out through user testing and customer feedback. Every customer doing
       evaluations is now on the rebuild, the old version is deprecated, and the questions
       about how to use it stopped coming. It also brought new business onto the platform.`,
      `Right now I'm onboarding new customers and building the custom acquisition flows each
       one needs, including bringing AI into that pipeline.`,
    ],
    stack: ['TypeScript', 'React', 'tRPC', 'Node.js', 'PostgreSQL', 'LLMs'],
  },
  {
    company: 'Zinnia Health',
    title: 'Senior Software Engineer',
    start: '2022',
    end: '2024',
    location: 'Remote',
    context: `An app for patients after discharge — a way to track how they were doing and
      to support the day-to-day of staying sober.`,
    body: [
      `I led the build — two engineers reporting to me on a project team of seven — from an
       initial brief to both app stores in about 100 days. I set the architecture, worked
       with stakeholders directly to define the release, and made the product and UX calls.`,
      `It was patient health data, so HIPAA shaped the early decisions: what we could store,
       where it lived, and who was allowed to see it.`,
      `Hitting 100 days meant cutting. Journaling, a cravings tracker, and medication
       tracking all came out of the first release so the core — checking in and tracking how
       you're doing after discharge — could ship on time.`,
      // Download and DAU counts were cut deliberately: only a handful of the ~210 patients
      // discharged each month ever installed it, so raw usage numbers invite an unflattering
      // denominator. The rating is a quality signal rather than a scale claim.
      `It shipped to a five-star rating on the App Store.`,
      `React Native was the right call for launching on both platforms at that pace. If I
       built it again I'd reach for Drizzle over Prisma.`,
    ],
    stack: ['TypeScript', 'React Native', 'Node.js', 'Fastify', 'Prisma', 'PostgreSQL'],
  },
  {
    company: 'Cambridge Mobile Telematics',
    title: 'Software Engineer',
    start: '2020',
    end: '2022',
    location: 'Cambridge, MA',
    body: [
      `Worked on the Android SDK in Java and Kotlin — features, bug investigations, and
       code review. I was also the team's Scrum Master, and shipped a hot fix release
       end to end under a tight deadline.`,
    ],
    stack: ['Java', 'Kotlin', 'Android'],
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  /** Omitted for private repos — the entry renders without a link. */
  href?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    name: 'Go Travel',
    description: `A travel app built around a shared map. You pin places you've been or want
      to go, rate them, and add photos; ratings and photos from everyone aggregate onto the
      place itself, so a pin becomes a collective record rather than one person's note. You
      can follow other travelers and filter the map down to people whose taste you trust.
      I write all of it — Expo app, web app, API, and infrastructure — and it's headed for
      the App Store.`,
    stack: ['Expo', 'React Native', 'Next.js', 'tRPC', 'Drizzle', 'Postgres', 'Inngest', 'Fly.io'],
    // Swap this for an App Store link once it's live — a link is worth far more
    // than a promise of one.
    note: 'Co-founding · sole engineer',
  },
  {
    name: 'wrestling-club',
    description: `An app for running a wrestling club, web and native from one monorepo.
      The stack is deliberately newer than what I use at work — it's where I try things
      before I'd put them in front of a customer.`,
    stack: ['Next.js', 'React', 'Expo', 'Convex', 'Clerk'],
    href: 'https://github.com/chastucker/wrestling-club',
  },
];

/**
 * Wrestling, stated plainly and once. The record is unusual enough that it
 * doesn't need to be set in large type to land.
 */
export const wrestling = [
  `I wrestled at Cornell and captained the team my senior year. I was a first-team
   All-American in 2020 and a Hodge Trophy finalist, won the EIWA twice, and made the
   U23 world team in 2019.`,
  `I've coached ever since — Blair Academy, Doughboy, and Muz Trained — and I sit on the
   board of the Massachusetts chapter of the National Wrestling Hall of Fame, where I
   handle public relations.`,
];

export const interests = {
  placeholder: false,
  note: `Lately I've been training Brazilian jiu-jitsu, and learning salsa and bachata —
    all three are the same lesson in different clothes, which is that you get better by
    being bad at something in public for a while.`,
};

/**
 * Stated as a fact, not an offer. The site's primary job is landing a staff role,
 * and "open to new engagements" reads to a hiring manager as divided attention.
 * The pitch belongs on a separate Redhouse Dynamics site.
 */
export const llc = {
  placeholder: false,
  name: 'Redhouse Dynamics',
  note: `I run a small consulting practice for occasional independent engineering work
    outside my full-time role.`,
};

export const skills = [
  { group: 'Languages', items: 'TypeScript, JavaScript, SQL, Java, Kotlin, Python' },
  { group: 'Frontend', items: 'React, Next.js, React Native, Tailwind CSS' },
  { group: 'Backend', items: 'Node.js, tRPC, PostgreSQL, Drizzle' },
  { group: 'AI', items: 'Claude Code, Cursor, Codex, LLM orchestration, RAG' },
];

export const education = {
  school: 'Cornell University',
  degree: 'B.S. Computer Science, College of Engineering',
  year: '2020',
  note: 'Quill and Dagger. Varsity wrestling captain, 2019–20.',
};

export const nav = [
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#wrestling', label: 'Wrestling' },
  { href: '#elsewhere', label: 'Elsewhere' },
  { href: '#contact', label: 'Contact' },
];
