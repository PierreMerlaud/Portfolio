export default function ProjectsModele({
  stackText = "STACK",
  srcImage,
  altImage,
  stack1,
  stack2,
  stack3,
  stack4,
  icon1,
  icon2,
  icon3,
  icon4,
  theme,
  projectGit,
  projectButton,
  inProgress,
  title,
  context,
  description,
  goal1,
  goal2,
  goal3,
  goal4,
  goal5,
}) {
  return (
    <article className="projets__item">
      <div className="image_description">
        <div className="image_title_link">
          <div className="stack_image">
            <div className="stack_arrow">
              <div class="arrow"></div>
              <div className="stack_title">{stackText}</div>
              <div class="arrow"></div>
            </div>
            <div className="projets__item-image">
              <img src={srcImage} alt={altImage} />
              <div className="new_div">
                <h5>{stackText}</h5>
                <div className="stack">
                  <article className="front-1">
                    {icon1}
                    <div className="">
                      <h4>{stack1}</h4>
                    </div>
                  </article>
                  <article className="front-1">
                    {icon2}
                    <div className="">
                      <h4>{stack2}</h4>
                    </div>
                  </article>
                  <article className="front-1">
                    {icon3}
                    <div className="">
                      <h4>{stack3}</h4>
                    </div>
                  </article>
                  <article className="front-1">
                    {icon4}
                    <div className="">
                      <h4>{stack4}</h4>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          {theme}
          <div className="projets__item-cta">
            {projectGit}
            {projectButton}
            {inProgress}
          </div>
        </div>
        <div className="description">
          {title}
          <br />
          <br />
          {context}
          <br />
          <br />
          {description}
          <br />
          <br />
          {goal1}
          <br />
          <br />
          {goal2}
          <br />
          <br />
          {goal3}
          <br />
          <br />
          {goal4}
          <br />
          <br />
          {goal5}
        </div>
      </div>
    </article>
  );
}
