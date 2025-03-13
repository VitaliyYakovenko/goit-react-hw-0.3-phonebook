import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Label,Input, BtnAddContact} from "./AddContacts.styled";



export default class AddContacts extends Component {
    nameId = nanoid();
    telId = nanoid();


    state = {
        name: "",
        number: "",
    }

    onInputName = (e) => {
        
        const name = e.target.name;
        const value = e.target.value;
    
        this.setState(prevState => ({
            [name]: value,
        }));
    }
   
    onAddContact = (e) => {
        e.preventDefault();
    
        this.props.onGetData(this.state);
        this.reset();
        
    }

    reset = () => {
        this.setState({ name: "" , number: ""});
    }

    render() {
    
        return (<form onSubmit={this.onAddContact}>
            <Label htmlFor={this.nameId}>Name</Label>
            <br/>
            <Input
            onChange={this.onInputName}    
            id={this.nameId} 
            value={this.state.name}    
            type="text"
            name="name"
            required
            />
            <br/>
            <Label htmlFor={this.telId}>Number</Label>
            <br/>
            <Input
            onChange={this.onInputName}    
            id={this.telId}
            value={this.state.number}    
            type="tel"
            name="number"
            required
            />
            <br/>
            <BtnAddContact type="submit">Add Contact</BtnAddContact> 
            </form>)
    };
};