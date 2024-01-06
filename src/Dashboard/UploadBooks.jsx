import { useState } from "react";

const UploadBooks = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "History",
    "Travel",
    "Religion",
    "Art and Design",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const handleSelectedBookValue = (event) => {
    console.log(event.target.value)
    setSelectedBookCategory(event.target.value);
  };
  return (
    <div className="px-4 my-12">
      <h1 className="text-3xl font-bold mb-8">Upload A book</h1>
      <form className="flex lg:w-[780px] flex-col flex-wrap gap-4">
        <div className="flex gap-8">
          {/* first row book names */}
          <div className="lg:w-1/2">
            <div className="label">
              <span className="label-text font-bold">Book Title</span>
            </div>
            <input
              type="text"
              name="bookTitle"
              placeholder="Book Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* author name */}
          <div className="lg:w-1/2">
            <div className="label">
              <span className="label-text font-bold">Author Name</span>
            </div>
            <input
              type="text"
              name="authorName"
              placeholder="Author Name"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <div className="flex gap-8">
          {/* 2nd row book names */}
          <div className="lg:w-1/2">
            <div className="label">
              <span className="label-text font-bold">Book Image URL</span>
            </div>
            <input
              type="text"
              name="imageURL"
              placeholder="Book Image URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* author name */}
          <div className="lg:w-1/2">
            <div className="label">
              <span
                className="label-text font-bold"
                htmlFor="inputState"
                value="Book Category"
              >
                Book Image URL
              </span>
            </div>
          
            <select
              id="inputState"
              name="categoryName"
              className="w-full h-12 rounded"
              value={selectedBookCategory}
              onChange={handleSelectedBookValue}
            >
                {
                    bookCategories.map(option=><option key={option} value={option}>{option}</option>)
                }
            </select>
          </div>
        </div>
        {/* Book description */}
        <div>
            <div className="label">
              <span className="label-text font-bold">Book Description</span>
            </div>
            <textarea 
            type="text"
            name="bookDescription"
            placeholder="Write here..."
            className="input input-bordered w-full"
            required></textarea>
          </div>
          {/* Book pdf download */}
          <div >
            <div className="label">
              <span className="label-text font-bold">Book PDF URL</span>
            </div>
            <input
              type="text"
              name="bookPDFURL"
              placeholder="Book PDF URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          <button className="mt-5 bg-[#081A51] text-white py-2 rounded font-semibold">Upload Book</button>
      </form>
    </div>
  );
};

export default UploadBooks;
