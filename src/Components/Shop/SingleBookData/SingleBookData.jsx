import { useLoaderData } from "react-router-dom";

const SingleBookData = () => {
    const {_id,bookTitle} =useLoaderData()
    return (
        <div className=" px-4 lg:px-24 text-black">
            <h1>singleBook :{_id}</h1>
<p>details :{bookTitle}</p>
        </div>
    );
};

export default SingleBookData;