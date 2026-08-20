/**
 * Single source of truth for site content.
 *
 * Voice: conversational, not engineered. Charles reads tight, compressed
 * self-description as cocky — polished sentences sound like someone selling.
 * Prefer "I like to X" over "I do X", "preferred stack" over implied authority,
 * plain conjunctions over em-dash compression, and modest nouns over marketing
 * ones. Slightly longer and looser is correct here.
 */

export const site = {
  name: 'Charles Tucker',
  role: 'Senior Software Engineer',
  location: 'Washington, DC',
  url: 'https://chastucker.com',
  description:
    'Charles Tucker — software engineer in Washington, DC. I like turning rough product ideas into software that actually ships, whether that is a mobile app, a web app, or the backend behind them.',
};

export const contact = {
  email: 'cgt34@cornell.edu',
  github: 'https://github.com/chastucker',
  githubHandle: 'chastucker',
  linkedin: 'https://www.linkedin.com/in/charles-tucker-7a1442162/',
  linkedinLabel: 'Charles Tucker',
};

export const intro = [
  `I'm a software engineer in Washington, DC. I like taking a rough idea for a product and
   turning it into something that actually ships and runs, whether that's a mobile app, a
   web app, or the backend behind them. Most of my work is in TypeScript.`,
  `Right now I'm at Trenchant Analytics working on AcqBot, a government acquisition tool.
   Before that I led a small team on a patient app at Zinnia Health that we got into both
   app stores in about 100 days. Outside of work I'm co-founding Go Travel, where I'm the
   only one writing code.`,
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
    context: `AcqBot is a government acquisition tool.`,
    body: [
      `I work across several of the applications on the platform, building and architecting
       features up and down the stack — front end, API, and data model. I own a few product
       areas, which mostly means figuring out what needs to get built and how, and then
       either building it myself or working with other engineers who take pieces of it.`,
      `It ranges pretty widely. Sometimes it's one customer's request, sometimes it's a whole
       new product area. Some of it is AI work and a lot of it isn't.`,
      // The specifics stay off a public page. Saying so plainly reads as discretion
      // rather than as having nothing to show, and gives a reader a reason to email.
      `It's federal work, so I'd rather keep the details off a public page. Happy to talk
       through them directly.`,
    ],
    stack: ['TypeScript', 'React', 'tRPC', 'Node.js', 'PostgreSQL', 'LLMs'],
  },
  {
    company: 'Zinnia Health',
    title: 'Senior Software Engineer',
    start: '2022',
    end: '2024',
    location: 'Remote',
    context: `An app for patients after they left care, to help them keep track of how they
      were doing and support the day to day of staying sober.`,
    body: [
      `I led the build with two engineers under me on a project team of seven, and we went
       from an initial brief to both app stores in about 100 days. I set up the architecture,
       worked with stakeholders to figure out what was going into the release, and made the
       product and UX calls.`,
      `It was patient health data, so HIPAA shaped a lot of the early decisions — what we
       could store, where it lived, and who was allowed to see it.`,
      `Hitting 100 days meant cutting a lot. Journaling, a cravings tracker, and medication
       tracking all came out of the first release so we could ship the core thing on time,
       which was checking in and tracking how you're doing after discharge.`,
      // Download and DAU counts stay off: only a handful of the ~210 patients discharged
      // each month installed it, so raw usage invites an unflattering denominator.
      `It ended up with a five-star rating on the App Store.`,
      `React Native was the right call for getting onto both platforms that quickly. If I did
       it again I'd probably use Drizzle instead of Prisma.`,
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
      `I worked on the Android SDK in Java and Kotlin, mostly features, bug investigations,
       and code review. I was also the team's Scrum Master, and I shipped a hot fix release
       end to end on a tight deadline.`,
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
      to go, rate them, and add photos. Ratings and photos from everyone stack up on the place
      itself, so a pin ends up being more of a collective record than one person's note. You
      can also follow other people and filter the map down to just them. I'm writing all of it,
      the Expo app, the web app, the API, and the infrastructure, and we're aiming to get it on
      the App Store soon.`,
    stack: ['Expo', 'React Native', 'Next.js', 'tRPC', 'Drizzle', 'Postgres', 'Inngest', 'Fly.io'],
    // Swap for an App Store link once it's live — a link is worth more than a promise.
    note: 'Co-founding · sole engineer',
  },
  {
    name: 'wrestling-club',
    description: `An app for running a wrestling club, web and native out of one monorepo. The
      stack is newer than what I use at work on purpose — it's where I try things out before
      I'd put them in front of a customer.`,
    stack: ['Next.js', 'React', 'Expo', 'Convex', 'Clerk'],
    href: 'https://github.com/chastucker/wrestling-club',
  },
];

export const wrestling = [
  `I wrestled at Cornell and captained the team my senior year. I was a first-team
   All-American in 2020 and a Hodge Trophy finalist, won the EIWA twice, and made the U23
   world team in 2019.`,
  `I've coached ever since — Blair Academy, Doughboy, and Muz Trained — and I sit on the
   board of the Massachusetts chapter of the National Wrestling Hall of Fame, where I handle
   public relations.`,
];

export const interests = {
  placeholder: false,
  note: `Lately I've been training Brazilian jiu-jitsu and learning salsa and bachata. All of
    them mostly involve being bad at something in public for a while, which I'm getting used
    to.`,
};

/**
 * Stated as a fact, not an offer. The site's primary job is landing a role, and
 * "open to new engagements" reads to a hiring manager as divided attention.
 */
export const llc = {
  placeholder: false,
  name: 'Redhouse Dynamics',
  note: `I have a small consulting practice for the occasional independent engineering project
    outside of my full-time work.`,
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
