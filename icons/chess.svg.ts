// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 503, 459, 495, 455, 487, 451, 480, 448,
  0, 480, 442, 480, 437, 480, 432,
  0, 480, 427, 478, 423, 475, 420,
  0, 472, 417, 468, 416, 464, 416,
  0, 421, 416, 378, 416, 336, 416,
  0, 331, 416, 327, 417, 324, 420,
  0, 321, 423, 320, 427, 320, 432,
  0, 320, 437, 320, 442, 320, 448,
  0, 312, 451, 304, 455, 296, 459,
  0, 291, 462, 288, 467, 287, 473,
  0, 287, 481, 288, 488, 288, 496,
  0, 288, 500, 289, 504, 292, 507,
  0, 295, 510, 299, 512, 304, 512,
  0, 368, 512, 432, 512, 496, 512,
  0, 500, 512, 504, 510, 507, 507,
  0, 510, 504, 512, 500, 512, 496,
  0, 512, 488, 512, 481, 512, 473,
  0, 512, 467, 508, 462, 503, 459,
  0, 503, 459, 503, 459, 503, 459,
  1, 384, 304, 384, 298, 387, 293, 392, 290,
  0, 396, 287, 403, 287, 408, 290,
  0, 412, 293, 416, 298, 416, 304,
  0, 416, 314, 416, 325, 416, 336,
  0, 405, 336, 394, 336, 384, 336,
  0, 384, 325, 384, 314, 384, 304,
  1, 339, 301, 338, 329, 337, 356, 336, 384,
  0, 378, 384, 421, 384, 463, 384,
  0, 462, 356, 461, 329, 460, 301,
  0, 468, 294, 476, 287, 484, 281,
  0, 491, 274, 496, 265, 496, 256,
  0, 496, 237, 496, 217, 496, 198,
  0, 496, 196, 495, 194, 494, 193,
  0, 493, 192, 491, 192, 490, 192,
  0, 481, 192, 472, 192, 463, 192,
  0, 462, 192, 460, 192, 459, 193,
  0, 458, 194, 457, 196, 457, 198,
  0, 457, 206, 457, 215, 457, 224,
  0, 449, 224, 441, 224, 432, 224,
  0, 432, 215, 432, 206, 432, 198,
  0, 432, 196, 432, 194, 431, 193,
  0, 430, 192, 428, 192, 426, 192,
  0, 408, 192, 391, 192, 373, 192,
  0, 371, 192, 369, 192, 368, 193,
  0, 367, 194, 367, 196, 367, 198,
  0, 367, 206, 367, 215, 367, 224,
  0, 358, 224, 350, 224, 342, 224,
  0, 342, 215, 342, 206, 342, 198,
  0, 342, 196, 341, 194, 340, 193,
  0, 339, 192, 337, 192, 336, 192,
  0, 327, 192, 318, 192, 310, 192,
  0, 308, 192, 306, 192, 305, 193,
  0, 304, 194, 304, 196, 304, 198,
  0, 304, 217, 304, 237, 304, 256,
  0, 304, 266, 308, 274, 315, 280,
  0, 323, 287, 331, 294, 339, 301,
  1, 247, 459, 239, 455, 231, 451, 224, 448,
  0, 224, 442, 224, 437, 224, 432,
  0, 224, 427, 222, 423, 219, 420,
  0, 216, 417, 212, 416, 208, 416,
  0, 154, 416, 101, 416, 48, 416,
  0, 43, 416, 39, 417, 36, 420,
  0, 33, 423, 32, 427, 32, 432,
  0, 32, 437, 32, 442, 32, 448,
  0, 24, 451, 16, 455, 8, 459,
  0, 3, 462, 0, 467, 0, 473,
  0, 0, 481, 0, 488, 0, 496,
  0, 0, 500, 1, 504, 4, 507,
  0, 7, 510, 11, 512, 16, 512,
  0, 90, 512, 165, 512, 240, 512,
  0, 244, 512, 248, 510, 251, 507,
  0, 254, 504, 256, 500, 256, 496,
  0, 256, 488, 256, 481, 256, 473,
  0, 256, 467, 252, 462, 247, 459,
  0, 247, 459, 247, 459, 247, 459,
  1, 74, 208, 70, 208, 67, 208, 64, 208,
  0, 59, 208, 55, 209, 52, 212,
  0, 49, 215, 48, 219, 48, 224,
  0, 48, 229, 48, 234, 48, 240,
  0, 48, 244, 49, 248, 52, 251,
  0, 55, 254, 59, 256, 64, 256,
  0, 69, 256, 74, 256, 79, 256,
  0, 79, 299, 74, 342, 64, 383,
  0, 106, 383, 149, 383, 192, 384,
  0, 181, 342, 176, 299, 176, 256,
  0, 181, 256, 186, 256, 192, 256,
  0, 196, 256, 200, 254, 203, 251,
  0, 206, 248, 208, 244, 208, 240,
  0, 208, 234, 208, 229, 208, 224,
  0, 208, 219, 206, 215, 203, 212,
  0, 200, 209, 196, 208, 192, 208,
  0, 188, 208, 185, 208, 182, 208,
  0, 193, 177, 204, 147, 215, 117,
  0, 217, 112, 217, 107, 214, 102,
  0, 211, 98, 206, 95, 200, 96,
  0, 181, 96, 162, 96, 144, 96,
  0, 144, 85, 144, 74, 144, 64,
  0, 152, 64, 160, 64, 168, 64,
  0, 170, 64, 172, 63, 173, 61,
  0, 175, 60, 176, 58, 176, 56,
  0, 176, 50, 176, 45, 176, 40,
  0, 176, 37, 175, 35, 173, 34,
  0, 172, 32, 170, 32, 168, 32,
  0, 160, 32, 152, 32, 144, 32,
  0, 144, 24, 144, 16, 144, 8,
  0, 144, 5, 143, 3, 141, 2,
  0, 140, 0, 138, 0, 136, 0,
  0, 130, 0, 125, 0, 120, 0,
  0, 117, 0, 115, 0, 114, 2,
  0, 112, 3, 112, 5, 112, 8,
  0, 112, 16, 112, 24, 112, 32,
  0, 104, 32, 96, 32, 88, 32,
  0, 85, 32, 83, 32, 82, 34,
  0, 80, 35, 80, 37, 80, 40,
  0, 80, 45, 80, 50, 80, 56,
  0, 80, 58, 80, 60, 82, 61,
  0, 83, 63, 85, 64, 88, 64,
  0, 96, 64, 104, 64, 112, 64,
  0, 112, 74, 112, 85, 112, 96,
  0, 93, 96, 74, 96, 55, 96,
  0, 49, 95, 44, 98, 41, 102,
  0, 38, 107, 38, 112, 40, 117,
  0, 51, 147, 62, 177, 74, 208,
  2]);
export default Path;