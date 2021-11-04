import preloader from "../../../assets/images/loader.gif";
import React from "react";
import s from "../Preloader/Preloader.module.css";

let Preloader = (props) => {
    return <div className={s.preload} >
        <img  src={preloader}/>
    </div>

}

export default Preloader;