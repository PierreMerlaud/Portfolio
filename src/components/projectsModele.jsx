export default function ProjectsModele({ projectInfo }) {
  return (
    <article className="projets__item">
      <div className="image_description">
        <div className="image_title_link">
          <div className="stack_image">
            <div className="stack_arrow">
              <div class="arrow"></div>
              <div className="stack_title">{projectInfo.stackText}</div>
              <div class="arrow"></div>
            </div>
            <div className="projets__item-image">
              <img src={projectInfo.srcImage} alt={projectInfo.altImage} />
              <div className="new_div">
                <h5>{projectInfo.stackText}</h5>
                <div className="stack">
                  <article className="front-1">
                    {projectInfo.icon1}
                    <div className="">
                      <h4>{projectInfo.stack1}</h4>
                    </div>
                  </article>
                  <article className="front-1">
                    {projectInfo.icon2}
                    <div className="">
                      <h4>{projectInfo.stack2}</h4>
                    </div>
                  </article>
                  <article className="front-1">
                    {projectInfo.icon3}
                    <div className="">
                      <h4>{projectInfo.stack3}</h4>
                    </div>
                  </article>
                  <article className="front-1">
                    {projectInfo.icon4}
                    <div className="">
                      <h4>{projectInfo.stack4}</h4>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          {projectInfo.theme}
          <div className="projets__item-cta">
            {projectInfo.projectGit}
            {projectInfo.projectButton}
            {projectInfo.inProgress}
          </div>
        </div>
        <div className="description">
          {projectInfo.title}

          {projectInfo.context}

          {projectInfo.description}

          {projectInfo.goal1}

          {projectInfo.goal2}

          {projectInfo.goal3}

          {projectInfo.goal4}

          {projectInfo.goal5}
        </div>
      </div>
    </article>
  );
}
