// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 258, 455, 258, 453, 258, 450, 258, 448,
  0, 258, 439, 250, 432, 242, 432,
  0, 235, 432, 228, 432, 221, 432,
  0, 211, 432, 195, 427, 186, 420,
  0, 179, 415, 171, 409, 164, 403,
  0, 152, 395, 146, 381, 146, 367,
  0, 146, 359, 146, 351, 146, 343,
  0, 146, 327, 154, 312, 168, 304,
  0, 182, 296, 196, 287, 211, 278,
  0, 218, 274, 226, 272, 234, 272,
  0, 244, 272, 255, 272, 265, 272,
  0, 276, 272, 287, 276, 295, 283,
  0, 309, 295, 324, 308, 338, 320,
  0, 344, 320, 350, 320, 356, 320,
  0, 365, 320, 373, 323, 379, 329,
  0, 385, 335, 390, 341, 396, 347,
  0, 400, 350, 404, 352, 409, 352,
  0, 414, 352, 418, 352, 423, 352,
  0, 390, 411, 329, 451, 258, 455,
  0, 258, 455, 258, 455, 258, 455,
  1, 130, 149, 130, 146, 131, 143, 133, 141,
  0, 141, 132, 150, 124, 158, 115,
  0, 160, 113, 163, 112, 166, 112,
  0, 173, 112, 178, 117, 178, 123,
  0, 178, 129, 178, 134, 178, 139,
  0, 178, 142, 176, 145, 174, 147,
  0, 171, 150, 168, 153, 165, 157,
  0, 163, 159, 160, 160, 157, 160,
  0, 152, 160, 146, 160, 141, 160,
  0, 135, 160, 130, 155, 130, 149,
  0, 130, 149, 130, 149, 130, 149,
  1, 448, 256, 448, 278, 444, 300, 437, 320,
  0, 430, 320, 423, 320, 416, 320,
  0, 412, 320, 408, 318, 405, 315,
  0, 394, 304, 384, 293, 373, 283,
  0, 369, 278, 369, 270, 373, 266,
  0, 377, 262, 381, 257, 386, 253,
  0, 386, 250, 386, 247, 386, 245,
  0, 386, 242, 384, 239, 382, 237,
  0, 379, 233, 376, 230, 373, 227,
  0, 371, 225, 368, 224, 365, 224,
  0, 360, 224, 354, 224, 349, 224,
  0, 343, 224, 338, 219, 338, 213,
  0, 338, 210, 339, 207, 341, 205,
  0, 344, 201, 347, 198, 350, 195,
  0, 352, 193, 355, 192, 358, 192,
  0, 369, 192, 380, 192, 390, 192,
  0, 397, 192, 402, 187, 402, 181,
  0, 402, 177, 402, 174, 402, 171,
  0, 402, 165, 397, 160, 390, 160,
  0, 378, 160, 366, 160, 354, 160,
  0, 345, 160, 338, 167, 338, 176,
  0, 338, 177, 338, 179, 338, 180,
  0, 338, 187, 333, 193, 327, 196,
  0, 316, 199, 306, 203, 295, 206,
  0, 292, 207, 290, 210, 290, 214,
  0, 290, 214, 290, 215, 290, 216,
  0, 290, 220, 286, 224, 282, 224,
  0, 276, 224, 271, 224, 266, 224,
  0, 261, 224, 258, 220, 258, 216,
  0, 258, 212, 254, 208, 250, 208,
  0, 249, 208, 248, 208, 247, 208,
  0, 244, 208, 241, 210, 239, 212,
  0, 236, 219, 233, 225, 230, 231,
  0, 227, 236, 222, 240, 216, 240,
  0, 208, 240, 201, 240, 194, 240,
  0, 185, 240, 178, 233, 178, 224,
  0, 178, 215, 178, 207, 178, 199,
  0, 178, 194, 179, 190, 182, 187,
  0, 189, 181, 196, 174, 202, 167,
  0, 207, 162, 210, 156, 210, 150,
  0, 210, 146, 212, 143, 215, 142,
  0, 228, 138, 242, 133, 255, 129,
  0, 257, 128, 258, 127, 259, 126,
  0, 268, 117, 277, 108, 286, 99,
  0, 288, 97, 289, 94, 289, 91,
  0, 289, 85, 284, 80, 278, 80,
  0, 271, 80, 264, 80, 258, 80,
  0, 252, 85, 247, 91, 242, 96,
  0, 242, 99, 242, 101, 242, 104,
  0, 242, 108, 238, 112, 234, 112,
  0, 228, 112, 223, 112, 218, 112,
  0, 213, 112, 210, 108, 210, 104,
  0, 210, 97, 210, 91, 210, 84,
  0, 210, 81, 211, 79, 213, 77,
  0, 222, 70, 232, 63, 242, 56,
  0, 243, 56, 245, 55, 247, 55,
  0, 358, 56, 448, 145, 448, 256,
  0, 448, 256, 448, 256, 448, 256,
  1, 248, 8, 111, 8, 0, 119, 0, 256,
  0, 0, 393, 111, 504, 248, 504,
  0, 385, 504, 496, 393, 496, 256,
  0, 496, 119, 385, 8, 248, 8,
  0, 248, 8, 248, 8, 248, 8,
  2]);
export default Path;
