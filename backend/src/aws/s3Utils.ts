import AWS from "aws-sdk";
import dotenv from "dotenv";
import Photo from '../entity/Photo';
import path from "path";
import multer from "multer";
import multerS3 from 'multer-s3';
import Post from "../entity/Post";
dotenv.config();

import { getPhotoRepository, getPostRepository } from "../repository/service";


AWS.config.loadFromPath(path.join(__dirname, "../../config/awsconfig.json"));
let s3 = new AWS.S3();

/**
 * s3ImageUpload.single('picture')  사용하는곳에서는 이런식으로 사용한다.
 * 프론트에서 FormData를 사용해 전달하는데 그때 이미지를 넣은 key값을 파라미터로 전달해주면된다.
 */
const s3ImageUpload = (config) => multer({
	storage: multerS3({
		s3: s3,
		bucket: process.env.AWS_BUCKET_NAME,// 버켓이름
		key: function (req, file, cb) {
			const extension = path.extname(file.originalname); // 확장자
			const filename = Date.now().toString() + extension; // 파일명 전달
			const folder = config.folder ? `${config.folder}/` : '';
			cb(null, folder + filename)
		},
		acl: 'public-read', // 권한 설정
		contentType: multerS3.AUTO_CONTENT_TYPE // 파일의 메타데이터중 content-type 설정을 자동으로 맞춰줌
	})
})

const s3DeletePhoto = async (req, res, next) => {
	const postRepository = await getPostRepository();
	const photoRepository = await getPhotoRepository();
	const { postId } = req.body;
	try {
		const post = await postRepository.findById(postId);
		const photos = await photoRepository.findByPost(post);
		photos.map(async (photo) => {
			const url = photo.photo.split('/')    // video에 저장된 fileUrl을 가져옴
			const delFileName = url[url.length - 1]  // 버킷에 저장된 객체 URL만 가져옴
			const params = {
				Bucket: process.env.AWS_BUCKET_NAME + '/author',
				Key: delFileName
			}
			await s3.deleteObject(params, function (err, data) {
				if (err) {
					console.log('aws video delete error')
					console.log(err, err.stack)
					res.json({
						error: err
					})
				} else {
					console.log('aws video delete success' + data)
				}
			})
		})
		next()
	} catch (error) {
		res.json({
			error: error
		})
	}

}

export default {
	s3ImageUpload: s3ImageUpload,
	s3DeletePhoto: s3DeletePhoto
}