import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Footer from '../components/Footer';
const BidsAndAwards = () => {
	const navigate = useNavigate();

	const miniNavbar = [
		{ label: 'Public Bidding', link: '/bids-rewards/public-bid' },
		{ label: 'Small Value', link: '/bids-rewards/small-value' },
		{ label: 'Notice Of Awards', link: '/bids-rewards/notice-of-awards' },
	];

	return (
		<div>
			<div className="flex flex-col lg:w-[1000px] m-auto pb-36 	">
				<div className="flex flex-col justify-center items-center px-3 lg:pt-5 pt-0">
					<div className="flex  font-Cinzel text-3xl justify-center items-center text-center lg:w-[935px]  w-screen 	p-5 bg-green-600 ">
						<h1> BIDS AND AWARDS</h1>
					</div>
					<div className="flex lg:flex-row flex-col items-center bg-white lg:w-[935px] w-screen lg:gap-40 drop-shadow-xl justify-center py-5 font-Cinzel text-lg">
						{miniNavbar?.map((item, key) => {
							return (
								<React.Fragment key={key}>
									<div>
										<button
											className="hover:scale-105 "
											onClick={() => {
												navigate(item?.link);
											}}
										>
											{item?.label}
										</button>
									</div>
								</React.Fragment>
							);
						})}
					</div>
					<div>
						<Outlet />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default BidsAndAwards;
