// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 389, 101, 385, 97, 382, 94, 378, 90,
  0, 375, 87, 371, 85, 367, 85,
  0, 362, 85, 358, 87, 355, 90,
  0, 353, 92, 351, 94, 350, 96,
  0, 329, 75, 301, 64, 272, 64,
  0, 252, 64, 234, 69, 219, 77,
  0, 215, 74, 212, 71, 209, 67,
  0, 186, 45, 155, 32, 123, 32,
  0, 55, 31, 0, 92, 0, 160,
  0, 0, 261, 0, 362, 0, 464,
  0, 0, 468, 1, 472, 4, 475,
  0, 7, 478, 11, 480, 16, 480,
  0, 26, 480, 37, 480, 48, 480,
  0, 52, 480, 56, 478, 59, 475,
  0, 62, 472, 64, 468, 64, 464,
  0, 64, 362, 64, 260, 64, 158,
  0, 64, 128, 85, 100, 115, 96,
  0, 133, 94, 151, 100, 163, 113,
  0, 167, 116, 170, 119, 173, 123,
  0, 165, 138, 160, 156, 160, 176,
  0, 160, 205, 171, 233, 191, 254,
  0, 190, 255, 188, 257, 186, 259,
  0, 180, 265, 180, 276, 186, 282,
  0, 190, 286, 193, 289, 197, 293,
  0, 200, 296, 204, 298, 208, 298,
  0, 213, 298, 217, 296, 220, 293,
  0, 276, 237, 333, 180, 389, 124,
  0, 392, 121, 394, 117, 394, 112,
  0, 394, 108, 392, 104, 389, 101,
  0, 389, 101, 389, 101, 389, 101,
  1, 368, 320, 361, 320, 355, 323, 353, 329,
  0, 350, 335, 352, 342, 356, 347,
  0, 361, 351, 368, 353, 374, 350,
  0, 380, 348, 384, 342, 384, 336,
  0, 384, 331, 382, 327, 379, 324,
  0, 376, 321, 372, 320, 368, 320,
  0, 368, 320, 368, 320, 368, 320,
  1, 304, 384, 297, 384, 291, 387, 289, 393,
  0, 286, 399, 288, 406, 292, 411,
  0, 297, 415, 304, 417, 310, 414,
  0, 316, 412, 320, 406, 320, 400,
  0, 320, 395, 318, 391, 315, 388,
  0, 312, 385, 308, 384, 304, 384,
  0, 304, 384, 304, 384, 304, 384,
  1, 336, 352, 329, 352, 323, 355, 321, 361,
  0, 318, 367, 320, 374, 324, 379,
  0, 329, 383, 336, 385, 342, 382,
  0, 348, 380, 352, 374, 352, 368,
  0, 352, 363, 350, 359, 347, 356,
  0, 344, 353, 340, 352, 336, 352,
  0, 336, 352, 336, 352, 336, 352,
  1, 400, 288, 393, 288, 387, 291, 385, 297,
  0, 382, 303, 384, 310, 388, 315,
  0, 393, 319, 400, 321, 406, 318,
  0, 412, 316, 416, 310, 416, 304,
  0, 416, 299, 414, 295, 411, 292,
  0, 408, 289, 404, 288, 400, 288,
  0, 400, 288, 400, 288, 400, 288,
  1, 432, 256, 425, 256, 419, 259, 417, 265,
  0, 414, 271, 416, 278, 420, 283,
  0, 425, 287, 432, 289, 438, 286,
  0, 444, 284, 448, 278, 448, 272,
  0, 448, 267, 446, 263, 443, 260,
  0, 440, 257, 436, 256, 432, 256,
  0, 432, 256, 432, 256, 432, 256,
  1, 496, 192, 489, 192, 483, 195, 481, 201,
  0, 478, 207, 480, 214, 484, 219,
  0, 489, 223, 496, 225, 502, 222,
  0, 508, 220, 512, 214, 512, 208,
  0, 512, 203, 510, 199, 507, 196,
  0, 504, 193, 500, 192, 496, 192,
  0, 496, 192, 496, 192, 496, 192,
  1, 464, 224, 457, 224, 451, 227, 449, 233,
  0, 446, 239, 448, 246, 452, 251,
  0, 457, 255, 464, 257, 470, 254,
  0, 476, 252, 480, 246, 480, 240,
  0, 480, 235, 478, 231, 475, 228,
  0, 472, 225, 468, 224, 464, 224,
  0, 464, 224, 464, 224, 464, 224,
  1, 368, 192, 361, 192, 355, 195, 353, 201,
  0, 350, 207, 352, 214, 356, 219,
  0, 361, 223, 368, 225, 374, 222,
  0, 380, 220, 384, 214, 384, 208,
  0, 384, 203, 382, 199, 379, 196,
  0, 376, 193, 372, 192, 368, 192,
  0, 368, 192, 368, 192, 368, 192,
  1, 384, 240, 384, 246, 387, 252, 393, 254,
  0, 399, 257, 406, 255, 411, 251,
  0, 415, 246, 417, 239, 414, 233,
  0, 412, 227, 406, 224, 400, 224,
  0, 395, 224, 391, 225, 388, 228,
  0, 385, 231, 384, 235, 384, 240,
  0, 384, 240, 384, 240, 384, 240,
  1, 432, 224, 438, 224, 444, 220, 446, 214,
  0, 449, 208, 447, 201, 443, 196,
  0, 438, 192, 431, 190, 425, 193,
  0, 419, 195, 416, 201, 416, 208,
  0, 416, 212, 417, 216, 420, 219,
  0, 423, 222, 427, 224, 432, 224,
  0, 432, 224, 432, 224, 432, 224,
  1, 304, 256, 297, 256, 291, 259, 289, 265,
  0, 286, 271, 288, 278, 292, 283,
  0, 297, 287, 304, 289, 310, 286,
  0, 316, 284, 320, 278, 320, 272,
  0, 320, 267, 318, 263, 315, 260,
  0, 312, 257, 308, 256, 304, 256,
  0, 304, 256, 304, 256, 304, 256,
  1, 336, 320, 342, 320, 348, 316, 350, 310,
  0, 353, 304, 351, 297, 347, 292,
  0, 342, 288, 335, 286, 329, 289,
  0, 323, 291, 320, 297, 320, 304,
  0, 320, 308, 321, 312, 324, 315,
  0, 327, 318, 331, 320, 336, 320,
  0, 336, 320, 336, 320, 336, 320,
  1, 368, 288, 374, 288, 380, 284, 382, 278,
  0, 385, 272, 383, 265, 379, 260,
  0, 374, 256, 367, 254, 361, 257,
  0, 355, 259, 352, 265, 352, 272,
  0, 352, 276, 353, 280, 356, 283,
  0, 359, 286, 363, 288, 368, 288,
  0, 368, 288, 368, 288, 368, 288,
  1, 336, 224, 329, 224, 323, 227, 321, 233,
  0, 318, 239, 320, 246, 324, 251,
  0, 329, 255, 336, 257, 342, 254,
  0, 348, 252, 352, 246, 352, 240,
  0, 352, 235, 350, 231, 347, 228,
  0, 344, 225, 340, 224, 336, 224,
  0, 336, 224, 336, 224, 336, 224,
  1, 304, 320, 297, 320, 291, 323, 289, 329,
  0, 286, 335, 288, 342, 292, 347,
  0, 297, 351, 304, 353, 310, 350,
  0, 316, 348, 320, 342, 320, 336,
  0, 320, 331, 318, 327, 315, 324,
  0, 312, 321, 308, 320, 304, 320,
  0, 304, 320, 304, 320, 304, 320,
  2]);
export default Path;
