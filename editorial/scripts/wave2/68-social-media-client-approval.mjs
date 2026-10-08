// editorial/scripts/wave2/68-social-media-client-approval.mjs
export default {
  id: "68",
  date: "2026-10-15",
  family: "howto",
  template: "howto",
  brief: true,
  status: "not_started",
  cluster: "How-to",
  contentType: "How-to guide",
  readerStage: "practitioner",
  slug: "social-media-client-approval",
  h1: "How to get client approval on social content without the email chain",
  query: "social media client approval workflow",
  secondary: [
    "social media approval process for agencies",
    "how to get client sign off on social media posts",
    "content approval workflow template",
    "client approval portal for social media",
  ],
  verdict:
    "VENDOR-HEAVY. Most results are scheduler vendors selling their own approval feature with a five-step listicle; they cover stages and deadlines but not the two things that cause disputes: which version was approved, and whether the approved post can still be changed before it goes out.",
  words: 1700,
  angle:
    "Approval breaks on two questions, 'which version did they approve?' and 'did anyone change it after?'. The fix is a record that cannot be edited and a post that cannot move while it waits. This guide sets up that loop for an agency and its clients in the hubStudio app: client logins that see only their work, one thread per piece with every version on it, and a post locked until the client decides.",
  mustInclude: [
    "The two failure points of email approval, stated in the first screen, with a table: email chain versus one approval thread",
    "Set-up: add the client company under Clients, invite its people with the Client role; work tagged Made for that client appears in its Client space",
    "What a client login sees: only the finished work made for its company, grouped by day, with Download; never prompts, engines or costs; no balance",
    "Sending: Send for validation from the image studio, the video studio or the publishing step of a post; name a teammate or one of the client's people",
    "The thread: v1, v2 and so on on one page; Validate, or Send back with a comment (required to send back); every comment and decision emailed",
    "The lock: a post waiting for validation cannot be changed, deleted or published; approved, it can go out; sent back, it returns to draft",
    "The record: no request, thread, version or comment can be deleted; an admin can decide in the validator's place",
    "Validation costs nothing and involves no AI",
    "Studio + app in two lines: when our studio makes the work inside hubStudio, the client approves in the same Validation and Client space",
  ],
  doNot: [
    "Name any scheduler, proofing tool or competitor",
    "Invent hours-saved or approval-time figures",
    "Claim deadlines, reminders or multi-stage approval chains: the help documents one named validator per thread",
    "Print a hubStudio amount",
    "Use an em dash or numbered cards",
  ],
  stats: [
    "No market statistic is needed; if one is used (time lost to approval rounds), it must come from a published survey with a stated method and sample, attributed by category and date, or be cut",
    "Every app behavior from validation.md, client-space.md and your-team.md in the help center",
  ],
  assets: [
    "Table: email chain versus one approval thread (version, change after approval, who saw what, audit trail)",
    "Table: who can do what (send, comment, validate, change the validator) by role: Admin, Creator, Viewer, Client",
    "Existing help captures: validation-page, validation-send-dialog, client-space-home",
  ],
  links: [
    ["Review and approval in the hubStudio app", "/app/review"],
    ["Studio + app", "/studio/with-the-app"],
    ["hubStudio for agencies", "/solutions/agencies"],
    ["Validation help", "/help/validation"],
    ["Client space help", "/help/client-space"],
  ],
  seoTitle: "Client Approval for Social Content Without Email",
  seoDesc:
    "Client sign-off for social posts on one thread: client logins that see only their work, every version kept, posts locked until the client decides.",
  faqs: [
    "How do agencies get client approval on social media posts?",
    "How do I stop a post being changed after the client approved it?",
    "Can a client approve posts without seeing our other clients' work?",
    "What happens when a client sends a post back?",
    "Can the client see what the content cost or how it was made?",
    "Can I delete an approval thread?",
  ],
  cta: "Create your account",
  notes:
    "Agency reader. Roles: Admin, Creator, Viewer, Client. Viewers can be named validator but cannot record a decision: say so in the roles table.",
};
