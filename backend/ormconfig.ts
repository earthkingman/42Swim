import dotenv from "dotenv";
dotenv.config();

export = {
<<<<<<< HEAD
	type: "mysql",
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_PORT,
	username: process.env.MYSQL_USER,
	password: process.env.MYSQL_ROOT_PASSWORD,
	database: process.env.MYSQL_DATABASE,
	synchronize: false,
	logging: false,
	entities: ["src/entity/**/*.ts"],
	migrations: ["src/migration/**/*.ts"],
	subscribers: ["src/subscriber/**/*.ts"],
	cli: {
		entitiesDir: "src/entity",
		migrationsDir: "src/migration",
		subscribersDir: "src/subscriber",
	},
=======
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
>>>>>>> d0ed51b1b412a21de452cd54f4edcf28a9afa306
};
