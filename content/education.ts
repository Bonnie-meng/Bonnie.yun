export type EducationEntry = {
  institution: string;
  degree?: string;
  field?: string;
  startDate?: string;
  endDate?: string;
  note?: string;
};

export const educationEntries: EducationEntry[] = [
  {
    institution: "Shanghai Normal University",
    degree: "Bachelor's Degree",
    field: "Advertising",
    startDate: "2021",
    endDate: "2025"
  },
  {
    institution: "Shanghai Publishing and Printing College",
    field: "Advertising Design and Production",
    startDate: "2016",
    endDate: "2019"
  }
];
