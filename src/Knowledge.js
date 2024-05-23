import React from 'react';
import './Knowledge.css';
import Img1 from './img1.png';
import Img2 from './language.png';

function Knowledge() {
    return (
        <div className="knowledge">
            <div class="heading">What I Do ?</div>
            <div class="box">
                <div class="part1">
                    <img src={Img1} alt="none" />
                </div>
                <div class="part2">
                    <div class="topicName">Data Analytics & ML</div>
                    <img src={Img2} alt="none" />
                    <div class="para">💥 Developing Models that clean, tranform and analyse raw data to discover useful information, in order to make conclusions about the data.<br/>

                        💥 Experience of working with different python Libraries like Numpy, Pandas, Matplotlib, Seaborn etc. and have knowledge of Data analysis algorithms and techniques.

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Knowledge;