function addFavoriteBook (bookName)
{
    if (bookName.includes("Great") !== false)
    {
        favoriteBooks.push(bookName);
    }
}

function printFavoriteBooks()
{
    console.log (`You currently have ${favoriteBooks.length} favourite books in your list.`);
    for (let i=0; i<favoriteBooks.length;i++)
    {
        console.log(favoriteBooks[i])
    }

}
var favoriteBooks = []; //note this is a global variable



addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");
printFavoriteBooks()

// TODO: print out favorite books
