import React,{Component} from "react";
import {
    ContactItem,
    ContactName,
    ContactPhone,
    BtnDelete
} from "./ContactsList.styled";

export default class ContactsList extends Component {
 
    onDelete = (id) => {
        this.props.onDeleteById(id);
    };

    render() {
        const {data} = this.props
        
      
        
        return (
            <ul>
                {data.map(contact => (
                    <ContactItem key={contact.id}>
                        <ContactName>{contact.name}</ContactName>
                        <ContactPhone>{contact.number}</ContactPhone>
                        <BtnDelete
                        onClick={()=> this.onDelete(contact.id)}    
                        type="button">Delete</BtnDelete>
                    </ContactItem>
                ))}
            </ul>
        );
}

}

