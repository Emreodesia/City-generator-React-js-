import React from "react";
const collapse = (props) => {
    return (
        <div>
            <a class="btn btn-primary" data-toggle="collapse" href={"#".concat(props.href)}  role="button" aria-expanded="false" aria-controls="collapseExample">
            Random Counrty 
            </a>
            <div class="collapse" id={props.href}>
                
                {props.children}
            </div>


        </div>

    );

};

                export default collapse;