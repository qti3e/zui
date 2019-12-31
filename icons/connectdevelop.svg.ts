// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 532, 259, 513, 291, 495, 323, 476, 356,
  0, 475, 356, 474, 357, 472, 358,
  0, 465, 350, 459, 343, 452, 336,
  0, 463, 281, 475, 226, 486, 172,
  0, 502, 198, 517, 225, 532, 251,
  0, 532, 252, 531, 254, 531, 255,
  0, 531, 257, 532, 258, 532, 259,
  0, 532, 259, 532, 259, 532, 259,
  1, 466, 366, 459, 366, 452, 366, 445, 366,
  0, 447, 359, 448, 352, 450, 345,
  0, 456, 351, 461, 357, 467, 363,
  0, 466, 364, 466, 365, 466, 366,
  0, 466, 366, 466, 366, 466, 366,
  1, 431, 435, 435, 415, 439, 395, 444, 374,
  0, 451, 374, 458, 374, 466, 374,
  0, 454, 395, 442, 415, 431, 435,
  0, 431, 435, 431, 435, 431, 435,
  1, 418, 457, 417, 460, 415, 462, 414, 465,
  0, 412, 465, 411, 466, 410, 466,
  0, 380, 436, 351, 405, 321, 374,
  0, 359, 374, 397, 374, 435, 374,
  0, 430, 402, 424, 430, 418, 457,
  0, 418, 457, 418, 457, 418, 457,
  1, 298, 469, 295, 467, 292, 465, 288, 465,
  0, 283, 465, 280, 467, 277, 469,
  0, 245, 469, 213, 469, 181, 469,
  0, 211, 438, 242, 406, 272, 374,
  0, 285, 374, 298, 374, 311, 374,
  0, 341, 406, 372, 438, 402, 469,
  0, 367, 469, 333, 469, 298, 469,
  0, 298, 469, 298, 469, 298, 469,
  1, 168, 469, 166, 468, 165, 467, 162, 466,
  0, 162, 465, 161, 465, 161, 464,
  0, 161, 434, 161, 404, 161, 374,
  0, 194, 374, 228, 374, 261, 374,
  0, 230, 406, 200, 438, 169, 469,
  0, 169, 469, 168, 469, 168, 469,
  0, 168, 469, 168, 469, 168, 469,
  1, 161, 307, 175, 292, 189, 278, 203, 263,
  0, 231, 291, 258, 320, 286, 349,
  0, 280, 355, 274, 361, 269, 366,
  0, 233, 366, 197, 366, 161, 366,
  0, 161, 347, 161, 327, 161, 307,
  0, 161, 307, 161, 307, 161, 307,
  1, 161, 219, 173, 232, 185, 245, 198, 257,
  0, 185, 270, 173, 283, 161, 295,
  0, 161, 270, 161, 245, 161, 219,
  0, 161, 219, 161, 219, 161, 219,
  1, 161, 127, 181, 119, 202, 112, 222, 105,
  0, 242, 126, 262, 147, 282, 168,
  0, 255, 196, 229, 224, 202, 252,
  0, 188, 238, 175, 224, 161, 210,
  0, 161, 182, 161, 154, 161, 127,
  0, 161, 127, 161, 127, 161, 127,
  1, 161, 47, 161, 47, 162, 46, 162, 45,
  0, 163, 45, 164, 45, 165, 44,
  0, 182, 62, 199, 80, 216, 98,
  0, 198, 105, 179, 111, 161, 118,
  0, 161, 95, 161, 71, 161, 47,
  0, 161, 47, 161, 47, 161, 47,
  1, 277, 42, 280, 44, 283, 46, 288, 46,
  0, 292, 46, 295, 44, 298, 42,
  0, 323, 42, 348, 42, 373, 42,
  0, 323, 60, 274, 77, 224, 95,
  0, 207, 77, 190, 60, 173, 42,
  0, 208, 42, 243, 42, 277, 42,
  0, 277, 42, 277, 42, 277, 42,
  1, 401, 42, 363, 82, 325, 122, 287, 162,
  0, 268, 142, 249, 122, 230, 102,
  0, 286, 82, 341, 62, 397, 42,
  0, 398, 42, 399, 42, 401, 42,
  0, 401, 42, 401, 42, 401, 42,
  1, 410, 44, 411, 44, 412, 45, 413, 45,
  0, 433, 79, 452, 112, 471, 146,
  0, 471, 146, 471, 146, 471, 146,
  0, 471, 149, 472, 152, 473, 154,
  0, 441, 188, 408, 222, 376, 256,
  0, 348, 226, 321, 197, 293, 168,
  0, 332, 127, 371, 85, 410, 44,
  0, 410, 44, 410, 44, 410, 44,
  1, 296, 349, 323, 322, 349, 294, 376, 267,
  0, 398, 291, 421, 315, 443, 338,
  0, 441, 348, 439, 357, 437, 366,
  0, 396, 366, 355, 366, 313, 366,
  0, 308, 361, 302, 355, 296, 349,
  0, 296, 349, 296, 349, 296, 349,
  1, 291, 343, 263, 315, 235, 286, 208, 258,
  0, 234, 230, 261, 202, 287, 174,
  0, 315, 203, 343, 232, 370, 261,
  0, 344, 289, 317, 316, 291, 343,
  0, 291, 343, 291, 343, 291, 343,
  1, 291, 355, 295, 359, 299, 362, 303, 366,
  0, 295, 366, 288, 366, 280, 366,
  0, 284, 362, 288, 359, 291, 355,
  0, 291, 355, 291, 355, 291, 355,
  1, 480, 160, 480, 161, 480, 161, 480, 161,
  0, 469, 217, 457, 273, 445, 329,
  0, 424, 306, 403, 284, 381, 261,
  0, 414, 228, 447, 194, 479, 160,
  0, 479, 160, 479, 160, 480, 160,
  0, 480, 160, 480, 160, 480, 160,
  1, 153, 121, 138, 126, 124, 132, 109, 137,
  0, 124, 112, 138, 86, 153, 61,
  0, 153, 81, 153, 101, 153, 121,
  0, 153, 121, 153, 121, 153, 121,
  1, 153, 202, 138, 186, 122, 170, 107, 154,
  0, 109, 152, 109, 149, 109, 146,
  0, 109, 146, 109, 146, 109, 145,
  0, 124, 140, 138, 135, 153, 130,
  0, 153, 154, 153, 178, 153, 202,
  0, 153, 202, 153, 202, 153, 202,
  1, 153, 304, 136, 322, 119, 340, 103, 357,
  0, 101, 357, 100, 356, 99, 356,
  0, 80, 324, 62, 291, 43, 259,
  0, 43, 258, 43, 257, 43, 255,
  0, 43, 254, 43, 253, 43, 252,
  0, 61, 222, 78, 192, 95, 162,
  0, 98, 161, 101, 161, 103, 159,
  0, 120, 176, 136, 194, 153, 211,
  0, 153, 242, 153, 273, 153, 304,
  0, 153, 304, 153, 304, 153, 304,
  1, 153, 366, 138, 366, 124, 366, 109, 366,
  0, 109, 365, 109, 364, 108, 363,
  0, 123, 347, 138, 332, 153, 316,
  0, 153, 333, 153, 350, 153, 366,
  0, 153, 366, 153, 366, 153, 366,
  1, 153, 450, 138, 425, 124, 400, 109, 374,
  0, 124, 374, 138, 374, 153, 374,
  0, 153, 400, 153, 425, 153, 450,
  0, 153, 450, 153, 450, 153, 450,
  1, 550, 241, 533, 212, 517, 183, 500, 154,
  0, 501, 152, 502, 149, 502, 146,
  0, 502, 138, 495, 132, 487, 131,
  0, 469, 100, 450, 68, 432, 36,
  0, 432, 34, 433, 32, 433, 31,
  0, 433, 22, 426, 15, 417, 15,
  0, 413, 15, 409, 18, 406, 21,
  0, 370, 21, 335, 21, 299, 21,
  0, 296, 18, 292, 16, 288, 16,
  0, 283, 16, 279, 18, 276, 21,
  0, 241, 21, 205, 21, 170, 21,
  0, 167, 18, 163, 16, 158, 16,
  0, 150, 16, 143, 22, 143, 31,
  0, 143, 32, 143, 34, 144, 36,
  0, 125, 68, 107, 100, 88, 133,
  0, 83, 135, 79, 140, 79, 146,
  0, 79, 147, 79, 148, 79, 148,
  0, 61, 179, 44, 210, 26, 240,
  0, 19, 242, 13, 248, 13, 255,
  0, 13, 262, 18, 269, 25, 270,
  0, 44, 302, 62, 334, 80, 366,
  0, 80, 367, 80, 369, 80, 370,
  0, 80, 378, 85, 384, 92, 385,
  0, 109, 415, 126, 445, 143, 475,
  0, 143, 476, 142, 478, 142, 480,
  0, 142, 489, 149, 496, 158, 496,
  0, 162, 496, 166, 493, 169, 490,
  0, 205, 490, 240, 490, 276, 490,
  0, 279, 493, 283, 496, 288, 496,
  0, 292, 496, 296, 493, 299, 490,
  0, 335, 490, 370, 490, 406, 490,
  0, 409, 493, 413, 495, 417, 495,
  0, 426, 495, 432, 488, 432, 480,
  0, 432, 478, 432, 477, 432, 475,
  0, 449, 445, 466, 415, 483, 385,
  0, 490, 384, 495, 378, 495, 370,
  0, 495, 369, 495, 367, 495, 366,
  0, 513, 334, 531, 302, 549, 270,
  0, 556, 269, 562, 263, 562, 255,
  0, 562, 248, 557, 242, 550, 241,
  0, 550, 241, 550, 241, 550, 241,
  2]);
export default Path;