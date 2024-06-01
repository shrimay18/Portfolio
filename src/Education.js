import React from 'react';
import EducationPart1 from './EducationPart1';
import Degree
 from './Degree';
import Certification from './Certification'; 
const Education = () => {
    return (
        <div id="education">
            <EducationPart1 />
            <Degree />
            <Certification />
        </div>
    );
}
export default Education;