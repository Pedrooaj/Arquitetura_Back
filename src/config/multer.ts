import multer from "multer";

const storage =  multer.diskStorage({
    destination: 'public/uploads',
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + file.originalname
        cb(null, uniqueName)
    }
})

export default multer({ storage })