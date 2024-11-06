import { Tasks } from "@/domains/types";
import { useDraggable } from "@dnd-kit/core";
import React from "react";

type TaskCardProps = {
  task: Tasks;
};

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="p-4 rounded-lg shadow-sm cursor-grab bg-neutral-700 hover:shadow-md"
      style={style}
    >
      <h3 className="font-medium text-foreground/70">{task.title}</h3>
      <p className="mt-2 text-sm text-foreground/60">{task.description}</p>
    </div>
  );
};
