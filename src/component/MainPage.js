import React from 'react';
import CategoryCard from './CategoryCard';
import SubCategoryCard from './SubCategoryCard';
import './MainPage.css';

function MainPage(props) {
    let breadCrumbsData = [];
    breadCrumbsData = props.breadCrumbs;
    const handleBreadCrumbs = (index) => {
        if(index === 0){
            props.setSelectedSubCategory([]);
            props.setCurrentPage('CATEGORY')
            props.setbreadCrumbs([
                'Equipment Catalog'
              ]);
        }
    }
    return (
        <div className="mainPage_alternative">
            {
                (props.CurrentPage === 'HOME')?
                <div className="mainPage__container">
            <h3>
             WELCOME TO
            </h3>
            <h3>
            RENTAL MANAGEMENT SYSTEM
            </h3>
            <p>
                Please select Location
            </p>
            </div>
            :
            <div>

                <div className="mainPage__breadcrumbs">
                {
                    breadCrumbsData.map((val, index) => {
                        return (
                        <>
                        {(index!==0)?' / ':''}
                        <span className="mainPage__anchor" key={index}>
                            <a href="#blank" className="mainPage__breadCrumbsLink" onClick={()=> handleBreadCrumbs(index)}>
                                {val}
                            </a>
                            </span>
                        </>
                    );
                })} 
                    </div>

                    {
                        (props.CurrentPage === 'CATEGORY')?

                        <div className="mainPage__cardHolder">
                            {props.selectedCategory.categories.map((val, index) => {
                                return (
                                    <CategoryCard key={index} data={val} setSelectedSubCategory={props.setSelectedSubCategory} CurrentPage={props.CurrentPage} setCurrentPage={props.setCurrentPage} setbreadCrumbs={props.setbreadCrumbs} breadCrumbs={props.breadCrumbs}/>
                                );
                            })}
                    </div>

                    :
                    (props.CurrentPage === 'SUBCATEGORY')?
                        <div className="mainPage__cardHolder mainPage__subCategory">
                        {props.selectedSubCategory.map((val, index) => {
                            return (
                                <SubCategoryCard key={index} data={val} />
                            );
                        })}
                    </div>
                    : null
}
                    
                </div>
              
            }
        
         </div>
    )
}

export default MainPage