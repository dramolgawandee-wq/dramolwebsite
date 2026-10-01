import type { IprRecord } from "./types";

/*
 * Wording rule: German "U1" records are utility models (Gebrauchsmuster),
 * registered without substantive examination. They are listed as such,
 * never as granted patents. Indian filings are published applications
 * and stay unpublished here until checked on IP India.
 */
export const ipr: IprRecord[] = [
  {
    id: "de202022100308",
    kind: "utility-model",
    title: "A cloud-based secured electronic trading system",
    jurisdiction: "Germany (DPMA), utility model",
    number: "DE 20 2022 100 308 U1",
    date: "2022-01-28",
    status: "Registered",
    people: ["Somnath Patil", "Amol Gawande", "Atul Kumar", "Sonali Saha", "Ishita Sil"],
    url: "https://patents.google.com/patent/DE202022100308U1/en",
    sourceIds: ["gp-de202022100308"],
  },
  {
    id: "de202021105950",
    kind: "utility-model",
    title: "An Intelligent MCQ Exam Management System",
    jurisdiction: "Germany (DPMA), utility model",
    number: "DE 20 2021 105 950 U1",
    date: "2022-01-12",
    status: "Registered · now expired",
    people: ["Amol Gawande", "Atul Kumar", "Sheetal Darekar", "Pooja Patil", "Geetika"],
    url: "https://patents.google.com/patent/DE202021105950U1/en",
    sourceIds: ["gp-de202021105950"],
  },
  {
    id: "de202021105949",
    kind: "utility-model",
    title: "IoT powered online grocery ordering system",
    jurisdiction: "Germany (DPMA), utility model",
    number: "DE 20 2021 105 949 U1",
    date: "2022-01-12",
    status: "Registered · now expired",
    people: ["Somnath Patil", "Amol Gawande", "Atul Kumar", "Sheetal Darekar", "Parminder Kaur"],
    url: "https://patents.google.com/patent/DE202021105949U1/en",
    sourceIds: ["gp-de202021105949"],
  },
  {
    id: "au2020103908",
    kind: "patent",
    title: "STM-Strategic Tourism Management: Strategic Workflow in Hospitality and Tourism Management",
    jurisdiction: "Australia, innovation patent",
    number: "2020103908",
    date: "2020-12-05",
    status: "[VERIFY on AusPat]",
    people: ["Amol Gawande", "Atul Kumar", "Vishal Wadajkar", "Vinaydeep Brar", "and others"],
    sourceIds: ["ipau-2020103908"],
  },
  ...(
    [
      ["202121045953", "Improved the Tourism Services and Management System", "2021-10-01"],
      ["202121046132", "Immediate Lowest Amount Flight Tickets Management System", "2021-10-29"],
      ["202111051749", "Advanced branding in the marketing of Unilever products using ML", "2021-11-11"],
      ["202111054012", "Advanced and online MCQ examination management system", "2021-12-17"],
      ["202221030955", "The effect of HRM practices on TQM implementation", "2022-05-30"],
      ["202221064916", "E-Learning Based Hybrid Training for Education and Management System Model", "2022-11-12"],
      ["202321044469", "IOT-Based Vehicle Authority and Monitoring System Using Driving License", "2023-07-03"],
    ] as const
  ).map(([number, title, date]): IprRecord => ({
    id: `in-${number}`,
    kind: "patent-application",
    title,
    jurisdiction: "India, published application",
    number,
    date,
    status: "Published application",
    people: ["Amol Gawande"],
    sourceIds: ["in-applications"],
  })),
];
