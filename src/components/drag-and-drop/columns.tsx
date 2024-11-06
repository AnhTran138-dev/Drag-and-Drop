import { TaskCard } from "@/components/drag-and-drop/task-card";
import { Columns as ColumnType, Tasks } from "@/domains/types";
import { useDroppable } from "@dnd-kit/core";
import React from "react";

type ColumnsProps = {
  column: ColumnType;
  task: Tasks[];
};

const Column: React.FC<ColumnsProps> = ({ column, task }) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });
  return (
    <div className="flex flex-col p-4 rounded-lg w-80 bg-neutral-800">
      <h2 className="mb-4 font-semibold text-foreground/50 ">{column.title}</h2>
      <div className="flex flex-col flex-1 gap-4" ref={setNodeRef}>
        {task.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
};

export default Column;
