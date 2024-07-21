import logo from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={logo}
        alt="no-projects"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No Project Selected
      </h2>
      <p className="mt-8">
        <Button onClick={onStartProject}>Create new Project</Button>
      </p>
    </div>
  );
}
