import React from "react";

const styleText = {
    color: "Crimson",
    position: "absolute",
    top: "-400px",
    left: "-450px",
    zIndex: 1,
};

const styleSpan = {
    color: "ivory",
    position: "absolute",
    top: "-330px",
    left: "-450px",
    zIndex: 1,
};

const styleText2 = {
    color: "#B42DDC",
    position: "absolute",
    top: "-320px",
    left: "-450px",
    zIndex: 1,
};

const Info = ({title, info, title2}) => {
    return (
        <>
            <h1 style={styleText} className="title"> {title} </h1>
            <span style={styleSpan} className="info"> {info} </span>
            <h2 style={styleText2} className="title2">
                {title2.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
                ))}
            </h2>
        </>
    );
}
export default Info;