//purpose = render list of books
//upgraded to container because have direct access to react-redux
//aware of state within redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        //wire list of books on list of bookds
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
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

//anything returned from this will end up as props 
    //on the BookList container
function mapDispatchToProps(dispatch){
    //whenever selectBook is called, the reuslt should be passed
    //to all of our reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch)
}

//connect takes the a function [mapStateToProps, etc] and a component [BookList] 
    //and produces a container [smartComponent]
//container needs to know about this new dispatch [mapDispatchToProps], 
    //ie selectBook avaliable as prop
//when state changes in app connect re-renders
export default connect(mapStateToProps, mapDispatchToProps)(BookList);