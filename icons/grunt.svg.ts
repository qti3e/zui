// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 253, 418, 243, 418, 234, 418, 224, 418,
  0, 220, 418, 217, 419, 215, 421,
  0, 213, 423, 213, 426, 214, 427,
  0, 215, 430, 219, 439, 227, 447,
  0, 230, 450, 234, 451, 238, 451,
  0, 242, 451, 247, 450, 250, 447,
  0, 252, 445, 260, 438, 263, 429,
  0, 265, 426, 264, 423, 263, 421,
  0, 261, 420, 259, 418, 253, 418,
  0, 253, 418, 253, 418, 253, 418,
  1, 191, 187, 191, 187, 192, 187, 192, 187,
  0, 204, 187, 219, 169, 219, 169,
  0, 209, 175, 200, 178, 191, 178,
  0, 183, 178, 174, 175, 164, 169,
  0, 164, 169, 179, 187, 191, 187,
  0, 191, 187, 191, 187, 191, 187,
  1, 349, 404, 337, 424, 313, 433, 291, 434,
  0, 295, 421, 294, 410, 287, 402,
  0, 286, 402, 286, 401, 285, 401,
  0, 283, 398, 281, 395, 278, 391,
  0, 305, 389, 342, 380, 353, 345,
  0, 358, 350, 361, 384, 349, 404,
  0, 349, 404, 349, 404, 349, 404,
  1, 272, 473, 277, 466, 281, 458, 284, 450,
  0, 291, 450, 297, 449, 303, 448,
  0, 297, 457, 287, 467, 272, 473,
  0, 272, 473, 272, 473, 272, 473,
  1, 192, 498, 131, 498, 113, 452, 107, 433,
  0, 103, 423, 103, 415, 108, 410,
  0, 110, 407, 117, 403, 132, 403,
  0, 172, 403, 211, 403, 251, 403,
  0, 266, 403, 273, 407, 276, 410,
  0, 280, 415, 280, 423, 276, 433,
  0, 270, 452, 252, 498, 192, 498,
  0, 192, 498, 192, 498, 192, 498,
  1, 80, 448, 86, 449, 92, 450, 99, 450,
  0, 102, 458, 106, 466, 111, 473,
  0, 97, 467, 87, 457, 80, 448,
  0, 80, 448, 80, 448, 80, 448,
  1, 34, 404, 22, 384, 26, 350, 31, 345,
  0, 42, 379, 78, 389, 105, 390,
  0, 102, 395, 100, 398, 98, 400,
  0, 98, 401, 97, 401, 97, 402,
  0, 89, 410, 88, 420, 93, 434,
  0, 70, 433, 46, 424, 34, 404,
  0, 34, 404, 34, 404, 34, 404,
  1, 58, 259, 55, 258, 52, 256, 49, 255,
  0, 34, 247, 19, 238, 19, 224,
  0, 19, 213, 23, 210, 28, 206,
  0, 28, 206, 28, 206, 28, 206,
  0, 29, 205, 30, 205, 31, 204,
  0, 30, 211, 29, 217, 28, 219,
  0, 28, 219, 40, 204, 44, 174,
  0, 45, 163, 42, 140, 38, 131,
  0, 39, 136, 38, 141, 38, 146,
  0, 38, 145, 37, 144, 37, 144,
  0, 34, 140, 25, 126, 27, 117,
  0, 28, 114, 31, 111, 34, 109,
  0, 38, 107, 43, 106, 49, 106,
  0, 62, 106, 75, 110, 82, 112,
  0, 107, 120, 138, 143, 146, 150,
  0, 146, 150, 147, 150, 147, 150,
  0, 149, 152, 150, 153, 152, 154,
  0, 151, 152, 150, 150, 149, 148,
  0, 149, 148, 130, 117, 96, 102,
  0, 98, 99, 103, 94, 117, 87,
  0, 139, 76, 164, 71, 192, 71,
  0, 219, 71, 244, 76, 266, 87,
  0, 280, 94, 285, 99, 287, 102,
  0, 253, 117, 235, 148, 234, 148,
  0, 233, 150, 232, 152, 231, 154,
  0, 233, 153, 235, 152, 236, 150,
  0, 236, 150, 237, 150, 237, 150,
  0, 245, 143, 276, 120, 301, 112,
  0, 308, 110, 322, 106, 334, 106,
  0, 340, 106, 345, 107, 349, 109,
  0, 352, 111, 355, 114, 356, 117,
  0, 358, 126, 350, 140, 346, 144,
  0, 346, 144, 345, 145, 345, 146,
  0, 345, 141, 344, 136, 345, 131,
  0, 341, 140, 338, 163, 340, 174,
  0, 343, 204, 355, 219, 355, 219,
  0, 354, 217, 353, 211, 353, 204,
  0, 353, 205, 354, 205, 355, 206,
  0, 355, 206, 355, 206, 355, 206,
  0, 360, 210, 364, 213, 364, 224,
  0, 364, 238, 349, 247, 334, 255,
  0, 331, 256, 328, 258, 326, 259,
  0, 317, 264, 308, 276, 306, 294,
  0, 306, 308, 307, 344, 310, 370,
  0, 297, 374, 283, 376, 270, 376,
  0, 268, 372, 266, 368, 265, 363,
  0, 264, 361, 245, 312, 238, 301,
  0, 244, 340, 256, 375, 262, 391,
  0, 258, 390, 254, 390, 250, 390,
  0, 211, 390, 172, 390, 133, 390,
  0, 129, 390, 125, 390, 121, 391,
  0, 127, 375, 139, 340, 145, 301,
  0, 138, 312, 119, 361, 118, 363,
  0, 117, 368, 115, 372, 113, 376,
  0, 100, 376, 86, 374, 73, 370,
  0, 76, 344, 78, 308, 77, 294,
  0, 76, 276, 66, 264, 58, 259,
  0, 58, 259, 58, 259, 58, 259,
  1, 90, 85, 85, 89, 82, 93, 79, 96,
  0, 76, 95, 72, 94, 68, 93,
  0, 65, 89, 64, 83, 64, 77,
  0, 63, 70, 62, 64, 59, 59,
  0, 58, 58, 58, 57, 57, 56,
  0, 64, 56, 71, 58, 76, 63,
  0, 84, 69, 88, 80, 90, 85,
  0, 90, 85, 90, 85, 90, 85,
  1, 45, 45, 42, 43, 39, 41, 35, 40,
  0, 40, 38, 49, 35, 60, 35,
  0, 66, 35, 72, 35, 78, 37,
  0, 96, 43, 109, 60, 116, 69,
  0, 114, 70, 112, 71, 111, 72,
  0, 108, 73, 106, 74, 104, 75,
  0, 101, 70, 95, 61, 83, 53,
  0, 75, 47, 65, 44, 54, 44,
  0, 51, 44, 47, 44, 45, 45,
  0, 45, 45, 45, 45, 45, 45,
  1, 326, 55, 325, 56, 325, 58, 324, 59,
  0, 321, 64, 320, 70, 320, 76,
  0, 319, 83, 318, 89, 315, 93,
  0, 311, 94, 307, 95, 304, 96,
  0, 301, 93, 298, 89, 293, 85,
  0, 295, 80, 299, 69, 307, 62,
  0, 312, 58, 319, 56, 326, 55,
  0, 326, 55, 326, 55, 326, 55,
  1, 305, 37, 311, 35, 317, 35, 323, 35,
  0, 334, 35, 343, 38, 348, 40,
  0, 345, 41, 341, 43, 338, 45,
  0, 336, 44, 332, 44, 329, 44,
  0, 318, 44, 308, 47, 300, 53,
  0, 288, 62, 282, 70, 279, 75,
  0, 277, 74, 275, 73, 272, 72,
  0, 271, 71, 269, 70, 267, 69,
  0, 274, 60, 287, 43, 305, 37,
  0, 305, 37, 305, 37, 305, 37,
  1, 349, 317, 346, 335, 336, 351, 324, 361,
  0, 321, 338, 320, 305, 320, 298,
  0, 320, 283, 330, 274, 333, 272,
  0, 335, 271, 338, 269, 341, 267,
  0, 359, 258, 381, 246, 381, 224,
  0, 381, 208, 372, 201, 366, 196,
  0, 365, 195, 364, 195, 364, 194,
  0, 362, 193, 360, 191, 359, 190,
  0, 355, 180, 356, 156, 358, 152,
  0, 358, 152, 374, 131, 369, 113,
  0, 367, 106, 363, 100, 355, 96,
  0, 350, 93, 343, 92, 336, 92,
  0, 336, 90, 335, 88, 335, 86,
  0, 334, 83, 334, 80, 334, 78,
  0, 334, 73, 335, 69, 336, 66,
  0, 345, 53, 365, 49, 365, 49,
  0, 369, 48, 373, 47, 378, 46,
  0, 375, 43, 372, 40, 369, 37,
  0, 369, 37, 352, 19, 323, 19,
  0, 315, 19, 307, 21, 299, 23,
  0, 275, 31, 256, 54, 250, 62,
  0, 247, 61, 243, 61, 240, 60,
  0, 236, 44, 249, 21, 249, 21,
  0, 249, 21, 235, 18, 215, 36,
  0, 213, 30, 207, 16, 214, 0,
  0, 184, 10, 177, 26, 175, 40,
  0, 167, 35, 168, 17, 167, 12,
  0, 160, 13, 138, 34, 139, 61,
  0, 137, 61, 135, 62, 133, 62,
  0, 127, 54, 108, 31, 84, 23,
  0, 76, 21, 68, 20, 60, 20,
  0, 31, 20, 14, 37, 14, 37,
  0, 11, 40, 8, 43, 6, 46,
  0, 10, 47, 14, 48, 18, 49,
  0, 18, 49, 38, 53, 47, 66,
  0, 48, 69, 49, 73, 49, 78,
  0, 49, 81, 49, 83, 48, 86,
  0, 48, 88, 47, 90, 47, 92,
  0, 39, 92, 33, 94, 28, 96,
  0, 20, 100, 16, 106, 14, 113,
  0, 9, 131, 25, 152, 25, 152,
  0, 27, 156, 28, 180, 24, 190,
  0, 23, 191, 21, 193, 19, 194,
  0, 19, 195, 18, 196, 17, 196,
  0, 11, 201, 2, 208, 2, 224,
  0, 2, 246, 24, 258, 42, 268,
  0, 45, 269, 48, 271, 50, 272,
  0, 53, 274, 63, 284, 63, 298,
  0, 63, 305, 62, 338, 59, 361,
  0, 47, 351, 37, 335, 34, 317,
  0, 34, 317, 5, 340, 14, 388,
  0, 19, 417, 37, 434, 61, 442,
  0, 70, 462, 90, 488, 128, 492,
  0, 143, 504, 163, 512, 192, 512,
  0, 192, 512, 192, 512, 192, 512,
  0, 221, 512, 241, 504, 256, 492,
  0, 293, 488, 314, 462, 323, 442,
  0, 347, 434, 365, 417, 370, 388,
  0, 378, 339, 349, 317, 349, 317,
  0, 349, 317, 349, 317, 349, 317,
  1, 160, 418, 150, 418, 140, 418, 130, 418,
  0, 125, 418, 122, 420, 121, 421,
  0, 119, 423, 118, 426, 120, 429,
  0, 123, 438, 131, 446, 133, 448,
  0, 137, 450, 141, 452, 145, 452,
  0, 150, 452, 154, 450, 156, 447,
  0, 164, 439, 168, 430, 169, 428,
  0, 170, 426, 171, 423, 168, 421,
  0, 167, 419, 164, 418, 160, 418,
  0, 160, 418, 160, 418, 160, 418,
  1, 294, 187, 297, 196, 297, 215, 287, 222,
  0, 271, 235, 255, 227, 249, 224,
  0, 257, 213, 274, 198, 294, 187,
  0, 294, 187, 294, 187, 294, 187,
  1, 231, 233, 230, 248, 245, 265, 245, 265,
  0, 245, 265, 240, 250, 242, 240,
  0, 243, 237, 244, 234, 245, 231,
  0, 265, 249, 293, 233, 300, 225,
  0, 310, 215, 313, 202, 313, 191,
  0, 315, 195, 316, 200, 317, 208,
  0, 317, 208, 323, 199, 322, 189,
  0, 322, 184, 319, 179, 315, 177,
  0, 315, 177, 315, 177, 315, 177,
  0, 320, 175, 324, 174, 329, 173,
  0, 286, 163, 255, 193, 246, 205,
  0, 229, 224, 210, 213, 210, 213,
  0, 210, 224, 220, 232, 231, 233,
  0, 231, 233, 231, 233, 231, 233,
  1, 89, 187, 109, 198, 127, 213, 134, 224,
  0, 128, 227, 112, 234, 96, 222,
  0, 86, 215, 86, 196, 89, 187,
  0, 89, 187, 89, 187, 89, 187,
  1, 61, 189, 60, 199, 66, 208, 66, 208,
  0, 67, 200, 68, 195, 70, 191,
  0, 70, 202, 73, 215, 83, 225,
  0, 90, 233, 118, 249, 138, 232,
  0, 139, 234, 140, 237, 141, 240,
  0, 144, 250, 138, 265, 138, 265,
  0, 138, 265, 153, 248, 152, 233,
  0, 163, 232, 173, 224, 173, 213,
  0, 173, 213, 154, 224, 138, 204,
  0, 128, 193, 97, 162, 54, 173,
  0, 59, 174, 63, 175, 68, 177,
  0, 68, 177, 68, 177, 68, 177,
  0, 64, 179, 61, 184, 61, 189,
  0, 61, 189, 61, 189, 61, 189,
  2]);
export default Path;
