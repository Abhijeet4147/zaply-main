// import { CiImageOn } from "react-icons/ci";
// import { BsEmojiSmileFill } from "react-icons/bs";
// import { useRef, useState } from "react";
// import { IoCloseSharp } from "react-icons/io5";

// const CreatePost = () => {
// 	const [text, setText] = useState("");
// 	const [img, setImg] = useState(null);

// 	const imgRef = useRef(null);

// 	const isPending = false;
// 	const isError = false;

// 	const data = {
// 		profileImg: "/avatars/boy1.png",
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		alert("Post created successfully");
// 	};

// 	const handleImgChange = (e) => {
// 		const file = e.target.files[0];
// 		if (file) {
// 			const reader = new FileReader();
// 			reader.onload = () => {
// 				setImg(reader.result);
// 			};
// 			reader.readAsDataURL(file);
// 		}
// 	};

// 	return (
// 		<div className='flex p-4 items-start gap-4 border-b border-gray-700'>
// 			<div className='avatar'>
// 				<div className='w-8 rounded-full'>
// 					<img src={data.profileImg || "/avatar-placeholder.png"} />
// 				</div>
// 			</div>
// 			<form className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>
// 				<textarea
// 					className='textarea w-full p-0 text-lg resize-none border-none focus:outline-none  border-gray-800'
// 					placeholder='What is happening?!'
// 					value={text}
// 					onChange={(e) => setText(e.target.value)}
// 				/>
// 				{img && (
// 					<div className='relative w-72 mx-auto'>
// 						<IoCloseSharp
// 							className='absolute top-0 right-0 text-white bg-gray-800 rounded-full w-5 h-5 cursor-pointer'
// 							onClick={() => {
// 								setImg(null);
// 								imgRef.current.value = null;
// 							}}
// 						/>
// 						<img src={img} className='w-full mx-auto h-72 object-contain rounded' />
// 					</div>
// 				)}

// 				<div className='flex justify-between border-t py-2 border-t-gray-700'>
// 					<div className='flex gap-1 items-center'>
// 						<CiImageOn
// 							className='fill-primary w-6 h-6 cursor-pointer'
// 							onClick={() => imgRef.current.click()}
// 						/>
// 						<BsEmojiSmileFill className='fill-primary w-5 h-5 cursor-pointer' />
// 					</div>
// 					<input type='file' hidden ref={imgRef} onChange={handleImgChange} />
// 					<button className='btn btn-primary rounded-full btn-sm text-white px-4'>
// 						{isPending ? "Posting..." : "Post"}
// 					</button>
// 				</div>
// 				{isError && <div className='text-red-500'>Something went wrong</div>}
// 			</form>
// 		</div>
// 	);
// };
// export default CreatePost;

import { CiImageOn } from "react-icons/ci";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const CreatePost = () => {
	const [text, setText] = useState("");
	const [img, setImg] = useState(null);

	const imgRef = useRef(null);

	const isPending = false;
	const isError = false;

	const data = {
		profileImg: "/avatars/boy1.png",
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Post created successfully");
	};

	const handleImgChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setImg(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className='flex p-4 items-start gap-4 border-b border-gray-700  shadow-md'>
			<div className='avatar'>
				<div className='w-10 rounded-full overflow-hidden'>
					<img src={data.profileImg || "/avatar-placeholder.png"} alt="User Avatar" />
				</div>
			</div>
			<form className='flex flex-col gap-3 w-full' onSubmit={handleSubmit}>
				<textarea
					className='w-full p-2 text-lg resize-none  rounded-lg focus:outline-none focus:ring-0 focus:ring-blue-100 placeholder-gray-500 bg-transparent'
					placeholder="What's on your mind?"
					value={text}
					onChange={(e) => setText(e.target.value)}
					rows={3}
				/>
				{img && (
					<div className='relative w-64 mx-auto'>
						<IoCloseSharp
							className='absolute top-1 right-1 text-gray-600 bg-white rounded-full p-1 cursor-pointer border border-gray-300 hover:bg-gray-100 transition-all'
							onClick={() => {
								setImg(null);
								imgRef.current.value = null;
							}}
						/>
						<img src={img} className='w-full h-48 object-cover rounded-lg border border-gray-800' alt="Selected" />
					</div>
				)}

				<div className='flex justify-between border-t-[0.1px] items-center  pt-3 border-gray-700 '>
					<div className='flex gap-3 items-center text-gray-500'>
						<CiImageOn
							className='cursor-pointer w-6 h-6 hover:text-blue-500 transition-colors'
							onClick={() => imgRef.current.click()}
						/>
						<BsEmojiSmileFill className='cursor-pointer w-6 h-6 hover:text-yellow-500 transition-colors' />
					</div>
					<input type='file' accept='image/*' hidden ref={imgRef} onChange={handleImgChange} />
					<button
						className='bg-blue-500 text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-blue-600 transition-all'
					>
						{isPending ? "Posting..." : "Post"}
					</button>
				</div>
				{isError && <div className='text-red-500 text-sm mt-2'>Something went wrong. Please try again.</div>}
			</form>
		</div>
	);
};

export default CreatePost;

