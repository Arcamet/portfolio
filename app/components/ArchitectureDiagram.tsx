import type { Project } from "../content/types";

export function ArchitectureDiagram({ project }: { project: Project }) {
  return (
    <ol
      className="architecture-diagram"
      aria-label={`${project.name} system layers`}
    >
      {project.architecture.nodes.map((node, index) => (
        <li className="architecture-step" key={node.id}>
          <div className={`architecture-node node-${node.group}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{node.label}</h3>
            <p>{node.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
