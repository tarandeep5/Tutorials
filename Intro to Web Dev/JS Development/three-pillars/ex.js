//this keyword is used to indicate a specific instance

function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}

class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}
	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}
	printFavoriteBooks() {
		console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
		for (let bookName of this.favoriteBooks) { 
			console.log(bookName);
		}
	}
}	
function loadBooks(theBookshelf) {
	fakeAjax(BOOK_API, function onBooks(booknames){
		for(let i =0; i<booknames.length; i++){
			theBookshelf.addFavoriteBook(booknames[i]);
		}
		theBookshelf.printFavoriteBooks;
	});
	// TODO: call fakeAjax( .. );
}


const BOOK_API = "https://some.url/api"; //changed from var to const

var theBooks = new Bookshelf;
loadBooks(theBooks);

