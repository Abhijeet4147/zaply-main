// import { Link } from "react-router-dom";
// import { useState } from "react";

// import zaply from "../../../components/svgs/zaply.png";



// import { MdOutlineMail } from "react-icons/md";
// import { FaUser } from "react-icons/fa";
// import { MdPassword } from "react-icons/md";
// import { MdDriveFileRenameOutline } from "react-icons/md";

// const SignUpPage = () => {
// 	const [formData, setFormData] = useState({
// 		email: "",
// 		username: "",
// 		fullName: "",
// 		password: "",
// 	});

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		console.log(formData);
// 	};

// 	const handleInputChange = (e) => {
// 		setFormData({ ...formData, [e.target.name]: e.target.value });
// 	};

// 	const isError = false;

// 	return (
// 		<div className='max-w-screen-xl mx-auto flex h-screen px-10'>
// 			<div className='flex-1 hidden lg:flex items-center  justify-center'>
// 				<img src={zaply} alt="Zaply Logo" className="lg:w-2/3 fill-white" />

// 			</div>
// 			<div className='flex-1 flex flex-col justify-center items-center'>
// 				<form className='lg:w-2/3  mx-auto md:mx-20 flex gap-4 flex-col' onSubmit={handleSubmit}>
					
//           <img src={zaply} alt="Zaply Logo" className="hidden fill-white" />
// 					<h1 className='text-4xl font-extrabold text-white'>Join today.</h1>
// 					<label className='input input-bordered rounded flex items-center gap-2'>
// 						<MdOutlineMail />
// 						<input
// 							type='email'
// 							className='grow'
// 							placeholder='Email'
// 							name='email'
// 							onChange={handleInputChange}
// 							value={formData.email}
// 						/>
// 					</label>
// 					<div className='flex gap-4 flex-wrap'>
// 						<label className='input input-bordered rounded flex items-center gap-2 flex-1'>
// 							<FaUser />
// 							<input
// 								type='text'
// 								className='grow '
// 								placeholder='Username'
// 								name='username'
// 								onChange={handleInputChange}
// 								value={formData.username}
// 							/>
// 						</label>
// 						<label className='input input-bordered rounded flex items-center gap-2 flex-1'>
// 							<MdDriveFileRenameOutline />
// 							<input
// 								type='text'
// 								className='grow'
// 								placeholder='Full Name'
// 								name='fullName'
// 								onChange={handleInputChange}
// 								value={formData.fullName}
// 							/>
// 						</label>
// 					</div>
// 					<label className='input input-bordered rounded flex items-center gap-2'>
// 						<MdPassword />
// 						<input
// 							type='password'
// 							className='grow'
// 							placeholder='Password'
// 							name='password'
// 							onChange={handleInputChange}
// 							value={formData.password}
// 						/>
// 					</label>
// 					<button className='btn rounded-full btn-primary text-white'>Sign up</button>
// 					{isError && <p className='text-red-500'>Something went wrong</p>}
// 				</form>
// 				<div className='flex flex-col lg:w-2/3 gap-2 mt-4'>
// 					<p className='text-white text-lg'>Already have an account?</p>
// 					<Link to='/login'>
// 						<button className='btn rounded-full btn-primary text-white btn-outline w-full'>Sign in</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default SignUpPage;




import { Link } from "react-router-dom";
import { useState } from "react";

import zaply from "../../../components/svgs/zaply.png";
import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import {useMutation,useQueryClient} from '@tanstack/react-query'
import toast from "react-hot-toast";

const SignUpPage = () => {
	const [formData, setFormData] = useState({
		email: "",
		username: "",
		fullName: "",
		password: "",
	});

	const queryClient = useQueryClient();

	const { mutate, isError, isPending, error } = useMutation({
		mutationFn: async ({ email, username, fullName, password }) => {
			try {
				const res = await fetch("/api/auth/signup", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email, username, fullName, password }),
				});

				const data = await res.json();
				if (!res.ok) throw new Error(data.error || "Failed to create account");
                // if(data.error) throw new Error(data.error);
				console.log(data);
				return data;
			} catch (error) {
				console.error(error);
				throw error;
			}
		},
		onSuccess: () => {
			toast.success("Account created successfully");

			{
				/* Added this line below, after recording the video. I forgot to add this while recording, sorry, thx. */
			}
			queryClient.invalidateQueries({ queryKey: ["authUser"] });
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault(); // page won't reload
		mutate(formData);
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	

	return (
		<div className='max-w-screen-xl mx-auto flex h-screen px-10'>
			<div className='flex-1 hidden lg:flex items-center justify-center'>
				<img src={zaply} alt="Zaply Logo" className="lg:w-2/3 fill-white" />
			</div>
			<div className='flex-1 flex flex-col justify-center items-center'>
				<form className='lg:w-2/3 mx-auto md:mx-20 flex gap-4 flex-col' onSubmit={handleSubmit}>
					<img src={zaply} alt="Zaply Logo" className="hidden fill-white" />
					<h1 className='text-4xl md:text-2xl lg:text-4xl font-semibold text-white transition-colors duration-200'>
  Join today.
</h1>

					
					{/* Email Field */}
<label className='flex flex-col relative mb-1'>
    <input
        type='email'
        className='rounded-b-none border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 peer pt-5 pb-1 bg-transparent' // Set placeholder color to transparent
        placeholder=' ' // Empty placeholder for the floating effect
        name='email'
        onChange={handleInputChange}
        value={formData.email}
    />
    {/* Floating Label */}
    <span className={`absolute left-2 text-gray-500 transition-all duration-200 ease-in-out transform origin-[0_0] ${formData.email ? '-translate-y-4 scale-100 top-1.5' : 'top-2.5 scale-100'}`}>
        <MdOutlineMail className='inline-block mr-1' /> Email
    </span>
</label>


{/* Username and Full Name Fields */}
<div className='flex gap-4 flex-wrap mb-4'>
    <label className='flex flex-col relative flex-1 mb-2'>
        <input
            type='text'
            className='rounded-b-none border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 peer pt-5 pb-1 bg-transparent'
            placeholder=' ' // Empty placeholder for the floating effect
            name='username'
            onChange={handleInputChange}
            value={formData.username}
        />
        {/* Floating Label */}
        <span className={`absolute left-1 top-2.5 text-gray-500 transition-all duration-200 ease-in-out transform origin-[0_0] ${formData.username ? '-translate-y-3 scale-100' : 'top-3 scale-100'}`}>
            <FaUser className='inline-block mr-1' /> Username
        </span>
    </label>

    <label className='flex flex-col relative flex-1 mb-2'>
        <input
            type='text'
            className='rounded-b-none border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 peer pt-5 pb-1 bg-transparent'
            placeholder=' '
            name='fullName'
            onChange={handleInputChange}
            value={formData.fullName}
        />
        {/* Floating Label */}
        <span className={`absolute left-1 top-2.5 text-gray-500 transition-all duration-200 ease-in-out transform origin-[0_0] ${formData.fullName ? '-translate-y-3 scale-100' : 'top-3 scale-100'}`}>
            <MdDriveFileRenameOutline className='inline-block mr-1' /> Full Name
        </span>
    </label>
</div>

{/* Password Field */}
<label className='flex flex-col relative mb-2'>
    <input
        type='password'
        className='rounded-b-none border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 peer pt-5 pb-1 bg-transparent'
        placeholder=' '
        name='password'
        onChange={handleInputChange}
        value={formData.password}
    />
    {/* Floating Label */}
    <span className={`absolute left-1 top-2.5 text-gray-500 transition-all duration-200 ease-in-out transform origin-[0_0] ${formData.password ? '-translate-y-3 scale-100' : 'top-3 scale-100'}`}>
        <MdPassword className='inline-block mr-1' /> Password
    </span>
</label>


					{/* Submit Button with Animation */}
					<button 
						className='btn rounded-full btn-primary text-white transition-all duration-200 transform hover:scale-105'>
						{isPending ? "Loading...": "Sign up"}
					</button>
					{isError && <p className='text-red-500 mt-2'>{error.message}</p>}
				</form>

				{/* Sign In Link with Animation */}
				<div className='flex flex-col gap-2 mt-4'>
    <p className='text-white text-lg'>Already have an account?</p>
    <Link to='/login'>
        <label className='input input-bordered rounded flex items-center gap-2 w-full cursor-pointer'>
            <span className='text-center flex-grow'>Sign in</span>
        </label>
    </Link>
</div>

			</div>
		</div>
	);
};

export default SignUpPage;
