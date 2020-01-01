// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 227, 206, 231, 222, 240, 231, 251, 230,
  0, 246, 219, 239, 210, 227, 206,
  0, 227, 206, 227, 206, 227, 206,
  1, 99, 179, 94, 170, 86, 163, 77, 158,
  0, 91, 157, 103, 158, 116, 161,
  0, 109, 149, 108, 137, 111, 123,
  0, 117, 134, 125, 143, 135, 149,
  0, 155, 163, 171, 169, 182, 180,
  0, 185, 183, 188, 187, 191, 190,
  0, 191, 188, 190, 186, 189, 184,
  0, 184, 174, 176, 166, 167, 159,
  0, 165, 158, 164, 157, 163, 155,
  0, 160, 142, 160, 130, 162, 117,
  0, 163, 112, 165, 106, 167, 101,
  0, 168, 99, 169, 96, 171, 94,
  0, 172, 101, 171, 120, 191, 140,
  0, 201, 152, 213, 162, 224, 173,
  0, 233, 182, 243, 190, 250, 200,
  0, 251, 202, 252, 203, 254, 205,
  0, 249, 192, 240, 180, 230, 171,
  0, 220, 161, 210, 152, 200, 143,
  0, 197, 140, 196, 137, 195, 133,
  0, 194, 122, 195, 112, 200, 102,
  0, 200, 101, 201, 100, 201, 99,
  0, 202, 103, 202, 107, 203, 111,
  0, 208, 134, 223, 147, 252, 174,
  0, 262, 184, 271, 193, 278, 206,
  0, 283, 215, 285, 225, 283, 235,
  0, 283, 236, 284, 237, 285, 237,
  0, 291, 240, 295, 244, 294, 252,
  0, 302, 249, 307, 244, 311, 237,
  0, 315, 257, 302, 287, 283, 296,
  0, 284, 291, 288, 272, 267, 268,
  0, 260, 267, 254, 267, 244, 266,
  0, 249, 257, 254, 245, 245, 244,
  0, 220, 239, 192, 246, 187, 248,
  0, 195, 249, 203, 249, 210, 252,
  0, 208, 258, 206, 264, 204, 270,
  0, 203, 277, 207, 285, 214, 280,
  0, 215, 279, 216, 278, 217, 277,
  0, 214, 295, 214, 293, 214, 296,
  0, 215, 306, 224, 303, 230, 303,
  0, 227, 315, 200, 330, 185, 329,
  0, 192, 324, 197, 318, 200, 311,
  0, 194, 312, 188, 312, 181, 313,
  0, 181, 313, 181, 313, 181, 312,
  0, 186, 309, 189, 305, 191, 299,
  0, 200, 278, 188, 261, 166, 259,
  0, 157, 259, 148, 260, 140, 265,
  0, 146, 249, 157, 238, 173, 230,
  0, 158, 226, 164, 228, 148, 224,
  0, 163, 215, 178, 211, 195, 209,
  0, 190, 206, 147, 206, 125, 230,
  0, 132, 232, 140, 233, 148, 234,
  0, 124, 241, 104, 254, 85, 270,
  0, 86, 265, 88, 261, 89, 256,
  0, 89, 251, 89, 247, 89, 242,
  0, 87, 233, 80, 227, 69, 226,
  0, 61, 225, 53, 226, 46, 227,
  0, 45, 227, 44, 227, 43, 227,
  0, 59, 212, 79, 205, 96, 194,
  0, 102, 189, 103, 185, 99, 179,
  0, 99, 179, 99, 179, 99, 179,
  1, 488, 351, 479, 348, 466, 347, 460, 348,
  0, 469, 352, 474, 354, 478, 360,
  0, 491, 374, 489, 395, 473, 405,
  0, 461, 414, 448, 416, 434, 415,
  0, 433, 414, 432, 414, 431, 414,
  0, 434, 410, 437, 407, 439, 403,
  0, 449, 386, 445, 361, 430, 347,
  0, 428, 345, 426, 343, 423, 341,
  0, 423, 342, 423, 343, 424, 344,
  0, 428, 361, 415, 376, 399, 376,
  0, 391, 375, 385, 372, 379, 367,
  0, 360, 351, 340, 335, 321, 319,
  0, 315, 314, 308, 311, 301, 310,
  0, 296, 310, 291, 310, 287, 309,
  0, 281, 309, 278, 307, 276, 301,
  0, 275, 298, 275, 294, 274, 291,
  0, 273, 283, 268, 278, 260, 277,
  0, 255, 276, 251, 276, 246, 275,
  0, 233, 274, 227, 268, 224, 255,
  0, 219, 266, 222, 277, 231, 285,
  0, 236, 288, 240, 292, 245, 296,
  0, 250, 300, 252, 305, 253, 311,
  0, 253, 315, 254, 320, 255, 325,
  0, 257, 335, 264, 343, 272, 350,
  0, 288, 364, 305, 377, 321, 391,
  0, 339, 406, 335, 424, 334, 447,
  0, 333, 470, 346, 490, 368, 498,
  0, 369, 499, 370, 499, 371, 499,
  0, 356, 481, 361, 455, 372, 447,
  0, 372, 449, 372, 451, 373, 453,
  0, 382, 497, 418, 518, 458, 510,
  0, 474, 507, 488, 501, 501, 490,
  0, 503, 489, 504, 486, 507, 484,
  0, 487, 489, 471, 484, 456, 473,
  0, 456, 473, 457, 473, 458, 473,
  0, 479, 475, 498, 470, 515, 456,
  0, 534, 439, 541, 413, 532, 390,
  0, 524, 370, 508, 357, 488, 351,
  0, 488, 351, 488, 351, 488, 351,
  1, 316, 397, 277, 364, 293, 378, 274, 362,
  0, 273, 362, 274, 361, 272, 365,
  0, 260, 384, 246, 400, 228, 412,
  0, 217, 419, 206, 424, 194, 424,
  0, 172, 424, 155, 414, 144, 396,
  0, 132, 377, 131, 355, 136, 334,
  0, 144, 300, 166, 278, 175, 269,
  0, 156, 263, 142, 271, 128, 283,
  0, 129, 269, 132, 257, 140, 246,
  0, 116, 256, 94, 271, 75, 290,
  0, 75, 284, 81, 246, 81, 245,
  0, 81, 242, 80, 240, 78, 238,
  0, 54, 262, 33, 289, 22, 322,
  0, 29, 316, 37, 311, 45, 306,
  0, 37, 328, 26, 359, 37, 407,
  0, 42, 426, 49, 444, 62, 459,
  0, 64, 463, 68, 466, 71, 470,
  0, 71, 469, 71, 469, 72, 469,
  0, 70, 462, 69, 455, 70, 447,
  0, 72, 451, 74, 453, 76, 456,
  0, 89, 472, 105, 483, 123, 492,
  0, 148, 503, 174, 505, 201, 500,
  0, 256, 490, 292, 452, 317, 401,
  0, 318, 400, 318, 398, 316, 397,
  0, 316, 397, 316, 397, 316, 397,
  1, 552, 222, 540, 210, 527, 201, 511, 195,
  0, 499, 190, 485, 187, 472, 188,
  0, 462, 189, 452, 191, 443, 194,
  0, 440, 195, 437, 196, 435, 196,
  0, 430, 198, 428, 193, 430, 190,
  0, 433, 185, 434, 185, 445, 178,
  0, 446, 177, 446, 177, 447, 176,
  0, 447, 176, 446, 176, 445, 176,
  0, 444, 176, 444, 176, 443, 176,
  0, 424, 180, 412, 192, 394, 206,
  0, 384, 214, 380, 210, 382, 206,
  0, 383, 202, 385, 199, 387, 196,
  0, 388, 194, 389, 192, 391, 190,
  0, 390, 190, 390, 190, 390, 190,
  0, 363, 208, 343, 232, 332, 263,
  0, 333, 264, 333, 264, 333, 264,
  0, 334, 264, 334, 263, 334, 262,
  0, 345, 250, 357, 241, 371, 233,
  0, 389, 222, 408, 214, 429, 212,
  0, 434, 212, 438, 212, 443, 212,
  0, 441, 213, 439, 213, 437, 213,
  0, 419, 216, 402, 222, 386, 232,
  0, 356, 250, 331, 274, 311, 302,
  0, 310, 303, 310, 303, 310, 304,
  0, 324, 309, 334, 321, 346, 329,
  0, 346, 329, 346, 329, 346, 329,
  0, 347, 328, 347, 327, 348, 326,
  0, 360, 299, 375, 274, 394, 252,
  0, 411, 233, 432, 226, 457, 232,
  0, 463, 233, 468, 236, 474, 238,
  0, 476, 237, 479, 235, 482, 234,
  0, 491, 229, 500, 227, 509, 225,
  0, 524, 222, 538, 220, 553, 223,
  0, 553, 223, 553, 223, 553, 223,
  0, 553, 223, 552, 222, 552, 222,
  0, 552, 222, 552, 222, 552, 222,
  1, 82, 98, 81, 81, 84, 65, 95, 50,
  0, 95, 58, 96, 65, 99, 72,
  0, 105, 44, 119, 23, 141, 6,
  0, 139, 12, 138, 18, 138, 24,
  0, 147, 17, 157, 6, 183, 1,
  0, 197, 0, 212, 0, 225, 2,
  0, 263, 12, 286, 37, 294, 75,
  0, 300, 98, 295, 120, 286, 141,
  0, 281, 153, 274, 165, 265, 176,
  0, 263, 174, 262, 172, 260, 171,
  0, 217, 130, 233, 145, 222, 133,
  0, 221, 132, 221, 131, 222, 130,
  0, 230, 116, 234, 101, 232, 86,
  0, 231, 76, 228, 67, 221, 59,
  0, 206, 44, 182, 44, 167, 60,
  0, 156, 72, 153, 87, 156, 104,
  0, 157, 105, 157, 106, 156, 107,
  0, 153, 121, 152, 135, 154, 149,
  0, 154, 150, 154, 150, 154, 151,
  0, 154, 151, 154, 151, 154, 152,
  0, 132, 141, 118, 123, 111, 100,
  0, 102, 117, 100, 135, 104, 154,
  0, 88, 138, 83, 119, 82, 98,
  0, 82, 98, 82, 98, 82, 98,
  2]);
export default Path;