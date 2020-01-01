// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 111, 205, 110, 220, 109, 234, 109, 248,
  0, 90, 239, 79, 238, 65, 234,
  0, 76, 215, 92, 208, 111, 205,
  0, 111, 205, 111, 205, 111, 205,
  1, 109, 251, 89, 264, 81, 285, 79, 307,
  0, 91, 303, 104, 298, 116, 297,
  0, 111, 285, 109, 269, 109, 251,
  0, 109, 251, 109, 251, 109, 251,
  1, 112, 332, 112, 319, 114, 308, 118, 299,
  0, 123, 308, 129, 317, 136, 326,
  0, 128, 328, 120, 330, 112, 332,
  1, 137, 327, 137, 338, 138, 348, 139, 358,
  0, 147, 357, 154, 355, 160, 351,
  0, 152, 344, 144, 335, 137, 327,
  0, 137, 327, 137, 327, 137, 327,
  1, 165, 376, 170, 373, 176, 369, 181, 366,
  0, 174, 361, 167, 357, 162, 353,
  0, 162, 360, 162, 367, 165, 376,
  0, 165, 376, 165, 376, 165, 376,
  1, 401, 205, 402, 220, 403, 234, 403, 248,
  0, 422, 239, 432, 238, 447, 234,
  0, 436, 215, 420, 208, 401, 205,
  0, 401, 205, 401, 205, 401, 205,
  1, 403, 251, 422, 264, 431, 285, 433, 307,
  0, 420, 303, 408, 298, 396, 297,
  0, 401, 285, 402, 269, 403, 251,
  0, 403, 251, 403, 251, 403, 251,
  1, 399, 332, 399, 319, 397, 308, 394, 299,
  0, 388, 308, 382, 317, 375, 326,
  0, 383, 328, 391, 330, 399, 332,
  1, 375, 327, 374, 338, 374, 348, 373, 358,
  0, 365, 357, 357, 355, 352, 351,
  0, 360, 344, 367, 335, 375, 327,
  0, 375, 327, 375, 327, 375, 327,
  1, 346, 376, 341, 373, 336, 369, 331, 366,
  0, 338, 361, 344, 357, 350, 353,
  0, 349, 360, 350, 367, 346, 376,
  0, 346, 376, 346, 376, 346, 376,
  1, 267, 471, 271, 476, 274, 482, 278, 487,
  0, 280, 483, 281, 479, 283, 475,
  0, 285, 477, 287, 479, 288, 482,
  0, 288, 492, 288, 502, 288, 512,
  0, 309, 504, 309, 445, 314, 414,
  0, 318, 382, 313, 321, 395, 265,
  0, 386, 242, 383, 216, 393, 185,
  0, 421, 189, 447, 196, 456, 239,
  0, 446, 242, 436, 245, 426, 248,
  0, 437, 271, 443, 294, 439, 320,
  0, 430, 317, 421, 315, 412, 313,
  0, 409, 324, 407, 335, 405, 346,
  0, 399, 344, 393, 341, 387, 339,
  0, 384, 350, 381, 361, 378, 373,
  0, 372, 370, 365, 368, 359, 366,
  0, 368, 373, 376, 380, 385, 387,
  0, 388, 377, 391, 368, 394, 358,
  0, 402, 360, 410, 362, 419, 364,
  0, 421, 352, 423, 340, 426, 328,
  0, 434, 333, 443, 338, 452, 343,
  0, 452, 323, 459, 285, 443, 258,
  0, 452, 260, 461, 262, 469, 263,
  0, 473, 241, 467, 224, 462, 207,
  0, 469, 210, 477, 213, 484, 216,
  0, 484, 191, 454, 160, 422, 158,
  0, 402, 157, 366, 133, 368, 106,
  0, 370, 86, 386, 63, 411, 56,
  0, 367, 93, 402, 124, 417, 130,
  0, 421, 118, 434, 61, 417, 0,
  0, 376, 22, 327, 65, 324, 147,
  0, 304, 160, 285, 173, 266, 186,
  0, 264, 217, 263, 248, 262, 279,
  0, 298, 259, 334, 239, 369, 220,
  0, 372, 222, 374, 224, 376, 227,
  0, 370, 228, 365, 229, 359, 230,
  0, 344, 243, 329, 256, 315, 269,
  0, 309, 267, 304, 265, 299, 263,
  0, 289, 280, 280, 296, 271, 313,
  0, 270, 353, 268, 392, 267, 432,
  0, 274, 438, 281, 443, 288, 448,
  0, 277, 453, 267, 459, 256, 464,
  0, 245, 459, 234, 453, 223, 448,
  0, 230, 443, 237, 438, 244, 432,
  0, 243, 392, 242, 353, 241, 313,
  0, 231, 296, 222, 280, 213, 263,
  0, 207, 265, 202, 267, 197, 269,
  0, 182, 256, 168, 243, 153, 230,
  0, 147, 229, 141, 228, 135, 227,
  0, 138, 224, 140, 222, 142, 220,
  0, 178, 239, 214, 259, 250, 279,
  0, 248, 248, 247, 217, 246, 186,
  0, 227, 173, 207, 160, 188, 147,
  0, 185, 65, 135, 22, 95, 0,
  0, 77, 61, 90, 118, 95, 130,
  0, 110, 124, 144, 93, 100, 56,
  0, 126, 63, 141, 86, 143, 106,
  0, 146, 133, 109, 157, 89, 158,
  0, 57, 160, 28, 191, 28, 216,
  0, 35, 213, 42, 210, 50, 207,
  0, 44, 224, 38, 241, 42, 263,
  0, 51, 262, 60, 260, 68, 258,
  0, 53, 285, 59, 323, 60, 343,
  0, 68, 338, 77, 333, 86, 328,
  0, 88, 340, 91, 352, 93, 364,
  0, 101, 362, 109, 360, 118, 358,
  0, 121, 368, 123, 377, 126, 387,
  0, 135, 380, 144, 373, 153, 366,
  0, 146, 368, 140, 370, 134, 373,
  0, 131, 361, 128, 350, 125, 339,
  0, 119, 341, 112, 344, 106, 346,
  0, 104, 335, 102, 324, 100, 313,
  0, 91, 315, 82, 317, 73, 320,
  0, 69, 294, 75, 271, 86, 248,
  0, 76, 245, 66, 242, 56, 239,
  0, 65, 196, 91, 188, 119, 185,
  0, 128, 216, 125, 241, 116, 265,
  0, 199, 321, 193, 382, 198, 414,
  0, 202, 445, 202, 503, 223, 511,
  0, 223, 501, 223, 492, 223, 482,
  0, 225, 479, 227, 477, 229, 475,
  0, 230, 479, 232, 483, 234, 487,
  0, 237, 482, 241, 476, 244, 471,
  0, 248, 478, 252, 485, 256, 492,
  0, 260, 485, 263, 478, 267, 471,
  0, 267, 471, 267, 471, 267, 471,
  2]);
export default Path;
