import { MdHomeFilled } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import zaply from "../../components/svgs/zaply.png";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Sidebar = () => {

	const queryClient = useQueryClient();
	const {mutate:logout} = useMutation({
		mutationFn: async() =>{
			try {
				const res= await fetch("/api/auth/logout",{
					method: "POST",				
				})
				const data = await res.json();
				if(!res.ok){
						throw new Error(data.error || "Something went wrong");
						
					}
			} catch (error) {
				throw new Error(error);
			}
		},
		onSuccess:() =>{
			queryClient.invalidateQueries({ queryKey: ["authUser"] });
		},
		onError: () => {
			toast.error("Logout failed");
		},
	})
	const { data: authUser } = useQuery({ queryKey: ["authUser"] });

	return (
		<div className='md:flex-[2_2_0] w-18 max-w-52'>
			<div className='sticky top-0 left-0 h-screen flex flex-col backdrop-blur-md bg-opacity-30 bg-gray-800 shadow-lg border-r border-gray-600 w-20 md:w-full'>
				<Link to='/' className='flex justify-center md:justify-start p-6'>
					<img 
						src={zaply} 
						alt="Zaply Logo" 
						className="px-2 w-14 h-14 rounded-full object-contain transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
					/>
				</Link>
				<ul className='flex flex-col gap-6 mt-8'>
					<li className='flex justify-center md:justify-start'>
						<Link
							to='/'
							className='flex gap-3 items-center bg-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 transition-all rounded-lg duration-300 py-3 pl-4 pr-6 max-w-fit cursor-pointer hover:scale-105 shadow-lg hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]'
						>
							<MdHomeFilled className='w-7 h-7 text-indigo-400' />
							<span className='text-lg hidden md:block text-gray-200 font-medium'>Home</span>
						</Link>
					</li>
					<li className='flex justify-center md:justify-start'>
						<Link
							to='/notifications'
							className='flex gap-3 items-center bg-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 transition-all rounded-lg duration-300 py-3 pl-4 pr-6 max-w-fit cursor-pointer hover:scale-105 shadow-lg hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]'
						>
							<IoNotifications className='w-6 h-6 text-indigo-400' />
							<span className='text-lg hidden md:block text-gray-200 font-medium'>Notifications</span>
						</Link>
					</li>
					<li className='flex justify-center md:justify-start'>
						<Link
							to={`/profile/${authUser?.username}`}
							className='flex gap-3 items-center bg-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 transition-all rounded-lg duration-300 py-3 pl-4 pr-6 max-w-fit cursor-pointer hover:scale-105 shadow-lg hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]'
						>
							<FaUser className='w-6 h-6 text-indigo-400' />
							<span className='text-lg hidden md:block text-gray-200 font-medium'>Profile</span>
						</Link>
					</li>
				</ul>
				{authUser && (
					<Link
	to={`/profile/${authUser.username}`}
	className='mt-auto mb-6 flex gap-2 items-center transition-all duration-300 hover:bg-[#222831] py-2 px-3 rounded-md shadow-md hover:shadow-[0_0_8px_rgba(255,255,255,0.1)]'
>
	<div className='avatar hidden md:inline-flex'>
		<div className='w-8 rounded-full border border-gray-500 shadow-sm'>
			<img src={authUser?.profileImg || "/avatar-placeholder.png"} alt="User Avatar"/>
		</div>
	</div>
	<div className='flex-1 hidden md:block'>
		<p className='text-white font-medium text-xs truncate'>{authUser?.fullName}</p>
		<p className='text-slate-400 text-xs'>@{authUser?.username}</p>
	</div>
	<BiLogOut className='w-4 h-4 text-gray-400 hover:text-red-500 transition-colors duration-300' 
	onClick={(e) =>{e.preventDefault();
		logout();

	}}
	/>
</Link>
				)}
			</div>
		</div>
	);
};

export default Sidebar;
