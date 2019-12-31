// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 174, 133, 174, 133, 173, 132, 171, 131,
  0, 171, 132, 171, 132, 171, 132,
  0, 171, 133, 166, 135, 160, 135,
  0, 154, 135, 149, 133, 149, 132,
  0, 149, 132, 149, 132, 149, 132,
  0, 149, 132, 149, 131, 149, 131,
  0, 147, 132, 146, 133, 146, 133,
  0, 146, 136, 152, 137, 160, 137,
  0, 167, 137, 174, 136, 174, 133,
  0, 174, 133, 174, 133, 174, 133,
  1, 243, 129, 243, 150, 12, 150, 12, 129,
  0, 12, 120, 64, 113, 127, 113,
  0, 136, 113, 145, 113, 154, 113,
  0, 158, 97, 162, 81, 166, 65,
  0, 187, 43, 207, 22, 228, 0,
  0, 229, 0, 233, 0, 238, 4,
  0, 242, 7, 244, 12, 243, 13,
  0, 243, 13, 243, 13, 243, 13,
  0, 224, 33, 205, 53, 185, 74,
  0, 182, 87, 179, 101, 175, 114,
  0, 215, 117, 243, 122, 243, 129,
  0, 243, 129, 243, 129, 243, 129,
  1, 13, 137, 18, 179, 22, 221, 27, 263,
  0, 33, 243, 48, 216, 67, 208,
  0, 73, 205, 80, 205, 86, 208,
  0, 91, 211, 95, 218, 96, 220,
  0, 97, 227, 94, 229, 91, 229,
  0, 88, 229, 86, 225, 84, 222,
  0, 80, 215, 74, 214, 68, 219,
  0, 61, 224, 55, 233, 50, 240,
  0, 45, 249, 41, 259, 38, 268,
  0, 37, 274, 36, 283, 38, 288,
  0, 39, 290, 40, 292, 43, 292,
  0, 48, 292, 55, 285, 59, 282,
  0, 63, 277, 69, 270, 71, 266,
  0, 73, 260, 74, 255, 76, 250,
  0, 79, 243, 86, 244, 86, 250,
  0, 86, 260, 82, 264, 76, 285,
  0, 70, 304, 69, 311, 69, 311,
  0, 68, 313, 65, 318, 62, 318,
  0, 61, 318, 60, 318, 60, 317,
  0, 59, 315, 59, 312, 59, 311,
  0, 59, 307, 65, 288, 66, 285,
  0, 64, 288, 62, 290, 60, 292,
  0, 54, 297, 46, 304, 38, 304,
  0, 35, 304, 33, 303, 31, 301,
  0, 33, 328, 36, 354, 38, 381,
  0, 40, 386, 77, 398, 126, 398,
  0, 175, 398, 213, 386, 215, 381,
  0, 218, 349, 222, 318, 225, 286,
  0, 220, 292, 213, 298, 206, 301,
  0, 200, 303, 188, 305, 188, 295,
  0, 188, 290, 198, 281, 203, 274,
  0, 204, 272, 207, 268, 207, 266,
  0, 207, 263, 201, 264, 196, 268,
  0, 193, 271, 190, 275, 187, 278,
  0, 183, 284, 180, 289, 179, 294,
  0, 172, 308, 174, 302, 169, 316,
  0, 164, 329, 165, 327, 164, 330,
  0, 163, 331, 162, 333, 160, 334,
  0, 158, 335, 156, 335, 154, 334,
  0, 153, 333, 153, 332, 153, 330,
  0, 153, 329, 153, 328, 153, 327,
  0, 155, 321, 161, 309, 168, 293,
  0, 170, 289, 169, 290, 169, 291,
  0, 163, 297, 158, 300, 155, 301,
  0, 149, 304, 142, 304, 140, 297,
  0, 140, 297, 140, 296, 140, 296,
  0, 128, 305, 116, 308, 120, 288,
  0, 115, 296, 107, 303, 97, 303,
  0, 93, 303, 90, 301, 89, 298,
  0, 87, 292, 90, 283, 93, 274,
  0, 95, 269, 97, 264, 101, 258,
  0, 102, 254, 105, 252, 108, 253,
  0, 109, 253, 109, 254, 110, 254,
  0, 112, 256, 111, 258, 110, 261,
  0, 106, 269, 103, 274, 101, 282,
  0, 100, 285, 99, 291, 102, 291,
  0, 105, 291, 107, 290, 109, 288,
  0, 114, 285, 117, 280, 120, 275,
  0, 122, 271, 125, 267, 126, 263,
  0, 126, 261, 127, 259, 128, 258,
  0, 129, 255, 130, 253, 133, 253,
  0, 134, 253, 135, 253, 136, 254,
  0, 138, 256, 137, 259, 136, 261,
  0, 134, 267, 132, 272, 130, 278,
  0, 128, 281, 127, 286, 127, 290,
  0, 127, 293, 131, 292, 134, 291,
  0, 136, 290, 138, 288, 140, 286,
  0, 142, 281, 141, 282, 167, 218,
  0, 168, 215, 171, 213, 173, 213,
  0, 174, 213, 175, 214, 176, 214,
  0, 178, 216, 178, 219, 177, 221,
  0, 176, 223, 177, 222, 173, 231,
  0, 167, 243, 164, 252, 159, 263,
  0, 158, 268, 152, 282, 151, 285,
  0, 150, 288, 149, 291, 152, 291,
  0, 157, 291, 171, 278, 175, 274,
  0, 175, 274, 175, 274, 176, 274,
  0, 176, 272, 177, 270, 177, 268,
  0, 179, 264, 180, 260, 183, 257,
  0, 184, 256, 184, 255, 185, 255,
  0, 188, 255, 190, 256, 190, 259,
  0, 190, 260, 189, 264, 189, 265,
  0, 190, 264, 191, 262, 193, 261,
  0, 208, 247, 219, 254, 219, 261,
  0, 219, 268, 210, 279, 205, 284,
  0, 203, 286, 200, 290, 200, 291,
  0, 200, 292, 201, 293, 202, 293,
  0, 204, 293, 209, 289, 210, 288,
  0, 215, 284, 222, 278, 227, 274,
  0, 232, 228, 237, 183, 242, 137,
  0, 211, 154, 44, 154, 13, 137,
  0, 13, 137, 13, 137, 13, 137,
  1, 209, 391, 205, 399, 200, 407, 195, 415,
  0, 194, 442, 192, 469, 191, 495,
  0, 191, 504, 162, 512, 127, 512,
  0, 93, 512, 64, 504, 64, 495,
  0, 62, 469, 61, 442, 59, 416,
  0, 54, 408, 49, 399, 44, 391,
  0, 85, 408, 170, 407, 209, 391,
  0, 209, 391, 209, 391, 209, 391,
  2]);
export default Path;