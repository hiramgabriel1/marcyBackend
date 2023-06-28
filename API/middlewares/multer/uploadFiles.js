import multer from "multer";

export const uploadFiles = () => {
  // objeto de multer para configuar donde se guardará el archivo
  const storage = multer.diskStorage({
    // donde se almacenará el archivo
    destination: "./uploads",
    filename: (_req, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`
      cb(null, fileName);
    },
  });

  let upload = multer({ 
    storage: storage,
    fileFilter: (_req, _file, cb)=>{
      cb(null, true)
    }

    // & todo: en el post el file tendrá como key "files"
  }).array("files", 100)

  return upload;
};