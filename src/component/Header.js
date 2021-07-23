import React, { useEffect, useState } from 'react';
import './Header.css';
import Dropdown from 'react-multilevel-dropdown';
import './Header.css';



const Header = (props) => {
    console.log(props)
    const [locationData, setLocationData] = useState([])
    const routeToCategory = (locationIndex,branchIndex) =>{
        console.log('Boom'+locationIndex,branchIndex);
        
        let currentCategorySelection = locationData[locationIndex]['branches'][branchIndex];
        props.setselectedCategory(currentCategorySelection);
        props.setCurrentPage('CATEGORY');
        props.setbreadCrumbs([
                'Equipment Catalog'
              ]);
    }
    useEffect(() => {
        setLocationData(props.catalogData.locations)
    }, [props])
    return (
        <>
            <div className="header__container text-light bg-dark">
                <div className="row">
                    <div className="col-md header__heading">
                        RENTAL MANAGEMENT SYSTEM
                    </div> 
                    <div className="col-md-5 header__location">
                    <Dropdown title='Select Location'>
                        <div >
                        {locationData.map((item,index) => {
                    return (
                        <Dropdown.Item key={index}
                        title={item.name}
                        >{item.name}
                            <Dropdown.Submenu>
                            {
                                item['branches'].map((branch,branchIndex)=>{
                                    return(
                                        <Dropdown.Item key={branchIndex} onClick={() => routeToCategory(index,branchIndex)}>
                                            {branch.name}
                                        </Dropdown.Item>
                                    )
                                })
                            }
                            </Dropdown.Submenu>
                          </Dropdown.Item>
                    )
                })}
                        </div>
                        </Dropdown>
                    </div>  
                    <div className="col-md"/> 
                </div>
            </div>
        </>
    )
}

export default Header
