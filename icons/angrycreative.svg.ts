// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 126, 222, 134, 221, 142, 221, 150, 220,
  0, 147, 208, 144, 195, 141, 183,
  0, 136, 196, 131, 209, 126, 222,
  0, 126, 222, 126, 222, 126, 222,
  1, 327, 214, 333, 219, 340, 222, 349, 221,
  0, 353, 221, 358, 220, 362, 217,
  0, 367, 214, 372, 209, 377, 203,
  0, 366, 204, 354, 205, 343, 205,
  0, 343, 197, 344, 189, 345, 181,
  0, 366, 180, 387, 179, 408, 177,
  0, 409, 173, 409, 169, 409, 165,
  0, 399, 166, 389, 167, 378, 167,
  0, 374, 164, 370, 161, 367, 159,
  0, 363, 157, 359, 156, 355, 157,
  0, 347, 157, 340, 160, 333, 166,
  0, 325, 172, 321, 180, 320, 190,
  0, 319, 200, 321, 207, 327, 213,
  0, 327, 213, 327, 214, 327, 214,
  1, 436, 179, 447, 178, 454, 177, 458, 174,
  0, 462, 172, 465, 168, 466, 162,
  0, 466, 157, 465, 154, 462, 152,
  0, 459, 150, 452, 149, 439, 150,
  0, 438, 160, 437, 169, 436, 179,
  0, 436, 179, 436, 179, 436, 179,
  1, 160, 261, 158, 255, 157, 249, 155, 243,
  0, 142, 244, 129, 245, 116, 246,
  0, 113, 252, 110, 258, 108, 264,
  0, 97, 265, 86, 266, 76, 266,
  0, 95, 226, 114, 185, 133, 144,
  0, 141, 144, 149, 143, 157, 143,
  0, 167, 177, 177, 211, 187, 245,
  0, 191, 210, 194, 175, 197, 140,
  0, 206, 140, 215, 139, 224, 138,
  0, 237, 160, 249, 181, 262, 202,
  0, 264, 180, 266, 158, 269, 135,
  0, 278, 135, 288, 134, 297, 133,
  0, 296, 147, 294, 161, 293, 175,
  0, 300, 161, 316, 130, 357, 127,
  0, 397, 124, 409, 156, 410, 157,
  0, 411, 147, 412, 136, 413, 125,
  0, 426, 125, 440, 124, 453, 123,
  0, 465, 122, 480, 123, 489, 132,
  0, 488, 128, 486, 124, 485, 121,
  0, 495, 120, 506, 119, 517, 118,
  0, 521, 133, 525, 147, 530, 162,
  0, 537, 146, 545, 131, 553, 116,
  0, 563, 115, 573, 114, 584, 114,
  0, 569, 140, 555, 166, 540, 192,
  0, 539, 207, 537, 222, 535, 236,
  0, 526, 237, 516, 238, 507, 238,
  0, 509, 223, 510, 209, 512, 194,
  0, 506, 180, 501, 165, 496, 151,
  0, 497, 173, 487, 191, 464, 201,
  0, 472, 213, 481, 226, 489, 239,
  0, 477, 240, 465, 241, 453, 242,
  0, 446, 229, 440, 217, 434, 205,
  0, 432, 218, 431, 230, 430, 243,
  0, 420, 244, 411, 244, 401, 245,
  0, 402, 235, 403, 224, 404, 214,
  0, 398, 223, 385, 249, 345, 252,
  0, 319, 253, 299, 241, 289, 212,
  0, 288, 226, 287, 239, 285, 253,
  0, 277, 253, 269, 254, 260, 254,
  0, 248, 233, 235, 212, 223, 191,
  0, 221, 213, 219, 235, 217, 257,
  0, 198, 258, 179, 260, 160, 261,
  0, 160, 261, 160, 261, 160, 261,
  1, 330, 336, 327, 323, 325, 310, 322, 298,
  0, 317, 311, 311, 324, 306, 337,
  0, 314, 337, 322, 336, 330, 336,
  0, 330, 336, 330, 336, 330, 336,
  1, 194, 381, 196, 361, 198, 341, 200, 321,
  0, 195, 334, 186, 342, 172, 347,
  0, 180, 358, 187, 369, 194, 381,
  0, 194, 381, 194, 381, 194, 381,
  1, 173, 310, 174, 297, 166, 296, 147, 297,
  0, 146, 307, 145, 316, 144, 326,
  0, 159, 325, 172, 324, 173, 310,
  0, 173, 310, 173, 310, 173, 310,
  1, 117, 317, 108, 318, 100, 319, 91, 319,
  0, 84, 307, 76, 303, 65, 303,
  0, 46, 305, 31, 321, 30, 337,
  0, 29, 353, 37, 369, 59, 368,
  0, 71, 367, 80, 359, 88, 349,
  0, 97, 348, 106, 348, 115, 347,
  0, 115, 337, 116, 327, 117, 317,
  0, 117, 317, 117, 317, 117, 317,
  1, 162, 388, 155, 376, 149, 364, 142, 352,
  0, 141, 364, 140, 377, 139, 389,
  0, 129, 390, 120, 390, 110, 391,
  0, 111, 381, 112, 371, 113, 362,
  0, 102, 380, 81, 396, 56, 397,
  0, 23, 399, -3, 377, 0, 339,
  0, 2, 310, 27, 276, 67, 274,
  0, 105, 271, 115, 297, 119, 303,
  0, 120, 292, 120, 282, 121, 272,
  0, 134, 271, 147, 270, 160, 269,
  0, 180, 268, 199, 273, 203, 293,
  0, 204, 284, 205, 275, 205, 266,
  0, 227, 265, 249, 264, 270, 262,
  0, 269, 272, 268, 281, 268, 290,
  0, 255, 291, 243, 292, 231, 293,
  0, 231, 298, 230, 304, 229, 310,
  0, 242, 310, 254, 309, 266, 308,
  0, 265, 317, 264, 327, 263, 336,
  0, 251, 337, 239, 338, 227, 338,
  0, 226, 345, 225, 352, 225, 358,
  0, 237, 357, 249, 357, 261, 356,
  0, 260, 363, 260, 370, 259, 377,
  0, 277, 338, 296, 299, 314, 260,
  0, 322, 259, 330, 258, 338, 258,
  0, 349, 295, 359, 332, 370, 369,
  0, 373, 340, 376, 311, 379, 283,
  0, 371, 283, 364, 284, 357, 284,
  0, 357, 275, 358, 266, 359, 256,
  0, 384, 255, 409, 253, 434, 252,
  0, 433, 261, 432, 270, 431, 280,
  0, 423, 280, 415, 281, 407, 281,
  0, 404, 312, 401, 342, 397, 373,
  0, 378, 374, 359, 375, 339, 377,
  0, 338, 372, 337, 366, 335, 361,
  0, 322, 362, 309, 363, 296, 364,
  0, 293, 369, 290, 374, 288, 380,
  0, 246, 382, 204, 385, 162, 388,
  0, 162, 388, 162, 388, 162, 388,
  1, 426, 371, 436, 370, 445, 370, 455, 369,
  0, 459, 329, 463, 289, 468, 249,
  0, 458, 250, 449, 250, 439, 251,
  0, 435, 291, 431, 331, 426, 371,
  0, 426, 371, 426, 371, 426, 371,
  1, 640, 238, 638, 247, 637, 257, 636, 266,
  0, 625, 267, 613, 267, 602, 268,
  0, 601, 274, 600, 280, 600, 286,
  0, 611, 286, 623, 285, 634, 284,
  0, 633, 293, 632, 303, 631, 312,
  0, 620, 313, 608, 314, 597, 314,
  0, 596, 321, 595, 328, 594, 335,
  0, 606, 334, 617, 333, 629, 332,
  0, 628, 341, 627, 350, 626, 358,
  0, 604, 360, 583, 361, 561, 363,
  0, 565, 325, 570, 287, 574, 249,
  0, 558, 288, 542, 326, 527, 365,
  0, 516, 365, 505, 366, 495, 367,
  0, 487, 327, 479, 288, 471, 249,
  0, 481, 248, 491, 248, 501, 247,
  0, 506, 273, 510, 300, 515, 326,
  0, 525, 299, 536, 271, 546, 244,
  0, 577, 242, 608, 240, 640, 238,
  0, 640, 238, 640, 238, 640, 238,
  2]);
export default Path;