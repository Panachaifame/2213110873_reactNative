interface Book {
  title: String;
  genre: "fiction" | "non-fiction" | "educational";
  price: number;
}

const book: Book[] = [
  { title: "The Great Gatsby", genre: "fiction", price: 320 },
  { title: "War and Peace", genre: "fiction", price: 250 },
  { title: "Economics 101", genre: "educational", price: 400 },
  { title: "In Cold Blood", genre: "non-fiction", price: 300 },
  { title: "The Catcher in the Rye", genre: "fiction", price: 400 },
];

function filterBooks(book: Book[]): Book[] {
  return book.filter((book) => book.genre == "fiction" && book.price > 300);
}
function discountBooks(book: Book[]): Book[] {
  return book.map((book) => ({ ...book, price: book.price * 0.9 }));
}

let filterbook = filterBooks(book);
let discountBook = discountBooks(filterbook);

console.log(discountBook);
