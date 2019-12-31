// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 478, 449, 470, 447, 466, 460, 469, 467,
  0, 471, 473, 479, 480, 486, 483,
  0, 495, 486, 507, 480, 507, 474,
  0, 508, 465, 487, 450, 478, 449,
  0, 478, 449, 478, 449, 478, 449,
  1, 501, 407, 486, 405, 476, 426, 482, 437,
  0, 487, 447, 506, 462, 518, 465,
  0, 535, 469, 550, 461, 550, 450,
  0, 550, 432, 516, 408, 501, 407,
  0, 501, 407, 501, 407, 501, 407,
  1, 68, 474, 68, 480, 80, 486, 89, 483,
  0, 96, 480, 104, 473, 106, 467,
  0, 109, 460, 105, 447, 97, 449,
  0, 88, 450, 67, 465, 68, 474,
  0, 68, 474, 68, 474, 68, 474,
  1, 290, 230, 319, 230, 342, 209, 342, 182,
  0, 342, 146, 302, 124, 270, 138,
  0, 279, 141, 286, 149, 286, 159,
  0, 286, 183, 253, 191, 240, 171,
  0, 233, 205, 259, 230, 290, 230,
  0, 290, 230, 290, 230, 290, 230,
  1, 74, 407, 59, 408, 25, 432, 25, 450,
  0, 25, 461, 41, 469, 57, 465,
  0, 69, 462, 88, 447, 93, 437,
  0, 99, 426, 89, 405, 74, 407,
  0, 74, 407, 74, 407, 74, 407,
  1, 372, 75, 369, 3, 272, -4, 246, 51,
  0, 291, 27, 337, 35, 372, 75,
  0, 372, 75, 372, 75, 372, 75,
  1, 560, 454, 547, 473, 520, 489, 500, 490,
  0, 481, 491, 460, 477, 460, 453,
  0, 466, 430, 479, 403, 493, 399,
  0, 516, 392, 563, 423, 560, 454,
  0, 560, 454, 560, 454, 560, 454,
  1, 454, 447, 418, 428, 381, 412, 342, 400,
  0, 380, 380, 414, 353, 445, 323,
  0, 448, 324, 450, 325, 453, 326,
  0, 453, 327, 453, 328, 453, 329,
  0, 449, 331, 446, 335, 448, 339,
  0, 450, 343, 456, 347, 463, 348,
  0, 465, 351, 468, 353, 471, 355,
  0, 471, 368, 470, 382, 470, 396,
  0, 470, 396, 470, 396, 470, 396,
  0, 461, 412, 455, 433, 454, 447,
  0, 454, 447, 454, 447, 454, 447,
  1, 443, 460, 340, 463, 237, 464, 134, 460,
  0, 134, 460, 134, 460, 134, 460,
  0, 134, 460, 134, 460, 134, 460,
  0, 134, 460, 134, 460, 134, 460,
  0, 169, 438, 206, 421, 246, 409,
  0, 258, 414, 269, 419, 281, 422,
  0, 283, 423, 283, 423, 285, 422,
  0, 300, 418, 314, 413, 328, 407,
  0, 369, 419, 406, 439, 443, 460,
  0, 443, 460, 443, 460, 443, 460,
  1, 106, 395, 105, 382, 105, 368, 105, 355,
  0, 105, 355, 106, 355, 106, 355,
  0, 108, 353, 111, 351, 113, 348,
  0, 120, 347, 126, 343, 129, 339,
  0, 132, 332, 122, 331, 123, 327,
  0, 126, 325, 129, 324, 131, 323,
  0, 160, 352, 190, 380, 228, 400,
  0, 191, 411, 156, 428, 122, 447,
  0, 121, 428, 115, 411, 106, 395,
  0, 106, 395, 106, 395, 106, 395,
  1, 114, 461, 110, 479, 92, 491, 75, 490,
  0, 55, 489, 28, 473, 15, 454,
  0, 13, 422, 59, 392, 82, 399,
  0, 96, 403, 109, 430, 115, 453,
  0, 115, 456, 115, 459, 114, 461,
  0, 114, 461, 114, 461, 114, 461,
  1, 136, 289, 144, 288, 152, 287, 159, 286,
  0, 161, 292, 163, 298, 166, 304,
  0, 176, 321, 210, 339, 212, 311,
  0, 218, 325, 252, 323, 266, 321,
  0, 282, 320, 290, 320, 293, 307,
  0, 306, 311, 324, 311, 337, 310,
  0, 348, 309, 358, 310, 362, 301,
  0, 363, 306, 364, 313, 366, 318,
  0, 377, 339, 404, 319, 413, 286,
  0, 422, 287, 431, 288, 440, 289,
  0, 439, 290, 436, 296, 447, 301,
  0, 399, 348, 351, 389, 284, 408,
  0, 221, 387, 172, 348, 128, 301,
  0, 138, 298, 138, 292, 136, 289,
  0, 136, 289, 136, 289, 136, 289,
  1, 171, 257, 183, 257, 196, 256, 208, 256,
  0, 206, 271, 205, 299, 203, 308,
  0, 202, 315, 199, 315, 194, 312,
  0, 172, 303, 166, 277, 171, 257,
  0, 171, 257, 171, 257, 171, 257,
  1, 278, 309, 265, 312, 236, 313, 223, 307,
  0, 217, 304, 219, 265, 221, 255,
  0, 240, 255, 260, 255, 279, 254,
  0, 279, 255, 279, 255, 279, 255,
  0, 280, 263, 282, 306, 278, 309,
  0, 278, 309, 278, 309, 278, 309,
  1, 350, 255, 351, 260, 354, 295, 349, 297,
  0, 337, 300, 309, 301, 298, 296,
  0, 293, 293, 293, 260, 293, 254,
  0, 293, 255, 293, 255, 293, 255,
  0, 312, 254, 331, 254, 350, 255,
  0, 350, 255, 350, 255, 350, 255,
  1, 404, 256, 404, 274, 397, 305, 381, 313,
  0, 368, 320, 375, 306, 365, 255,
  0, 378, 256, 391, 256, 404, 256,
  0, 404, 256, 404, 256, 404, 256,
  1, 289, 82, 331, 82, 365, 116, 365, 158,
  0, 365, 200, 331, 234, 289, 234,
  0, 247, 234, 212, 200, 212, 158,
  0, 212, 116, 247, 82, 289, 82,
  0, 289, 82, 289, 82, 289, 82,
  1, 105, 245, 101, 245, 97, 244, 92, 244,
  0, 87, 225, 90, 205, 97, 191,
  0, 97, 191, 97, 191, 97, 191,
  0, 101, 190, 105, 188, 110, 186,
  0, 114, 184, 119, 182, 124, 181,
  0, 114, 201, 107, 223, 105, 245,
  0, 105, 245, 105, 245, 105, 245,
  1, 57, 230, 55, 228, 53, 225, 52, 223,
  0, 53, 201, 62, 180, 82, 174,
  0, 85, 177, 91, 179, 96, 179,
  0, 83, 195, 79, 221, 83, 242,
  0, 72, 240, 62, 236, 57, 230,
  0, 57, 230, 57, 230, 57, 230,
  1, 47, 203, 46, 192, 49, 163, 61, 151,
  0, 68, 144, 75, 146, 75, 152,
  0, 75, 158, 76, 164, 77, 167,
  0, 60, 174, 51, 189, 47, 203,
  0, 47, 203, 47, 203, 47, 203,
  1, 470, 180, 483, 192, 490, 220, 484, 244,
  0, 480, 244, 476, 245, 472, 245,
  0, 470, 223, 465, 201, 458, 180,
  0, 462, 180, 466, 180, 470, 180,
  0, 470, 180, 470, 180, 470, 180,
  1, 494, 174, 513, 180, 522, 201, 523, 223,
  0, 522, 225, 520, 228, 518, 230,
  0, 513, 236, 503, 240, 492, 242,
  0, 497, 221, 493, 195, 480, 179,
  0, 484, 179, 490, 177, 494, 174,
  0, 494, 174, 494, 174, 494, 174,
  1, 498, 167, 499, 164, 501, 159, 501, 152,
  0, 501, 146, 507, 144, 515, 151,
  0, 526, 163, 530, 192, 529, 203,
  0, 525, 189, 516, 174, 498, 167,
  0, 498, 167, 498, 167, 498, 167,
  1, 572, 421, 578, 411, 577, 406, 567, 409,
  0, 564, 404, 560, 400, 556, 396,
  0, 559, 386, 555, 381, 545, 386,
  0, 540, 383, 535, 380, 529, 377,
  0, 529, 362, 517, 365, 511, 371,
  0, 501, 370, 493, 371, 484, 377,
  0, 485, 371, 485, 364, 485, 357,
  0, 497, 357, 525, 346, 531, 321,
  0, 532, 314, 532, 307, 530, 299,
  0, 527, 286, 516, 278, 505, 274,
  0, 504, 268, 498, 259, 490, 258,
  0, 483, 256, 478, 263, 476, 268,
  0, 468, 268, 457, 271, 455, 276,
  0, 450, 276, 444, 275, 438, 274,
  0, 441, 273, 444, 271, 447, 270,
  0, 452, 261, 461, 258, 472, 258,
  0, 472, 257, 472, 256, 472, 256,
  0, 492, 255, 516, 250, 526, 237,
  0, 539, 224, 541, 200, 539, 182,
  0, 536, 165, 529, 145, 514, 134,
  0, 506, 128, 493, 133, 491, 144,
  0, 489, 163, 493, 174, 453, 169,
  0, 443, 145, 428, 124, 410, 109,
  0, 341, 49, 242, 55, 166, 71,
  0, 186, 76, 207, 80, 226, 88,
  0, 199, 90, 173, 99, 149, 111,
  0, 117, 128, 105, 141, 93, 153,
  0, 108, 151, 122, 148, 137, 149,
  0, 127, 155, 118, 162, 110, 169,
  0, 84, 170, 86, 164, 84, 144,
  0, 83, 133, 70, 128, 61, 134,
  0, 33, 154, 28, 214, 49, 237,
  0, 60, 250, 84, 255, 104, 255,
  0, 104, 256, 104, 257, 104, 258,
  0, 114, 258, 123, 261, 128, 270,
  0, 131, 271, 134, 272, 136, 274,
  0, 131, 275, 125, 276, 120, 276,
  0, 116, 269, 106, 268, 99, 268,
  0, 97, 262, 92, 256, 85, 258,
  0, 78, 260, 70, 268, 70, 274,
  0, 47, 283, 40, 300, 45, 321,
  0, 50, 346, 78, 357, 90, 357,
  0, 90, 364, 90, 370, 90, 377,
  0, 84, 372, 76, 370, 64, 371,
  0, 58, 366, 46, 361, 46, 377,
  0, 40, 380, 35, 383, 30, 386,
  0, 21, 381, 17, 385, 19, 395,
  0, 15, 400, 12, 404, 8, 409,
  0, -1, 406, -2, 411, 3, 421,
  0, 2, 424, 1, 428, 1, 432,
  0, 0, 463, 46, 496, 74, 497,
  0, 92, 497, 109, 488, 117, 473,
  0, 231, 478, 344, 477, 458, 473,
  0, 466, 488, 483, 498, 500, 497,
  0, 530, 496, 575, 463, 574, 432,
  0, 574, 428, 573, 424, 572, 421,
  0, 572, 421, 572, 421, 572, 421,
  2]);
export default Path;