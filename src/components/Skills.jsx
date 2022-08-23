

export const Skills = () => {
    const frontendSkills = [
        {
            title: "Javascript",
            percentage: "100%",
        },
        {
            title: "React and Redux",
            percentage: "100%",
        },
        {
            title: "SCSS",
            percentage: "100%",
        },
        {
            title: "HTML",
            percentage: "100%",
        },
    ];

    const backendSkills = [
        {
            title: "Node.js",
            percentage: "100%",
        },
        // {
        //     title: "Express.js",
        //     percentage: "100%",
        // },
        {
            title: "MongoDB",
            percentage: "100%",
        },
        // {
        //     title: "Socket.io",
        //     percentage: "100%",
        // },
    ];


    const SkillItem = ({ title, percentage }) => {
        return (
            <div className="skill__data mb-3">
                <div className="skill__title d-flex align-items-center justify-content-between">
                    <h6>{title}</h6>
                    {/* <span>{percentage}</span> */}
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