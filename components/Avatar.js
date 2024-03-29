import Image from "next/image";

const Avatar = () => {
	// Use Next.js environment variable to check if it's in development
	const isDevelopment = process.env.NODE_ENV === "development";

	// Define URLs based on the environment
	let firstURL = isDevelopment ? "/avatar2.png" : "/portfolio/avatar2.png";
	let secondURL = "/avatar2.png";
	return (
		<div className="hidden xl:flex xl:max-w-none">
			<Image
				src={firstURL}
				width={737}
				height={778}
				alt=""
				className="translate-z-0 w-full h-full"
				onError={(e) => {
					// If there is an error loading the first URL, set the second URL
					console.error(`Error loading image: ${firstURL}`, e);
					e.target.src = secondURL;
				}}
			/>
		</div>
	);
};

export default Avatar;
