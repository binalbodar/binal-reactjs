import React from 'react';

function Course({chacou}) {
    return (
        <>
        <div>
            {
            chacou === 'RNW1'?<p>Course Name :Android</p>:<p>Course Name :Node Js</p>
            }
        </div>
        </>
    );
}

export default Course;