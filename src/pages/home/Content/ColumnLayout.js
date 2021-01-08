import React from 'react';
import PropTypes from 'prop-types';

const ColumnLayout = ({data}) => {
    return(
        <>
            <div className="row mb-5">
                <div className="col-sm-12 col-md-12">
                <h2 className="text-uppercase text-center pb-2">{data.title}</h2>
                    <div className="row">
                        <div className="col-md-1 hide-img py-2">
                        <img src={process.env.PUBLIC_URL + '/assets/img/team/sis.jpg'} width="85px" alt=""/>
                        </div>
                        <div className="col-md-11 col-sm-12">
                        <p className="text-justify f-md">{data.content}</p>
                        </div>
                    </div>          
                    <p className="text-justify f-md">{data?.content2}</p>
                    <p className="text-justify f-md">{data?.content3}</p>
                    <p className="f-md">{data?.signature}</p>
                    <p className="f-md">{data?.office}</p>

                </div>
            </div>
        </>
    )
};

ColumnLayout.propTypes={
    data: PropTypes.object
}

export default ColumnLayout;