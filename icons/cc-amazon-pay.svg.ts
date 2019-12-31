// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 544, 311, 543, 307, 540, 305, 536, 304,
  0, 530, 302, 524, 301, 518, 301,
  0, 507, 300, 496, 300, 486, 302,
  0, 474, 304, 462, 308, 452, 315,
  0, 451, 316, 450, 317, 449, 318,
  0, 448, 319, 448, 321, 448, 322,
  0, 449, 323, 450, 323, 451, 323,
  0, 452, 323, 453, 323, 453, 323,
  0, 460, 322, 466, 322, 473, 321,
  0, 482, 320, 492, 319, 502, 320,
  0, 506, 320, 510, 321, 514, 322,
  0, 518, 323, 520, 327, 520, 331,
  0, 520, 338, 519, 344, 517, 351,
  0, 514, 363, 509, 376, 504, 388,
  0, 503, 389, 503, 390, 503, 391,
  0, 503, 393, 504, 395, 506, 394,
  0, 508, 394, 509, 393, 510, 392,
  0, 514, 389, 518, 385, 521, 381,
  0, 532, 367, 538, 351, 542, 334,
  0, 542, 331, 543, 328, 543, 325,
  0, 544, 321, 544, 316, 544, 311,
  0, 544, 311, 544, 311, 544, 311,
  1, 493, 339, 490, 338, 488, 339, 486, 340,
  0, 442, 358, 396, 370, 349, 375,
  0, 334, 377, 320, 378, 305, 379,
  0, 278, 379, 252, 378, 225, 374,
  0, 208, 372, 190, 369, 172, 364,
  0, 135, 355, 100, 343, 66, 326,
  0, 57, 321, 48, 316, 40, 312,
  0, 36, 309, 33, 310, 31, 314,
  0, 31, 314, 31, 315, 31, 315,
  0, 33, 317, 34, 319, 35, 320,
  0, 71, 352, 112, 377, 157, 393,
  0, 179, 401, 202, 407, 224, 411,
  0, 238, 413, 252, 414, 267, 415,
  0, 270, 415, 273, 415, 276, 415,
  0, 276, 415, 277, 416, 278, 416,
  0, 284, 416, 290, 416, 295, 416,
  0, 296, 416, 297, 415, 298, 415,
  0, 312, 415, 327, 414, 342, 411,
  0, 364, 408, 385, 403, 405, 397,
  0, 435, 387, 463, 374, 488, 357,
  0, 491, 355, 494, 353, 496, 350,
  0, 501, 346, 499, 340, 493, 339,
  0, 493, 339, 493, 339, 493, 339,
  1, 98, 106, 98, 165, 98, 223, 98, 282,
  0, 98, 283, 98, 283, 98, 284,
  0, 98, 287, 100, 288, 102, 288,
  0, 108, 289, 114, 289, 120, 288,
  0, 123, 288, 124, 287, 124, 284,
  0, 124, 284, 124, 283, 124, 282,
  0, 124, 262, 124, 241, 124, 221,
  0, 125, 222, 126, 222, 126, 223,
  0, 141, 235, 158, 239, 177, 236,
  0, 194, 232, 206, 222, 214, 206,
  0, 220, 195, 222, 182, 223, 169,
  0, 223, 155, 222, 141, 216, 128,
  0, 209, 111, 197, 100, 179, 97,
  0, 176, 96, 174, 96, 171, 96,
  0, 169, 96, 166, 96, 164, 96,
  0, 163, 96, 162, 96, 160, 96,
  0, 149, 98, 138, 102, 129, 109,
  0, 127, 110, 125, 112, 123, 113,
  0, 123, 113, 122, 113, 122, 112,
  0, 122, 110, 122, 108, 121, 105,
  0, 121, 101, 119, 100, 115, 100,
  0, 112, 100, 108, 100, 105, 100,
  0, 99, 100, 98, 101, 98, 106,
  0, 98, 106, 98, 106, 98, 106,
  1, 242, 206, 244, 217, 250, 226, 260, 232,
  0, 270, 238, 281, 238, 292, 237,
  0, 304, 235, 316, 229, 325, 221,
  0, 326, 221, 326, 221, 327, 220,
  0, 327, 223, 328, 226, 328, 229,
  0, 329, 232, 330, 234, 333, 234,
  0, 337, 234, 342, 234, 347, 234,
  0, 349, 234, 350, 232, 351, 230,
  0, 351, 229, 351, 228, 351, 228,
  0, 351, 198, 351, 168, 351, 139,
  0, 351, 135, 350, 132, 350, 128,
  0, 348, 117, 344, 108, 334, 103,
  0, 328, 99, 322, 98, 316, 97,
  0, 313, 96, 310, 96, 307, 96,
  0, 303, 96, 300, 96, 297, 96,
  0, 296, 96, 295, 96, 294, 96,
  0, 286, 96, 278, 97, 270, 99,
  0, 265, 101, 260, 103, 255, 104,
  0, 252, 105, 250, 108, 251, 111,
  0, 251, 114, 250, 116, 251, 119,
  0, 251, 123, 252, 124, 256, 123,
  0, 263, 122, 269, 120, 276, 118,
  0, 286, 117, 297, 116, 307, 117,
  0, 313, 118, 318, 120, 321, 124,
  0, 324, 128, 325, 133, 326, 138,
  0, 326, 145, 326, 152, 326, 159,
  0, 326, 159, 326, 159, 326, 160,
  0, 325, 160, 325, 160, 325, 160,
  0, 316, 158, 307, 156, 298, 156,
  0, 288, 155, 279, 156, 270, 159,
  0, 259, 163, 250, 169, 245, 180,
  0, 241, 188, 241, 197, 242, 206,
  0, 242, 206, 242, 206, 242, 206,
  1, 368, 103, 368, 105, 369, 107, 370, 109,
  0, 386, 149, 403, 190, 419, 230,
  0, 421, 234, 421, 237, 419, 240,
  0, 417, 246, 414, 253, 412, 259,
  0, 409, 265, 405, 269, 399, 270,
  0, 395, 271, 390, 272, 386, 271,
  0, 384, 271, 382, 270, 380, 270,
  0, 377, 270, 375, 271, 375, 274,
  0, 375, 277, 375, 280, 375, 283,
  0, 375, 287, 377, 289, 382, 290,
  0, 386, 291, 391, 292, 396, 292,
  0, 410, 292, 421, 286, 429, 274,
  0, 432, 269, 434, 264, 437, 259,
  0, 456, 208, 476, 158, 496, 108,
  0, 496, 107, 497, 105, 497, 103,
  0, 497, 101, 496, 100, 494, 100,
  0, 488, 100, 483, 100, 477, 100,
  0, 474, 100, 472, 101, 471, 104,
  0, 470, 105, 470, 106, 470, 107,
  0, 460, 135, 450, 163, 440, 191,
  0, 438, 197, 436, 203, 434, 210,
  0, 434, 209, 433, 208, 433, 208,
  0, 422, 178, 412, 148, 401, 118,
  0, 399, 113, 397, 109, 395, 104,
  0, 395, 101, 393, 100, 390, 100,
  0, 384, 100, 377, 100, 371, 100,
  0, 369, 100, 368, 101, 368, 103,
  0, 368, 103, 368, 103, 368, 103,
  1, 576, 80, 576, 197, 576, 314, 576, 432,
  0, 576, 458, 554, 480, 528, 480,
  0, 368, 480, 208, 480, 48, 480,
  0, 21, 480, 0, 458, 0, 432,
  0, 0, 314, 0, 197, 0, 80,
  0, 0, 53, 21, 32, 48, 32,
  0, 208, 32, 368, 32, 528, 32,
  0, 554, 32, 576, 53, 576, 80,
  0, 576, 80, 576, 80, 576, 80,
  1, 279, 216, 284, 218, 288, 218, 293, 217,
  0, 305, 216, 315, 212, 324, 205,
  0, 325, 204, 326, 204, 326, 202,
  0, 326, 199, 326, 195, 326, 191,
  0, 326, 187, 326, 183, 326, 179,
  0, 326, 177, 325, 177, 324, 176,
  0, 317, 176, 310, 174, 303, 174,
  0, 296, 173, 289, 173, 282, 175,
  0, 276, 178, 271, 182, 269, 189,
  0, 267, 194, 267, 199, 269, 205,
  0, 270, 210, 274, 214, 279, 216,
  0, 279, 216, 279, 216, 279, 216,
  1, 124, 201, 124, 190, 124, 178, 124, 166,
  0, 124, 154, 124, 142, 124, 131,
  0, 124, 129, 125, 129, 126, 128,
  0, 137, 120, 150, 116, 164, 117,
  0, 176, 118, 187, 124, 192, 139,
  0, 195, 148, 196, 157, 196, 166,
  0, 196, 175, 195, 184, 193, 192,
  0, 187, 210, 174, 217, 157, 216,
  0, 145, 215, 135, 211, 126, 204,
  0, 125, 203, 124, 203, 124, 201,
  0, 124, 201, 124, 201, 124, 201,
  2]);
export default Path;