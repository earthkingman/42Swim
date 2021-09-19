import { getConnectionOptions, createConnection, Connection } from "typeorm";

import UserRepository from "./UserRepository"
import PostRepository from "./PostRepository"
import PhotoRepository from "./PhotoRepository"

let connection: Connection = undefined;

const connectDB = async () => {
	if (connection !== undefined) return connection;

	const connectionOptions = await getConnectionOptions();
	connection = await createConnection({
		...connectionOptions,
		name: 'default',
	})
	return connection;
}

export const setUserRepository = (): UserRepository =>
	connection.getCustomRepository(UserRepository);

export const setPostRepository = (): PostRepository =>
	connection.getCustomRepository(PostRepository);

export const setPhotoRepository = (): PhotoRepository =>
	connection.getCustomRepository(PhotoRepository);

export default connectDB;