import Column from "@/components/drag-and-drop/columns";
import { Columns, Tasks } from "@/domains/types";
import { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

const COLUMNS: Columns[] = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];

const INITIAL_TASKS: Tasks[] = [
  { id: "1", title: "Task 1", description: "Description 1", status: "TODO" },
  {
    id: "2",
    title: "Task 2",
    description: "Description 2",
    status: "IN_PROGRESS",
  },
  { id: "3", title: "Task 3", description: "Description 3", status: "DONE" },
  { id: "4", title: "Task 4", description: "Description 4", status: "TODO" },
];

function App() {
  const [tasks, setTasks] = useState<Tasks[]>(INITIAL_TASKS);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;

    const newStatus = over.id as Tasks["status"];

    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="container my-10">
      <div className="flex gap-8">
        <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map((column) => {
            return (
              <Column
                key={column.id}
                column={column}
                task={tasks.filter((task) => task.status === column.id)}
              />
            );
          })}
        </DndContext>
      </div>
    </div>
  );
}

export default App;
