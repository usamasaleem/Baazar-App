import React, { Component } from 'react'
import "./SortBar.scss";
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';


const options = [
    { key: 'PriceHeader', text: 'Price', itemType: DropdownMenuItemType.Header },
    { key: 'low_to_high', text: 'Low to High' },
    { key: 'high_to_low', text: 'High to Low' },
    // { key: 'orange', text: 'Orange', disabled: true },
    // { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    // { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
    
];

const dropdownStyles = {
    dropdown: { width: 300 }
  };


export default class SortBar extends Component {
    render() {
        return (
            <>
                <div className="SortBar">

                    <div className="SortBar-sort">
                        <h1 className="SortBar__sortTxt">Sort By</h1>
                        <Dropdown placeholder="Select an option"  options={options} styles={dropdownStyles} />
                    </div>

                    <div className="SortBar-viewIconContainer">
                        <i className="SortBar__viewIcon fas fa-th"></i>
                        <i className="SortBar__viewIcon fas fa-list"></i>
                    </div>

                </div>
            </>
        )
    }
}
