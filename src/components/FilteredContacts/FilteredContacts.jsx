import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Input , Label} from "./FilteredContacts.styled";


export default class FilteredContacts extends Component {
    labelId = nanoid();
   
    onChangeName = (e) => {
        this.props.onFilter(e);
    };
    


    render() {
        return (<>
            <Label htmlFor={this.labelId}>Enter contact name</Label>
            <Input
            id={this.labelId}
            onChange={this.onChangeName}
            type="text"
            placeholder="cat"
            value={this.props.filter}  
        />
        </>)
    }
};