import type { Article } from "../types";

/*
 * DRAFT FOR AUTHOR REVIEW. Written for Dr. Gawande's byline from the brief's
 * themes. It states opinions in his voice, so he must read and approve it
 * before launch. External figures are limited to three primary sources,
 * listed in `references`.
 */
export const article: Article = {
  slug: "why-gen-z-needs-a-different-approach-to-education",
  title: "Why Gen Z Needs a Different Approach to Education",
  seoTitle: "Why Gen Z Needs a Different Approach to Education | Dr. Amol Gawande",
  description:
    "Dr. Amol Gawande explores why Gen Z needs a more practical, personalised and outcome-based approach to education in a changing world of work.",
  summary:
    "Gen Z did not grow up waiting for information. Education built around delivering it is solving the wrong problem. Here is what should change.",
  pillar: "gen-z-future-of-work",
  topics: ["Gen Z", "Future of Education", "Future of Work"],
  published: "2026-09-24",
  readingMinutes: 9,
  related: [],
  references: [
    {
      label: "Pew Research Center: Where Millennials end and Generation Z begins (2019)",
      url: "https://www.pewresearch.org/short-reads/2019/01/17/where-millennials-end-and-generation-z-begins/",
    },
    {
      label: "World Economic Forum: The Future of Jobs Report 2025",
      url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/",
    },
    {
      label: "Government of India: National Education Policy 2020",
      url: "https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf",
    },
  ],
  body: [
    {
      t: "answer",
      label: "The short answer",
      html:
        "Gen Z grew up with information on demand, so an education built mainly around delivering information no longer gives them much they cannot get elsewhere. What they need from education is judgement, applied skill and the habit of relearning. That calls for a model measured by what students can <em>do</em>, not by what they sat through.",
    },
    {
      t: "p",
      html:
        "Most people now in university or starting their first job belong to Generation Z. Pew Research Center defines the generation as people born from 1997 onwards, which means the oldest are close to thirty and the youngest are still in school. They are the first generation for whom a smartphone was a normal part of childhood, not an arrival.",
    },
    {
      t: "p",
      html:
        "That single fact changes the job of a teacher more than any policy document has. When the answer to most factual questions is a few seconds away, the scarce thing is no longer the answer. It is knowing which question to ask, whether a source can be trusted, and what to do once you know.",
    },

    { t: "h2", id: "different-model", text: "Why Gen Z needs a different education model" },
    {
      t: "p",
      html:
        "Much of higher education still follows a pattern designed for a world where knowledge was hard to reach: an expert explains, students record, an exam checks recall. That pattern made sense when the lecture hall was where the knowledge lived. It makes much less sense for a student who can pause, replay and cross-check any lecture on their phone.",
    },
    {
      t: "p",
      html:
        "The problem is not that Gen Z has a short attention span, which is the lazy explanation. The problem is that they are quick to notice when time is being spent without a clear return. Give them a real problem, a reason it matters and some ownership of the outcome, and the same students who drift through a lecture will stay late to finish the work.",
    },
    {
      t: "p",
      html:
        "The world of work is moving in the same direction. The World Economic Forum’s <em>Future of Jobs Report 2025</em> finds that employers expect close to two-fifths of workers’ core skills to change by 2030. A degree that certifies a fixed body of knowledge cannot keep pace with that on its own. An education that builds the capacity to keep learning can.",
    },

    { t: "h2", id: "teaching-to-learning", text: "From teaching to learning" },
    {
      t: "p",
      html:
        "The most useful shift an institution can make is to stop asking <strong>“What did we teach?”</strong> and start asking <strong>“What did students learn, and how do we know?”</strong> The first question is about the syllabus. The second is about the student.",
    },
    {
      t: "p",
      html:
        "In practice this means less time transmitting content and more time on the parts of learning that need a teacher in the room: working through problems, arguing about evidence, getting feedback on real attempts. Content can be read or watched before class. Class time is for doing something with it.",
    },

    { t: "h2", id: "degrees-to-outcomes", text: "From degrees to outcomes" },
    {
      t: "p",
      html:
        "Outcome-based education starts at the end. Before designing a course, you define what a student should be able to do when it finishes (analyse a company’s financial statements, lead a small team through a project, present a recommendation to a sceptical audience), and then build the teaching and the assessment backwards from those outcomes.",
    },
    {
      t: "p",
      html:
        "This matters for Gen Z because it makes the value of a programme visible. A transcript that lists course titles says little. A record of demonstrated capabilities says a great deal, to the student and to anyone who might hire them. Degrees still matter; they just carry more weight when they are evidence of capability rather than a substitute for it.",
    },

    { t: "h2", id: "personalised-learning", text: "Why personalised learning matters" },
    {
      t: "p",
      html:
        "Gen Z is used to services that adapt to them. Education is one of the few places where they are still expected to move at the same pace, in the same order, as forty other people. Some students are bored; others are lost; the course moves on regardless.",
    },
    {
      t: "p",
      html:
        "Personalised learning does not mean every student gets a private tutor. It means building in choice and pace where it counts: different routes to the same outcome, room to go deeper in an area of interest, and early support when someone is falling behind. Good data and good tools make this far more practical than it was ten years ago.",
    },

    { t: "h2", id: "technology", text: "How technology is changing education" },
    {
      t: "p",
      html:
        "Generative AI has made one thing unavoidable: any assignment that a chatbot can complete convincingly is no longer a good measure of learning. That is uncomfortable, but it is also useful. It forces a better question: what should a student be able to do that a tool cannot do for them?",
    },
    {
      t: "p",
      html:
        "The answer usually involves judgement, context and accountability: deciding which output is right for this situation, explaining the reasoning, and standing behind the decision. Students should learn to use AI well, openly and critically, the way earlier generations learned to use calculators and search engines. Banning it teaches them nothing about the world they are walking into.",
    },

    { t: "h2", id: "entrepreneurship", text: "Why entrepreneurship matters" },
    {
      t: "p",
      html:
        "Not every student will start a company, and not every student should. But the habits entrepreneurship builds (spotting a problem, testing an idea cheaply, dealing with uncertainty, learning from a failed attempt) are useful in almost every career. Many Gen Z students already run side projects, freelance, or build audiences online. Education can take that energy seriously instead of treating it as a distraction from the “real” work.",
    },

    { t: "h2", id: "global-exposure", text: "What global exposure really means" },
    {
      t: "p",
      html:
        "Global exposure is often reduced to studying abroad. That is one route, and a valuable one, but the underlying goal is broader: learning to work with people who think differently, understanding that business and education work differently across systems, and becoming comfortable operating outside familiar settings.",
    },
    {
      t: "p",
      html:
        "Much of that can be built from wherever a student is: through international projects, visiting faculty, cross-border teams and case material drawn from more than one economy. The test is not where a student studied. It is whether they can work effectively with people who did not grow up the way they did.",
    },

    { t: "h2", id: "continuous-learning", text: "The importance of continuous learning" },
    {
      t: "p",
      html:
        "The most important skill for this generation may be the least glamorous: the ability to learn, unlearn and relearn. Tools will change, industries will reorganise, and some of what students master at twenty will be out of date by thirty. That is not a failure of their education, provided their education taught them how to rebuild.",
    },
    {
      t: "p",
      html:
        "India’s National Education Policy 2020 points in this direction too, with its emphasis on multidisciplinary study, experiential learning and flexibility in how students move through a programme. The policy sets the direction. The harder work is changing what happens in individual classrooms.",
    },

    { t: "h2", id: "future-ready", text: "What should future-ready education look like?" },
    { t: "p", html: "No single model fits every institution, but future-ready education tends to share a few features:" },
    {
      t: "ul",
      items: [
        "<strong>Clear outcomes.</strong> Every programme states what graduates can do, and assesses it directly.",
        "<strong>Learning by doing.</strong> Projects, live cases, internships and simulations carry real weight, not just marks for participation.",
        "<strong>Room to personalise.</strong> Students have choices in pace, depth and direction.",
        "<strong>Honest use of technology.</strong> AI and digital tools are taught, used and questioned openly.",
        "<strong>Exposure beyond the familiar.</strong> Students work across disciplines, industries and cultures.",
        "<strong>A habit of relearning.</strong> Students leave knowing how to pick up the next skill on their own.",
      ],
    },
    {
      t: "p",
      html:
        "None of this makes knowledge less important. It makes the use of knowledge more important. For a generation that can find almost anything, education earns its place by helping them decide what matters and what to do about it.",
    },
    {
      t: "p",
      html:
        'For more on the research behind this work, see <a href="/research">Dr. Gawande’s research</a> and <a href="/research/publications">publications</a>. If you are organising a discussion on these themes, the <a href="/about/speaking">speaking page</a> lists the topics he covers.',
    },
  ],
  faqs: [
    {
      q: "Why does Gen Z need a different approach to education?",
      a: "Gen Z grew up with instant access to information, so education that mainly delivers information adds little. They need an approach that builds judgement, applied skills and the ability to keep learning, with teaching measured by what students can do rather than what they were taught.",
    },
    {
      q: "What skills does Gen Z need for the future of work?",
      a: "Beyond subject knowledge, the most durable skills are analytical and critical thinking, working with AI and data responsibly, communication, collaboration across cultures, adaptability and the habit of learning new skills independently. The World Economic Forum expects a large share of core job skills to change by 2030, which makes the last of these especially important.",
    },
    {
      q: "What is outcome-based education?",
      a: "Outcome-based education defines what a student should be able to do at the end of a course or programme, then designs teaching and assessment backwards from those outcomes. Success is measured by demonstrated capability, not by content covered or hours attended.",
    },
    {
      q: "Why is personalised learning important?",
      a: "Students learn at different speeds and from different starting points. Personalised learning gives them choice in pace, depth and route while keeping the same outcomes, so fewer students are left behind or held back.",
    },
    {
      q: "How can education prepare students for AI?",
      a: "By teaching students to use AI tools openly and critically, and by redesigning assessment around the things tools cannot do for them: exercising judgement, explaining reasoning, applying knowledge to specific contexts and taking responsibility for decisions.",
    },
    {
      q: "What is experiential learning?",
      a: "Experiential learning is learning through doing and then reflecting on the experience, for example through projects, live business cases, internships, simulations and fieldwork, rather than only through lectures and reading.",
    },
    {
      q: "What does future-ready education mean?",
      a: "Future-ready education prepares students for work and roles that will keep changing. It combines clear outcomes, learning by doing, personalisation, honest use of technology, exposure beyond the familiar and the ability to relearn throughout a career.",
    },
  ],
};
