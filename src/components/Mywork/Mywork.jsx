import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard.jsx'
import "./Mywork.css";
function Mywork() {
  return (
    <>
      <div className="mainwork">
      <ProjectCard
        heading="Portfolio"
        src="src/assets/portfolio.png"
        link="https://github.com/1ntrested/portfolio" />
      <ProjectCard
        heading="Blogs"
        src="src/assets/two.png"
        link="https://github.com/1ntrested/eggy" />
    </div >
      <div>
        <ProjectCard
          heading="Treeformer"
          src="src/assets/treeformer.gif"
          link="https://github.com/1ntrested/Tree-former" />
      </div>
      <div className="mainwork">
      <ProjectCard
        heading="Keeper-app"
        src="src/assets/keeper.png"
        link="https://github.com/1ntrested/keeper-app" />
      <ProjectCard
        heading="Todo-react"
        src="src/assets/todo.png"
        link="https://github.com/1ntrested/todo-react" />
    </div >
    <div>
        <ProjectCard
          heading="Texter"
          src="src/assets/texter.png"
          link="https://github.com/1ntrested/texter" />
      </div>
    </>
  )
}

export default Mywork