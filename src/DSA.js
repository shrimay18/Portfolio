import React from 'react';
import './DSA.css';
import DSA1 from './DSA1.png';
import DSA2 from './DSA2.png';

function DSA() {
    return (
        <div className="knowledge">
            <div class="heading"></div>
            <div class="box">
                <div class="part1">
                    <img src={DSA1} alt="none" class="DSA1"/>
                </div>
                <div class="part2">
                    <div class="topicName">Data Structures & Algorithms</div>
                    <img src={DSA2} alt="none" class="img2"/>
                    <div class="para">💥 Developing Models that clean, tranform and analyse raw data to discover useful information, in order to make conclusions about the data.<br/>

                        💥 Experience of working with different python Libraries like Numpy, Pandas, Matplotlib, Seaborn etc. and have knowledge of Data analysis algorithms and techniques.

                    </div>
                </div>
            </div>
        </div>
    )
}
export default DSA;