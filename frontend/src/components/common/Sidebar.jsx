

// import { MdHomeFilled } from "react-icons/md";
// import { IoNotifications } from "react-icons/io5";
// import { FaUser } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { BiLogOut } from "react-icons/bi";
// import zaply from "../../components/svgs/zaply.png";



// const Sidebar = () => {
// 	const data = {
// 		fullName: "John Doe",
// 		username: "johndoe",
// 		profileImg: "/avatars/boy1.png",
// 	};

// 	return (
// 		<div className='md:flex-[2_2_0] w-18 max-w-52'>
// 			<div className='sticky top-0 left-0 h-screen flex flex-col border-r border-gray-700 w-20 md:w-full'>
// 				<Link to='/' className='flex justify-center md:justify-start'>
//                 <img src={zaply} alt="Zaply Logo" className="px-2 w-15 h-16 rounded-full object-contain hover:bg-stone-900 transition-all duration-300" />

					
// 				</Link>
// 				<ul className='flex flex-col gap-3 mt-4'>
// 					<li className='flex justify-center md:justify-start'>
// 						<Link
// 							to='/'
// 							className='flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
// 						>
// 							<MdHomeFilled className='w-8 h-8' />
// 							<span className='text-lg hidden md:block'>Home</span>
// 						</Link>
// 					</li>
// 					<li className='flex justify-center md:justify-start'>
// 						<Link
// 							to='/notifications'
// 							className='flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
// 						>
// 							<IoNotifications className='w-6 h-6' />
// 							<span className='text-lg hidden md:block'>Notifications</span>
// 						</Link>
// 					</li>

// 					<li className='flex justify-center md:justify-start'>
// 						<Link
// 							to={`/profile/${data?.username}`}
// 							className='flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
// 						>
// 							<FaUser className='w-6 h-6' />
// 							<span className='text-lg hidden md:block'>Profile</span>
// 						</Link>
// 					</li>
// 				</ul>
// 				{data && (
// 					<Link
// 						to={`/profile/${data.username}`}
// 						className='mt-auto mb-10 flex gap-2 items-start transition-all duration-300 hover:bg-[#181818] py-2 px-4 rounded-full'
// 					>
// 						<div className='avatar hidden md:inline-flex'>
// 							<div className='w-8 rounded-full'>
// 								<img src={data?.profileImg || "/avatar-placeholder.png"} />
// 							</div>
// 						</div>
// 						<div className='flex justify-between flex-1'>
// 							<div className='hidden md:block'>
// 								<p className='text-white font-bold text-sm w-20 truncate'>{data?.fullName}</p>
// 								<p className='text-slate-500 text-sm'>@{data?.username}</p>
// 							</div>
// 							<BiLogOut className='w-5 h-5 cursor-pointer' />
// 						</div>
// 					</Link>
// 				)}
// 			</div>
// 		</div>
// 	);
// };
// export default Sidebar;

import { MdHomeFilled } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import zaply from "../../components/svgs/zaply.png";

const Sidebar = () => {
	const data = {
		fullName: "John Doe",
		username: "johndoe",
		profileImg: "/avatars/boy1.png",
	};

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
							to={`/profile/${data?.username}`}
							className='flex gap-3 items-center bg-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 transition-all rounded-lg duration-300 py-3 pl-4 pr-6 max-w-fit cursor-pointer hover:scale-105 shadow-lg hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]'
						>
							<FaUser className='w-6 h-6 text-indigo-400' />
							<span className='text-lg hidden md:block text-gray-200 font-medium'>Profile</span>
						</Link>
					</li>
				</ul>
				{data && (
					<Link
	to={`/profile/${data.username}`}
	className='mt-auto mb-6 flex gap-2 items-center transition-all duration-300 hover:bg-[#222831] py-2 px-3 rounded-md shadow-md hover:shadow-[0_0_8px_rgba(255,255,255,0.1)]'
>
	<div className='avatar hidden md:inline-flex'>
		<div className='w-8 rounded-full border border-gray-500 shadow-sm'>
			<img src={data?.profileImg || "/avatar-placeholder.png"} alt="User Avatar"/>
		</div>
	</div>
	<div className='flex-1 hidden md:block'>
		<p className='text-white font-medium text-xs truncate'>{data?.fullName}</p>
		<p className='text-slate-400 text-xs'>@{data?.username}</p>
	</div>
	<BiLogOut className='w-4 h-4 text-gray-400 hover:text-red-500 transition-colors duration-300' />
</Link>
				)}
			</div>
		</div>
	);
};

export default Sidebar;
