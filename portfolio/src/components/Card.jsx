
export default function Card({data}){

    const {title , description , img , technologies , github} = data;

    return (
        <div className="project-card">
        <img src={img} alt={title} className="project-image" />
        <div className="project-details">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <div className="project-tech">
            <ul>
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <a href={github} target="_blank" rel="noopener noreferrer" className="github-link">
            GitHub Link
          </a>
        </div>
      </div>
    );
}