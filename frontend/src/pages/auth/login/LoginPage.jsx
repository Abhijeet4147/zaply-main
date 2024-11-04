import { useState } from "react";
import { Link } from "react-router-dom";
import zaply from "../../../components/svgs/zaply.png";
import { MdOutlineMail, MdPassword } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const LoginPage = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});
	
	const queryClient = useQueryClient ();

	const {mutate:loginMutation, isError, isPending, error} = useMutation({
		mutationFn: async({username,password}) =>{
			try {
			const res = await fetch("/api/auth/login",{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({username,password}),
			});
			const data = await  res.json();
			if(!res.ok) throw new Error(data.error || "Failed to login");
			console.log(data);
			return data;

		} catch (error) {
			console.error(error);
				throw error;
		}
		},
		onSuccess: () => {
			// refetch the authUser
			queryClient.invalidateQueries({ queryKey: ["authUser"] });
		},
	});



	const handleSubmit = (e) => {
		e.preventDefault();
		loginMutation(formData);
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	

	return (
		<div className='max-w-screen-xl mx-auto flex h-screen'>
			<div className='flex-1 hidden lg:flex items-center justify-center'>
				<img src={zaply} alt="Zaply Logo" className="lg:w-2/3 fill-white" />
			</div>
			<div className='flex-1 flex flex-col justify-center items-center'>
				<form className='flex gap-4 flex-col w-full max-w-md lg:max-w-lg' onSubmit={handleSubmit}>
					<img src={zaply} alt="Zaply Logo" className="hidden fill-white" />
					<h1 className='text-4xl font-extrabold text-white text-center'>{"Let's"} go.</h1>

					<label className='flex flex-col relative mb-4'>
						<input
							type='text'
							className='rounded-b-none border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 peer pt-5 pb-1 text-gray-800 placeholder:text-transparent bg-transparent'
							placeholder=' ' // Empty placeholder for the floating effect
							name='username'
							onChange={handleInputChange}
							value={formData.username}
						/>
						{/* Floating Label */}
						<span className={`absolute left-2 transition-all duration-200 ease-in-out transform origin-[0_0] ${formData.username ? '-translate-y-4 scale-75 top-1.5' : 'top-2.5 scale-100'}`}>
							<MdOutlineMail className='inline-block mr-1' /> Username
						</span>
					</label>

					<label className='flex flex-col relative mb-4'>
						<input
							type='password'
							className='rounded-b-none border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 peer pt-5 pb-1 bg-transparent'
							placeholder=' ' // Empty placeholder for the floating effect
							name='password'
							onChange={handleInputChange}
							value={formData.password}
						/>
						{/* Floating Label */}
						<span className={`absolute left-2 transition-all duration-200 ease-in-out transform origin-[0_0] ${formData.password ? '-translate-y-4 scale-75 top-1.5' : 'top-2.5 scale-100'}`}>
							<MdPassword className='inline-block mr-1' /> Password
						</span>
					</label>
            <button className='btn rounded-full btn-primary text-white'>
				{isPending ? "Loading..." : "Login"}
			</button>
					{isError && <p className='text-red-500'>{error.message}</p>}
					

					
				</form>
				{/* Link for signing up */}
				<div className='flex flex-col gap-2 mt-4'>
    <p className='text-white text-lg'>{"Don't"} have an account?</p>
    <Link to='/signup'>
        <label className='input input-bordered rounded flex items-center gap-2 w-full'>
            <span className='text-center flex-grow'>Sign up</span>
        </label>
    </Link>
</div>
			</div>
		</div>
	);
};

export default LoginPage;
