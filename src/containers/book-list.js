//purpose = render list of books
//upgraded to container because have direct access to react-redux
//aware of state within redux
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        //wire list of books on list of bookds
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            )
        });
    }
    render() {
        return (
            <ul className = "list-group col-sm-4">
                {this.renderList()}
            </ul>        
        );
    }
}

//mapStateToProps -- take application state as argument --> .props within book list
function mapStateToProps(state) {
    //whatever gets returned will show up as props in book-list
    return {
        books: state.books
    }
}

//connect takes the a function [mapStateToProps] and a component [BookList] and produces a container [smartComponent]
//when state changes in app connect re-renders
export default connect(mapStateToProps)(BookList);