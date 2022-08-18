
const AwardItem = ({ year, title, text }) => {
    return (
        <div className="single__award">
            <div className="award__year">{year}</div>
            <h6 className="award__title">{title} - <span>{text}</span> </h6>
        </div>
    );
}

export const Award = () => {
    return (
        <div className="award__container d-flex align-items-center flex-wrap justify-content-between">
            <div className="award__item ">
                <AwardItem
                    year="2020"
                    title="Web Developement from Scratch"
                    text="A fullstack web development bootcamp with 100% completion with project collaborations"
                />
            </div>

            <div className="award__item ">
                <AwardItem
                    year="2020"
                    title="Jobberman soft skills"
                    text="An intensive training on team collaborations, communications and emotional awareness at work"
                />
            </div>

            {/* <div className="award__item ">
                <AwardItem
                    year="2020"
                    title="Frontend Developer"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, quisquam?"
                />
            </div> */}

            {/* <div className="award__item ">
                <AwardItem
                    year="2020"
                    title="Frontend Developer"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, quisquam?"
                />
            </div> */}

        </div>
    );
}