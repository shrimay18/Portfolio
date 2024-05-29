import React from 'react';
import './WebDev.css';
import htmlcss from './htmlcss.png';
import names from './names.png';

function WebDev() {
    return (
        <div className="knowledge">
            <div class="heading"> </div>
            <div class="box">
                <div class="part1">
                    <div class="topicName">Web Development</div>
                    <img src={names} alt="none" />
                    <div class="para">💥 Developing Models that clean, tranform and analyse raw data to discover useful information, in order to make conclusions about the data.<br/>

                        💥 Experience of working with different python Libraries like Numpy, Pandas, Matplotlib, Seaborn etc. and have knowledge of Data analysis algorithms and techniques.

                    </div>
                </div>
                <div class="part2">
                    <img src={htmlcss} alt="none" class="imagehtmlcss" />
                </div>
            </div>
        </div>
    )
}
export default WebDev;