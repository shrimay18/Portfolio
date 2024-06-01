import React from 'react';
import EduImg1 from './Education1.png';
import EduImg2 from './Education2.png';
import './EducationPart1.css';

function EducationPart1(){
    return(
        <div class="EduPart1">
            <img src={EduImg1} alt="none" class="image1Edu" />
            <div class="eduDesc">
                <div class="eduDescHeading">Competitive Programming</div>
                <img src={EduImg2} alt="none" class="image2Edu" />
            </div>
        </div>
    );
}

export default EducationPart1;