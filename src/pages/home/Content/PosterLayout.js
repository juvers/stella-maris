import React from 'react';
import PropTypes from 'prop-types';


const PosterLayout = ({ data }) => {

    return (
        <>
            <div className="row mb-5">
                <div className="col-md-4 text-justify">
                    <h3>MISSION STATEMENT</h3>
                    <p> With faith in the Triune God and collaborating with all stakeholders, we, the staff of Stella Maris Girls College, commit ourselves to offering a holistic and revolutionized education where:</p>
                    <ul style={{listStyleType: "circle"}}>
                        <li>no child is left behind;</li>
                        <li>all are inspired and prepared to embrace a life of personal excellence;</li>
                        <li>all take ownership of their individual intellectual development;</li>
                    </ul>
                    <p> within a conducive school climate where modern pedagogical skills are employed to equip and empower them for the technological advancements and global economic realities of the 21st century.</p>

                </div>


                <div className="col-md-4 text-justify">
                    <h3>VISION STATEMENT</h3>
                    <p>Nurturing future stellar women of faith and integrity who will be positive contributors and active informed citizens of their society.</p>

                    <h3>BELIEF STATEMENT</h3>
                    <p> We believe that the stars lie hidden in all our students, and when engaged in higher order thinking and problem-solving skills within an environment that is safe and nurturing, they will discover their potentials and imbibe a deep respect for God, humanity and intellectual values.</p>



                </div>
                <div className="col-md-4 px-2">
                    <a href={process.env.PUBLIC_URL + '/assets/pdf/poster.pdf'} rel="noopener noreferrer" download="SMGC-Admission-Poster.pdf"> <img src={process.env.PUBLIC_URL + '/assets/img/poster2021.jpg'} className="poster-img" alt="" /></a>
                    <p>Click image to download <strong>Admission Poster</strong></p>
                </div>

            </div>
        </>
    )
};

PosterLayout.propTypes = {
    data: PropTypes.object
}

export default PosterLayout;