const getTheTitles = function(books) {
    let onlyBooks = books.map(book => {
        for (let key in book){
            if (key == 'title'){
                return book[key]
            }
        }
    });
    return onlyBooks;
};



// Do not edit below this line
module.exports = getTheTitles;
