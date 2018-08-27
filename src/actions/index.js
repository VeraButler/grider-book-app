function selectBook(book) {
    //Select book is an ActionCreator, nees to return actions,
    //an object with a type property
    //type & payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

export {selectBook};