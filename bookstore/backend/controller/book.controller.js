import Book from "../model/book.model.js";

export const getBooks = async (req, res) => {
try {
    const book = await Book.find({});
    res.status(200).json({status:200,books:book});
} catch (error) {
    console.log(error)
    res.status(500).json({status:500,error:error});
}                                   
}