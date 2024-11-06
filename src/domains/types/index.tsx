export type Columns = {
  id: string;
  title: "To Do" | "In Progress" | "Done";
};

export type Tasks = {
  id: string;
  title: string;
  description: string;
  status: "TODO" | "IN_PROGRESS" | "DONE";
};
