const qrCode = require('qrcode');
const path = require('path');

const root = path.resolve(__dirname);

async function createQrCode({
  outPutPath = `${root}/qrCode.png`,
  encodeText = 'https://photo-friendzy.vercel.app/',
}: {
  outPutPath?: string;
  encodeText?: string;
} = {}) {
  return new Promise<void>((resolve, reject) => {
    qrCode.toFile(
      outPutPath,
      encodeText,
      {
        errorCorrectionLevel: 'H',
      },
      (error: Error) => {
        if (error) reject(error);
        resolve();
      }
    );
  });
}

async function generate() {
  try {
    await createQrCode();
  } catch (error) {
    console.error(error);
  }
}

generate();
