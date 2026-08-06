import type { Project } from "../content/types";

export function ArchitectureDiagram({ project }: { project: Project }) {
  return (
    <div
      className="architecture-diagram"
      aria-label={`${project.name} architecture flow`}
    >
      {project.architecture.nodes.map((node, index) => (
        <div className="architecture-step" key={node.id}>
          <div className={`architecture-node node-${node.group}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{node.label}</h3>
            <p>{node.description}</p>
          </div>
          {index < project.architecture.nodes.length - 1 ? (
            <span className="architecture-arrow" aria-hidden="true">
              ↓
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
