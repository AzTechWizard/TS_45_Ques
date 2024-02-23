// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface Book {
    title: string,
    author: string,
    pub_Year: number,
    genre: string
};

const Book1: Book ={
    title: "Hound of Baskervilles",
    author: "Arthur Conan Doyle",
    pub_Year: 1902,
    genre: "crime fiction, mystery"
};
console.log(Book1);
export{}