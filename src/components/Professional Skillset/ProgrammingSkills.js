import classes from "./programmingSkills.module.css";
import { Angular, MongoDB, FireBase, ReactJS, NodeJs, JavaScript , TypeScript, SveleteJS } from "../asset/svg/svg";
import { useSelector } from "react-redux";
const skills = [Angular,FireBase, ReactJS, JavaScript,TypeScript ,NodeJs, MongoDB, SveleteJS];
const skillNames=["Angular","Firebase","ReactJs","JavaScript","TypeScript","NodeJs","MongoDB","SveleteJS"];
const ProgrammingSkills = (props) => {

    const uiColor=useSelector(state=>state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    return (
        <div className={classes.mainCard}>
            <h1 style={{color:nonThemeColor}}>Programming <span style={{ color:uiColor}}>SkillSet</span></h1>
            <div className={classes.skillSetCard} style={{ color: nonThemeColor }}>
                {skills.map((Item, index) =>
                    <div className={classes.skillItem} style={{borderColor:uiColor}} key={index}>
                        <Item />
                        <span className={classes.skillName}>{skillNames[index]}</span>
                    </div>
                )}
            </div>
        </div>

    )
};

export default ProgrammingSkills;