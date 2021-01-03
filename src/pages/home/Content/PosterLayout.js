import React from 'react';
import PropTypes from 'prop-types';


const PosterLayout = ({ data }) => {

    return (
        <>
            <div className="row mb-5">
                <div className="col-md-12">
                    <h2 className="text-uppercase text-center pb-2">{data.title}</h2>
                </div>

                <div className="col-md-4">   
                            <a href={process.env.PUBLIC_URL + '/assets/pdf/smgc.pdf'} rel="noopener noreferrer" download="admission.pdf"> <img src={process.env.PUBLIC_URL + '/assets/img/team/sis.jpg'} className="poster-img" alt=""/></a>      
                            <p>Click image to download admission poster</p>            
                </div>
                <div className="col-md-8">
                    <p className="text-justify">{data.content}</p>
                </div>

            </div>
        </>
    )
};

PosterLayout.propTypes = {
    data: PropTypes.object
}

export default PosterLayout;