import React from 'react';
import brand1 from '../../../images/brands/brand1.png'
import brand2 from '../../../images/brands/brand2.png'
import brand3 from '../../../images/brands/brand3.jfif'
const TopBrand = () => {
    return (
        <>
          
                        <div className="col-md-4" style={{boxShadow:'2px 2px 16px black', borderRadius:'6px'}}>
                                <img style={ { width: '100%', height:'200px' } } src={ brand1 } alt="" />
                                <h4 className="text-center">TOYOTA</h4>
                        </div>
                        <div className="col-md-4" style={{boxShadow:'2px 2px 16px black', borderRadius:'6px'}}>
                                <img style={ { width: '100%' } } src={ brand2 } alt="" />
                                <h4 className="text-center">HONDA</h4>
                        </div>
                        <div className="col-md-4" style={{boxShadow:'2px 2px 16px black', borderRadius:'6px'}}>
                                <img style={ { width: '100%' } } src={ brand3 } alt="" />
                                <h4 className="text-center">BMW</h4>
                        </div>
    
               
        </>
    );
};

export default TopBrand;