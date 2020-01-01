// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 281, 257, 315, 257, 349, 257, 384, 257,
  0, 384, 251, 384, 245, 384, 239,
  0, 349, 239, 315, 239, 281, 239,
  0, 281, 245, 281, 251, 281, 257,
  1, 281, 286, 281, 289, 281, 291, 280, 294,
  0, 315, 294, 349, 294, 383, 294,
  0, 383, 291, 384, 289, 384, 286,
  0, 384, 282, 384, 278, 384, 274,
  0, 349, 274, 315, 274, 281, 274,
  0, 281, 278, 281, 282, 281, 286,
  1, 227, 368, 274, 368, 320, 368, 367, 368,
  0, 370, 360, 372, 352, 375, 343,
  0, 337, 343, 298, 343, 260, 343,
  0, 251, 354, 240, 363, 227, 368,
  0, 227, 368, 227, 368, 227, 368,
  1, 38, 405, 140, 405, 242, 405, 344, 405,
  0, 350, 397, 356, 388, 361, 378,
  0, 248, 378, 135, 378, 23, 378,
  0, 28, 388, 32, 397, 38, 405,
  0, 38, 405, 38, 405, 38, 405,
  1, 281, 220, 315, 220, 349, 220, 384, 220,
  0, 384, 215, 384, 210, 384, 205,
  0, 349, 205, 315, 205, 281, 205,
  0, 281, 210, 281, 215, 281, 220,
  1, 281, 71, 315, 71, 349, 71, 384, 71,
  0, 384, 69, 384, 68, 384, 66,
  0, 349, 66, 315, 66, 281, 66,
  0, 281, 68, 281, 69, 281, 71,
  1, 78, 442, 153, 442, 229, 442, 305, 442,
  0, 317, 434, 328, 424, 338, 413,
  0, 240, 413, 142, 413, 44, 413,
  0, 54, 424, 66, 434, 78, 442,
  0, 78, 442, 78, 442, 78, 442,
  1, 281, 31, 281, 32, 281, 33, 281, 34,
  0, 315, 34, 349, 34, 384, 34,
  0, 384, 33, 384, 32, 384, 32,
  0, 349, 31, 315, 31, 281, 31,
  1, 281, 108, 315, 108, 349, 108, 384, 108,
  0, 384, 106, 384, 103, 384, 101,
  0, 349, 101, 315, 101, 281, 101,
  0, 281, 103, 281, 106, 281, 108,
  1, 281, 182, 315, 182, 349, 182, 384, 182,
  0, 384, 178, 384, 174, 384, 170,
  0, 349, 170, 315, 170, 281, 170,
  0, 281, 174, 281, 178, 281, 182,
  1, 281, 145, 315, 145, 349, 145, 384, 145,
  0, 384, 142, 384, 139, 384, 136,
  0, 349, 136, 315, 136, 281, 136,
  0, 281, 139, 281, 142, 281, 145,
  1, 269, 331, 305, 331, 342, 331, 378, 331,
  0, 380, 324, 381, 316, 382, 309,
  0, 347, 309, 313, 309, 278, 309,
  0, 276, 317, 273, 324, 269, 331,
  0, 269, 331, 269, 331, 269, 331,
  1, 102, 170, 68, 170, 34, 170, 0, 170,
  0, 0, 174, 0, 178, 0, 183,
  0, 34, 183, 68, 183, 102, 183,
  0, 102, 178, 102, 174, 102, 170,
  1, 102, 135, 68, 135, 34, 135, 0, 135,
  0, 0, 139, 0, 142, 0, 145,
  0, 34, 145, 68, 145, 102, 145,
  0, 102, 142, 102, 139, 102, 135,
  1, 102, 205, 68, 205, 34, 205, 0, 205,
  0, 0, 210, 0, 215, 0, 220,
  0, 34, 220, 68, 220, 102, 220,
  0, 102, 215, 102, 210, 102, 205,
  1, 102, 101, 68, 101, 34, 101, 0, 101,
  0, 0, 103, 0, 106, 0, 108,
  0, 34, 108, 68, 108, 102, 108,
  0, 102, 106, 102, 103, 102, 101,
  1, 102, 31, 68, 31, 34, 31, 0, 31,
  0, 0, 32, 0, 33, 0, 34,
  0, 34, 34, 68, 34, 102, 34,
  0, 102, 33, 102, 32, 102, 31,
  1, 102, 66, 68, 66, 34, 66, 0, 66,
  0, 0, 68, 0, 69, 0, 71,
  0, 34, 71, 68, 71, 102, 71,
  0, 102, 69, 102, 68, 102, 66,
  1, 102, 239, 68, 239, 34, 239, 0, 239,
  0, 0, 245, 0, 251, 0, 257,
  0, 34, 257, 68, 257, 102, 257,
  0, 102, 251, 102, 245, 102, 239,
  1, 105, 309, 70, 309, 36, 309, 1, 309,
  0, 2, 316, 3, 324, 5, 331,
  0, 41, 331, 78, 331, 114, 331,
  0, 110, 324, 107, 317, 105, 309,
  0, 105, 309, 105, 309, 105, 309,
  1, 123, 343, 85, 343, 46, 343, 8, 343,
  0, 11, 352, 14, 360, 18, 368,
  0, 64, 368, 110, 368, 156, 368,
  0, 143, 362, 132, 354, 123, 343,
  0, 123, 343, 123, 343, 123, 343,
  1, 102, 286, 102, 282, 102, 278, 102, 274,
  0, 68, 274, 34, 274, 0, 274,
  0, 0, 278, 0, 282, 0, 286,
  0, 0, 289, 0, 291, 0, 294,
  0, 34, 294, 68, 294, 103, 294,
  0, 103, 291, 102, 289, 102, 286,
  0, 102, 286, 102, 286, 102, 286,
  1, 192, 480, 231, 480, 268, 468, 298, 447,
  0, 227, 447, 156, 447, 85, 447,
  0, 115, 468, 152, 480, 192, 480,
  0, 192, 480, 192, 480, 192, 480,
  2]);
export default Path;
