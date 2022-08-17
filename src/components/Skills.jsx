

export const Skills = () => {
    const frontendSkills = [
        {
            title: "Javascript",
            percentage: "90%",
        },
        {
            title: "React",
            percentage: "90%",
        },
        {
            title: "Redux",
            percentage: "90%",
        },
        {
            title: "Next",
            percentage: "90%",
        },
    ];

    const backendSkills = [
        {
            title: "Node.js",
            percentage: "85%",
        },
        {
            title: "Express.js",
            percentage: "85%",
        },
        {
            title: "MongoDB",
            percentage: "85%",
        },
        {
            title: "Socket.io",
            percentage: "85%",
        },
    ];


    const SkillItem = ({ title, percentage }) => {
        return (
            <div className="skill__data mb-3">
                <div className="skill__title d-flex align-items-center justify-content-between">
                    <h6>{title}</h6>
                    <span>{percentage}</span>
                </div>

                <div className="skill__bar">
                    <span className="skill__bar-percentage" style={{ width: `${percentage}` }}></span>
                </div>
            </div>
        );
    }


    return (
        <div className="skills__wrapper d-flex gap-5">
            <div className="frontend__skill w-50">
                {frontendSkills.map((item, index) => (
                    <SkillItem
                        title={item.title}
                        percentage={item.percentage}
                        key={index}
                    />
                ))}
            </div>

            <div className="backend__skill w-50">
                {backendSkills.map((item, index) => (
                    <SkillItem
                        title={item.title}
                        percentage={item.percentage}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}