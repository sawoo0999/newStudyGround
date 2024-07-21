import { useState } from "react";
import ProjectSidebar from "./component/ProjectSidebar";
import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjectSelected";
import SelectedProject from "./component/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  //Task 추가 함수
  function handleAddTask(text) {
    setProjectsState((project) => {
      const TaskId = Math.random();
      const newData = {
        text: text,
        projectId: project.selectedProjectId,
        id: TaskId,
      };
      return {
        ...project,
        tasks: [...project.tasks, newData],
      };
    });
  }

  //Task 배열안에 텍스트 삭제 함수
  function handleRemoveTask(id) {
    setProjectsState((project) => {
      return {
        ...project,
        tasks: projectsState.tasks.filter((project) => project.id !== id),
      };
    });
  }

  //선택된 프로젝트 id 로 생성 오브젝트
  function handleSelectProject(id) {
    setProjectsState((project) => {
      return {
        ...project,
        selectedProjectId: id,
      };
    });
  }

  //프로젝트 생성 화면 표시 함수
  function handleAddProject() {
    setProjectsState((project) => {
      return {
        ...project,
        selectedProjectId: null,
      };
    });
  }
  //projects 배열안에 오브젝트 생성
  function handleStartAddProject(projectData) {
    setProjectsState((project) => {
      const projectId = Math.random();
      const newData = {
        ...projectData,
        id: projectId,
      };
      return {
        ...projectsState,
        selectedProjectId: undefined,
        projects: [...project.projects, newData],
      };
    });
  }

  //projects 배열안에 오브젝트 삭제하면서 초기화면 이동
  function handleRemoveProject() {
    setProjectsState((project) => {
      return {
        ...project,
        selectedProjectId: undefined,
        projects: projectsState.projects.filter(
          (project) => project.id !== projectsState.selectedProjectId
        ),
      };
    });
  }

  //취소해서 초기 화면 이동 함수
  function handleCancel() {
    setProjectsState((project) => {
      return {
        ...project,
        selectedProjectId: undefined,
      };
    });
  }
  //유효성 검사
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  console.log(projectsState.projects);
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleRemoveProject}
      onTask={handleAddTask}
      onDeleteTask={handleRemoveTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartProject={handleAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleStartAddProject} onCancel={handleCancel} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartProject={handleAddProject}
        projects={projectsState.projects}
        onSelectedProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
