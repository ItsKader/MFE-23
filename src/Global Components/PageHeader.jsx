import React from "react";
import '../Styles/Global Components/PageHeader.scss';
//This component should take the image, title, and subheading as input.
//in file which the component is imported in, the background image should also be imported as a variable
//and the variable then be passed as input
const PageHeader=(props)=>{
    return(
 
        <div>
            <div className="page-header" style={{backgroundImage: `url(${props.img})`}}>
                <p className="page-header--centre  page-header--subtitle">{props.subtitle}</p>
                <p className="page-header--centre page-header--title">{props.title}</p>
            </div>
        </div>

    )
}
export default PageHeader;

