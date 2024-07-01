//proyectos web
import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Webs = () => {

    const WebProjectsArray = [
        {
            Id: 0,
            Name: `Accordion Item #1`,
            Description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.`,
            Img: ``,
            Link: ``
        },
        {
            Id: 1,
            Name: `Accordion Item #2`,
            Description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.`,
            Img: ``,
            Link: ``
        },
        {
            Id: 2,
            Name: `Accordion Item #3`,
            Description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.`,
            Img: ``,
            Link: ``
        },
    ];

    return(
    <div className="row">
        <Accordion className="mt-4" defaultActiveKey="0" flush>
            {WebProjectsArray.map((Element) => {
                return (
                    <Accordion.Item eventKey={Element.Id}>
                        <Accordion.Header>{Element.Name}</Accordion.Header>
                        <Accordion.Body>
                            {Element.Description}
                        </Accordion.Body>
                    </Accordion.Item>
                );
            })}
        </Accordion>
    </div>
    )
}

export default Webs;  
