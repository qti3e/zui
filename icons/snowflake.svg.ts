// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 440, 345, 429, 338, 417, 332, 406, 325,
  0, 415, 323, 423, 321, 432, 318,
  0, 440, 316, 445, 308, 443, 299,
  0, 442, 294, 440, 289, 439, 284,
  0, 437, 276, 428, 271, 420, 274,
  0, 396, 280, 373, 286, 349, 293,
  0, 328, 280, 307, 268, 285, 256,
  0, 307, 243, 328, 231, 349, 219,
  0, 373, 225, 396, 231, 420, 238,
  0, 428, 240, 437, 235, 439, 227,
  0, 440, 222, 441, 217, 443, 212,
  0, 445, 204, 440, 195, 432, 193,
  0, 423, 191, 415, 188, 406, 186,
  0, 417, 179, 428, 173, 440, 166,
  0, 447, 162, 450, 153, 445, 145,
  0, 440, 136, 435, 127, 430, 119,
  0, 426, 111, 416, 109, 409, 113,
  0, 398, 119, 386, 126, 375, 132,
  0, 377, 124, 380, 115, 382, 106,
  0, 384, 98, 379, 90, 371, 87,
  0, 366, 86, 361, 85, 356, 83,
  0, 348, 81, 340, 86, 337, 94,
  0, 331, 118, 325, 142, 318, 165,
  0, 297, 177, 276, 189, 256, 201,
  0, 256, 175, 256, 150, 256, 124,
  0, 273, 106, 291, 88, 309, 70,
  0, 315, 64, 315, 54, 309, 48,
  0, 305, 44, 302, 40, 298, 36,
  0, 292, 30, 282, 30, 275, 36,
  0, 269, 43, 262, 49, 256, 56,
  0, 256, 42, 256, 29, 256, 16,
  0, 256, 7, 248, 0, 240, 0,
  0, 229, 0, 218, 0, 208, 0,
  0, 199, 0, 192, 7, 192, 16,
  0, 192, 29, 192, 42, 192, 56,
  0, 185, 49, 178, 43, 172, 36,
  0, 166, 30, 155, 30, 149, 36,
  0, 145, 40, 142, 44, 138, 48,
  0, 132, 54, 132, 64, 138, 70,
  0, 156, 88, 174, 106, 192, 124,
  0, 192, 150, 192, 175, 192, 201,
  0, 171, 189, 150, 177, 129, 165,
  0, 122, 142, 116, 118, 110, 94,
  0, 108, 86, 99, 81, 91, 83,
  0, 86, 85, 81, 86, 76, 87,
  0, 68, 90, 63, 98, 65, 106,
  0, 67, 115, 70, 124, 72, 132,
  0, 61, 126, 49, 119, 38, 113,
  0, 31, 109, 21, 111, 17, 119,
  0, 12, 127, 7, 136, 2, 145,
  0, -2, 153, 0, 162, 7, 166,
  0, 19, 173, 30, 179, 41, 186,
  0, 32, 188, 24, 190, 15, 193,
  0, 7, 195, 2, 204, 4, 212,
  0, 5, 217, 7, 222, 8, 227,
  0, 10, 235, 19, 240, 27, 238,
  0, 51, 231, 74, 225, 98, 219,
  0, 119, 231, 140, 243, 162, 256,
  0, 140, 268, 119, 280, 98, 292,
  0, 74, 286, 51, 280, 27, 273,
  0, 19, 271, 10, 276, 8, 284,
  0, 7, 289, 5, 294, 4, 299,
  0, 2, 307, 7, 316, 15, 318,
  0, 24, 320, 32, 323, 41, 325,
  0, 30, 332, 18, 338, 7, 345,
  0, 0, 349, -2, 358, 2, 366,
  0, 7, 375, 12, 384, 17, 393,
  0, 21, 400, 31, 402, 38, 398,
  0, 49, 392, 61, 385, 72, 379,
  0, 70, 387, 67, 396, 65, 405,
  0, 63, 413, 68, 422, 76, 424,
  0, 81, 425, 86, 426, 91, 428,
  0, 99, 430, 107, 425, 110, 417,
  0, 116, 393, 122, 370, 129, 346,
  0, 150, 334, 170, 322, 191, 310,
  0, 191, 336, 191, 361, 191, 387,
  0, 174, 405, 156, 423, 138, 441,
  0, 131, 447, 131, 457, 138, 464,
  0, 141, 467, 145, 471, 149, 475,
  0, 155, 481, 165, 481, 172, 475,
  0, 178, 468, 185, 462, 191, 455,
  0, 191, 469, 191, 482, 191, 496,
  0, 191, 504, 199, 512, 207, 512,
  0, 218, 512, 229, 512, 239, 512,
  0, 248, 512, 255, 504, 255, 496,
  0, 255, 482, 255, 469, 255, 455,
  0, 262, 462, 268, 468, 275, 475,
  0, 281, 481, 291, 481, 298, 475,
  0, 301, 471, 305, 467, 309, 464,
  0, 315, 457, 315, 447, 309, 441,
  0, 291, 423, 273, 405, 256, 387,
  0, 256, 361, 256, 336, 256, 310,
  0, 276, 322, 297, 334, 318, 346,
  0, 325, 370, 331, 393, 337, 417,
  0, 340, 425, 348, 430, 356, 428,
  0, 361, 426, 366, 425, 371, 424,
  0, 379, 421, 384, 413, 382, 405,
  0, 380, 396, 377, 387, 375, 379,
  0, 386, 385, 398, 392, 409, 398,
  0, 416, 403, 426, 400, 430, 393,
  0, 435, 384, 440, 375, 445, 366,
  0, 450, 358, 447, 349, 440, 345,
  0, 440, 345, 440, 345, 440, 345,
  2]);
export default Path;