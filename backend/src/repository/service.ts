import connectDB, { setUserRepository, setPostRepository, setPhotoRepository } from ".";

export const getUserRepository = async () => {
	await connectDB();
	const userRepo = setUserRepository();
	return userRepo;
}

export const getPostRepository = async () => {
	await connectDB();
	const userRepo = setPostRepository();
	return userRepo;
}

export const getPhotoRepository = async () => {
	await connectDB();
	const userRepo = setPhotoRepository();
	return userRepo;
}