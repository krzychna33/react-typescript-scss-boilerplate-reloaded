import * as React from "react";
import catImage from "../../assets/img/cat.jpg";
import * as style from "./style.scss"

const SampleComponent: React.FC<{}> = () => {
    return (
        <div>
            <img src={catImage} className={style.catImage}/>
        </div>
    )
};

export default SampleComponent;