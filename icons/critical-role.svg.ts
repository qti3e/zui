// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 356, 205, 353, 199, 351, 194, 349, 189,
  0, 347, 194, 345, 199, 343, 205,
  0, 347, 205, 351, 205, 356, 205,
  1, 143, 198, 143, 200, 144, 201, 145, 201,
  0, 159, 202, 158, 190, 158, 187,
  0, 156, 176, 143, 177, 143, 180,
  0, 143, 184, 143, 193, 143, 198,
  0, 143, 198, 143, 198, 143, 198,
  1, 223, 94, 213, 94, 214, 109, 223, 109,
  0, 233, 109, 233, 94, 223, 94,
  0, 223, 94, 223, 94, 223, 94,
  1, 236, 292, 236, 294, 237, 331, 237, 331,
  0, 237, 341, 211, 337, 211, 329,
  0, 212, 327, 213, 291, 213, 289,
  0, 198, 297, 198, 330, 219, 338,
  0, 227, 342, 237, 339, 241, 331,
  0, 246, 323, 248, 302, 236, 292,
  0, 236, 292, 236, 292, 236, 292,
  0, 236, 292, 236, 292, 236, 292,
  1, 130, 307, 130, 310, 130, 310, 133, 310,
  0, 144, 312, 154, 314, 158, 303,
  0, 164, 289, 161, 269, 146, 264,
  0, 144, 264, 130, 261, 130, 266,
  0, 130, 274, 130, 277, 130, 307,
  0, 130, 307, 130, 307, 130, 307,
  1, 221, 496, 222, 497, 223, 497, 224, 496,
  0, 241, 486, 406, 393, 421, 384,
  0, 421, 383, 433, 383, 240, 383,
  0, 239, 383, 238, 384, 238, 385,
  0, 238, 385, 240, 429, 240, 435,
  0, 240, 438, 239, 440, 238, 443,
  0, 238, 445, 239, 442, 225, 475,
  0, 224, 477, 224, 477, 223, 475,
  0, 219, 465, 214, 454, 210, 444,
  0, 209, 441, 208, 437, 208, 433,
  0, 208, 431, 209, 417, 210, 385,
  0, 210, 383, 210, 383, 208, 383,
  0, 147, 383, 86, 383, 25, 383,
  0, 27, 385, 203, 486, 221, 496,
  0, 221, 496, 221, 496, 221, 496,
  1, 258, 222, 258, 226, 261, 225, 264, 225,
  0, 266, 226, 266, 229, 264, 229,
  0, 257, 229, 250, 229, 242, 229,
  0, 238, 229, 239, 225, 242, 225,
  0, 246, 225, 245, 227, 245, 180,
  0, 245, 175, 242, 176, 241, 176,
  0, 238, 174, 239, 173, 241, 173,
  0, 242, 173, 261, 172, 262, 173,
  0, 263, 173, 264, 174, 262, 176,
  0, 261, 176, 258, 175, 258, 178,
  0, 258, 178, 257, 180, 258, 222,
  0, 258, 222, 258, 222, 258, 222,
  1, 289, 280, 293, 280, 293, 283, 289, 283,
  0, 287, 283, 284, 283, 284, 289,
  0, 284, 291, 284, 318, 285, 330,
  0, 285, 332, 286, 334, 288, 334,
  0, 310, 335, 303, 332, 307, 327,
  0, 309, 325, 310, 328, 310, 328,
  0, 310, 342, 306, 341, 305, 341,
  0, 292, 341, 279, 341, 267, 341,
  0, 265, 340, 264, 338, 266, 337,
  0, 268, 337, 271, 338, 271, 334,
  0, 272, 319, 272, 290, 272, 287,
  0, 271, 283, 269, 283, 266, 283,
  0, 263, 283, 264, 280, 266, 280,
  0, 268, 280, 284, 280, 289, 280,
  0, 289, 280, 289, 280, 289, 280,
  1, 318, 174, 320, 174, 321, 175, 321, 178,
  0, 320, 184, 320, 187, 320, 188,
  0, 319, 190, 317, 190, 317, 188,
  0, 316, 183, 314, 180, 309, 178,
  0, 283, 171, 276, 194, 282, 209,
  0, 288, 224, 304, 225, 311, 222,
  0, 317, 221, 317, 216, 318, 215,
  0, 319, 214, 320, 213, 321, 216,
  0, 321, 216, 321, 228, 315, 229,
  0, 313, 229, 295, 232, 282, 225,
  0, 261, 214, 265, 190, 275, 180,
  0, 289, 166, 315, 173, 318, 174,
  0, 318, 174, 318, 174, 318, 174,
  1, 318, 283, 314, 283, 314, 280, 317, 280,
  0, 353, 280, 346, 280, 355, 279,
  0, 356, 279, 357, 279, 357, 281,
  0, 357, 284, 356, 288, 356, 291,
  0, 356, 293, 353, 294, 352, 291,
  0, 352, 286, 350, 286, 337, 286,
  0, 335, 286, 335, 286, 335, 287,
  0, 335, 293, 335, 298, 335, 304,
  0, 335, 305, 335, 305, 337, 305,
  0, 340, 305, 347, 305, 353, 303,
  0, 353, 303, 356, 302, 356, 305,
  0, 356, 305, 355, 316, 354, 317,
  0, 354, 318, 353, 318, 352, 317,
  0, 351, 315, 352, 312, 348, 312,
  0, 333, 311, 335, 309, 335, 318,
  0, 335, 330, 334, 334, 339, 334,
  0, 356, 334, 354, 334, 356, 328,
  0, 356, 326, 359, 326, 359, 329,
  0, 358, 332, 358, 335, 357, 338,
  0, 357, 339, 357, 341, 353, 341,
  0, 316, 341, 318, 341, 318, 340,
  0, 315, 340, 315, 337, 318, 337,
  0, 319, 337, 322, 338, 322, 334,
  0, 324, 278, 322, 283, 318, 283,
  0, 318, 283, 318, 283, 318, 283,
  1, 423, 219, 422, 226, 423, 229, 417, 229,
  0, 356, 229, 370, 229, 367, 229,
  0, 366, 229, 364, 228, 363, 228,
  0, 361, 227, 365, 227, 363, 222,
  0, 361, 219, 360, 216, 359, 212,
  0, 358, 211, 358, 211, 357, 211,
  0, 352, 211, 347, 211, 342, 211,
  0, 341, 211, 341, 211, 340, 212,
  0, 339, 216, 337, 219, 336, 223,
  0, 335, 226, 344, 224, 348, 225,
  0, 351, 226, 353, 229, 349, 229,
  0, 340, 229, 331, 229, 322, 229,
  0, 319, 229, 319, 226, 322, 226,
  0, 324, 226, 326, 224, 328, 222,
  0, 329, 219, 330, 216, 332, 213,
  0, 350, 171, 349, 173, 350, 171,
  0, 350, 171, 351, 171, 352, 171,
  0, 352, 171, 353, 171, 353, 171,
  0, 356, 175, 372, 216, 377, 223,
  0, 379, 226, 382, 225, 383, 225,
  0, 387, 225, 387, 224, 387, 221,
  0, 387, 219, 387, 222, 387, 180,
  0, 387, 175, 385, 176, 382, 176,
  0, 381, 176, 379, 175, 382, 172,
  0, 382, 172, 381, 172, 403, 172,
  0, 406, 172, 409, 175, 402, 176,
  0, 401, 176, 401, 176, 400, 177,
  0, 400, 177, 399, 178, 399, 179,
  0, 399, 180, 399, 218, 400, 220,
  0, 400, 221, 401, 222, 403, 222,
  0, 416, 223, 418, 223, 419, 219,
  0, 421, 213, 423, 216, 423, 219,
  0, 423, 219, 423, 219, 423, 219,
  1, 148, 229, 141, 229, 135, 229, 128, 229,
  0, 127, 229, 126, 228, 126, 227,
  0, 128, 223, 132, 228, 131, 221,
  0, 131, 195, 132, 183, 132, 181,
  0, 132, 177, 131, 176, 128, 176,
  0, 121, 175, 125, 173, 127, 173,
  0, 139, 172, 150, 172, 157, 173,
  0, 166, 174, 174, 186, 165, 196,
  0, 163, 198, 161, 200, 159, 203,
  0, 160, 204, 166, 211, 176, 222,
  0, 179, 225, 183, 226, 186, 225,
  0, 187, 225, 188, 224, 189, 223,
  0, 189, 220, 189, 228, 189, 183,
  0, 189, 177, 189, 176, 186, 176,
  0, 182, 176, 182, 174, 185, 173,
  0, 191, 172, 198, 172, 204, 172,
  0, 204, 172, 209, 173, 205, 176,
  0, 205, 176, 205, 176, 205, 176,
  0, 201, 176, 201, 177, 201, 180,
  0, 201, 224, 201, 221, 201, 223,
  0, 201, 224, 202, 225, 206, 225,
  0, 209, 225, 210, 229, 206, 229,
  0, 196, 229, 186, 229, 175, 229,
  0, 165, 229, 162, 223, 151, 208,
  0, 149, 206, 143, 206, 143, 208,
  0, 144, 224, 143, 225, 147, 225,
  0, 152, 225, 152, 229, 148, 229,
  0, 148, 229, 148, 229, 148, 229,
  1, 68, 141, 88, 137, 100, 141, 120, 143,
  0, 123, 143, 124, 144, 124, 147,
  0, 124, 152, 123, 169, 123, 170,
  0, 123, 171, 122, 172, 121, 172,
  0, 117, 174, 117, 168, 117, 165,
  0, 114, 143, 43, 132, 42, 190,
  0, 42, 214, 59, 244, 96, 241,
  0, 124, 239, 115, 221, 121, 221,
  0, 122, 221, 123, 221, 124, 222,
  0, 124, 222, 125, 223, 124, 224,
  0, 122, 235, 121, 243, 121, 243,
  0, 119, 253, 34, 266, 28, 201,
  0, 25, 175, 38, 148, 68, 141,
  0, 68, 141, 68, 141, 68, 141,
  1, 267, 150, 269, 150, 271, 149, 272, 149,
  0, 274, 149, 275, 149, 275, 151,
  0, 275, 151, 275, 170, 274, 171,
  0, 273, 173, 272, 173, 272, 171,
  0, 267, 161, 278, 162, 232, 159,
  0, 232, 159, 231, 159, 231, 160,
  0, 231, 160, 235, 282, 235, 282,
  0, 235, 283, 236, 283, 236, 284,
  0, 239, 285, 242, 286, 245, 288,
  0, 252, 292, 256, 299, 257, 307,
  0, 259, 319, 255, 343, 225, 344,
  0, 222, 344, 197, 345, 191, 321,
  0, 186, 302, 199, 288, 211, 285,
  0, 212, 284, 213, 283, 213, 282,
  0, 213, 276, 216, 175, 217, 161,
  0, 217, 159, 216, 159, 215, 159,
  0, 183, 160, 179, 159, 175, 168,
  0, 173, 174, 171, 169, 171, 168,
  0, 172, 162, 173, 156, 174, 150,
  0, 175, 148, 176, 148, 178, 148,
  0, 184, 150, 185, 150, 215, 150,
  0, 217, 150, 217, 150, 217, 148,
  0, 218, 121, 218, 126, 218, 119,
  0, 218, 118, 217, 116, 216, 116,
  0, 211, 113, 208, 108, 207, 102,
  0, 207, 87, 225, 80, 235, 91,
  0, 242, 98, 241, 110, 232, 115,
  0, 231, 116, 230, 117, 230, 119,
  0, 230, 120, 230, 115, 231, 149,
  0, 231, 150, 232, 150, 232, 150,
  0, 233, 150, 255, 150, 267, 150,
  0, 267, 150, 267, 150, 267, 150,
  1, 215, 20, 215, 20, 215, 20, 215, 20,
  0, 150, 57, 85, 93, 21, 130,
  0, 21, 130, 21, 131, 21, 131,
  0, 31, 135, 41, 138, 51, 142,
  0, 44, 148, 43, 148, 41, 147,
  0, 41, 147, 17, 138, 14, 137,
  0, 14, 214, 14, 291, 14, 368,
  0, 15, 367, 78, 257, 78, 257,
  0, 80, 254, 81, 255, 87, 255,
  0, 89, 255, 89, 256, 88, 257,
  0, 47, 328, 52, 320, 21, 374,
  0, 20, 375, 20, 375, 22, 375,
  0, 84, 375, 146, 375, 208, 375,
  0, 210, 375, 210, 375, 210, 373,
  0, 210, 370, 210, 367, 210, 364,
  0, 210, 363, 212, 364, 192, 363,
  0, 184, 363, 178, 360, 170, 351,
  0, 163, 341, 156, 331, 148, 321,
  0, 146, 318, 145, 319, 132, 319,
  0, 130, 319, 130, 319, 130, 321,
  0, 130, 347, 130, 346, 131, 354,
  0, 131, 358, 133, 358, 141, 358,
  0, 144, 359, 144, 362, 141, 363,
  0, 140, 364, 110, 364, 107, 363,
  0, 106, 363, 106, 362, 106, 361,
  0, 106, 360, 107, 359, 108, 358,
  0, 111, 358, 114, 359, 114, 354,
  0, 116, 340, 116, 345, 116, 275,
  0, 116, 264, 115, 262, 110, 261,
  0, 109, 261, 107, 261, 105, 261,
  0, 103, 260, 103, 256, 107, 256,
  0, 141, 256, 153, 255, 163, 261,
  0, 171, 265, 175, 272, 176, 281,
  0, 177, 295, 169, 303, 161, 313,
  0, 160, 314, 160, 314, 160, 315,
  0, 160, 315, 160, 315, 161, 316,
  0, 163, 319, 166, 322, 169, 326,
  0, 196, 359, 193, 356, 210, 359,
  0, 211, 359, 211, 358, 211, 357,
  0, 211, 354, 211, 350, 211, 346,
  0, 211, 345, 211, 345, 212, 345,
  0, 220, 346, 228, 346, 236, 345,
  0, 237, 345, 237, 345, 237, 346,
  0, 237, 346, 238, 373, 238, 373,
  0, 238, 375, 239, 375, 240, 375,
  0, 302, 375, 365, 375, 427, 375,
  0, 400, 328, 373, 281, 346, 234,
  0, 348, 233, 345, 234, 352, 232,
  0, 354, 232, 354, 232, 355, 234,
  0, 363, 247, 433, 368, 433, 368,
  0, 433, 291, 433, 214, 433, 138,
  0, 431, 138, 329, 176, 327, 177,
  0, 326, 178, 325, 177, 325, 176,
  0, 324, 174, 324, 173, 323, 171,
  0, 323, 170, 323, 170, 324, 169,
  0, 324, 169, 419, 133, 427, 131,
  0, 361, 93, 296, 56, 231, 18,
  0, 259, 68, 288, 118, 317, 168,
  0, 317, 168, 317, 169, 317, 169,
  0, 308, 168, 307, 167, 305, 165,
  0, 304, 163, 232, 37, 223, 23,
  0, 214, 37, 140, 169, 138, 169,
  0, 135, 169, 132, 169, 129, 169,
  0, 158, 119, 186, 69, 215, 20,
  0, 215, 20, 215, 20, 215, 20,
  1, 225, 0, 226, 0, 442, 124, 442, 124,
  0, 445, 125, 446, 128, 446, 131,
  0, 446, 214, 446, 298, 446, 381,
  0, 446, 384, 445, 386, 443, 387,
  0, 421, 399, 235, 505, 224, 512,
  0, 223, 512, 222, 512, 221, 512,
  0, 142, 466, 3, 386, 2, 386,
  0, 1, 385, 0, 384, 1, 383,
  0, 1, 382, 1, 157, 1, 130,
  0, 0, 128, 2, 126, 3, 125,
  0, 27, 112, 213, 6, 224, 0,
  0, 224, 0, 225, 0, 225, 0,
  2]);
export default Path;