// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 422, 297, 405, 309, 389, 322, 373, 335,
  0, 375, 313, 377, 292, 379, 270,
  0, 396, 258, 413, 245, 430, 233,
  0, 427, 254, 424, 275, 422, 297,
  0, 422, 297, 422, 297, 422, 297,
  1, 367, 336, 361, 332, 354, 327, 348, 323,
  0, 348, 312, 349, 300, 350, 289,
  0, 350, 288, 350, 287, 349, 286,
  0, 335, 277, 321, 268, 308, 259,
  0, 308, 249, 308, 239, 308, 229,
  0, 330, 243, 351, 256, 373, 270,
  0, 371, 292, 369, 314, 367, 336,
  0, 367, 336, 367, 336, 367, 336,
  1, 339, 362, 319, 378, 299, 395, 278, 411,
  0, 278, 388, 278, 365, 278, 342,
  0, 300, 326, 322, 311, 343, 295,
  0, 342, 318, 341, 340, 339, 362,
  0, 339, 362, 339, 362, 339, 362,
  1, 245, 388, 245, 384, 246, 365, 243, 362,
  0, 235, 356, 227, 349, 219, 342,
  0, 226, 337, 233, 332, 241, 328,
  0, 243, 326, 242, 322, 242, 320,
  0, 252, 327, 262, 335, 271, 342,
  0, 272, 365, 272, 388, 272, 410,
  0, 263, 403, 254, 395, 245, 388,
  0, 245, 388, 245, 388, 245, 388,
  1, 163, 503, 159, 479, 156, 455, 152, 432,
  0, 181, 411, 209, 391, 238, 370,
  0, 239, 394, 240, 417, 241, 440,
  0, 215, 461, 189, 482, 163, 503,
  0, 163, 503, 163, 503, 163, 503,
  1, 98, 438, 94, 416, 89, 393, 85, 371,
  0, 105, 391, 126, 412, 146, 432,
  0, 150, 454, 153, 477, 156, 499,
  0, 137, 479, 118, 459, 98, 438,
  0, 98, 438, 98, 438, 98, 438,
  1, 74, 320, 68, 290, 62, 260, 55, 230,
  0, 79, 249, 102, 268, 125, 288,
  0, 130, 319, 134, 350, 139, 381,
  0, 117, 361, 96, 341, 74, 320,
  0, 74, 320, 74, 320, 74, 320,
  1, 44, 173, 35, 131, 26, 89, 18, 48,
  0, 44, 64, 71, 80, 97, 97,
  0, 104, 141, 110, 185, 117, 230,
  0, 92, 211, 68, 192, 44, 173,
  0, 44, 173, 44, 173, 44, 173,
  1, 224, 51, 226, 93, 228, 135, 230, 177,
  0, 194, 195, 159, 214, 123, 232,
  0, 117, 187, 110, 142, 104, 97,
  0, 144, 82, 184, 66, 224, 51,
  0, 224, 51, 224, 51, 224, 51,
  1, 232, 231, 233, 261, 235, 292, 236, 323,
  0, 206, 344, 176, 364, 146, 384,
  0, 141, 352, 136, 320, 132, 288,
  0, 165, 269, 199, 250, 232, 231,
  0, 232, 231, 232, 231, 232, 231,
  1, 437, 226, 437, 225, 436, 224, 436, 224,
  0, 412, 211, 389, 198, 366, 185,
  0, 365, 185, 364, 185, 362, 185,
  0, 343, 197, 323, 209, 304, 221,
  0, 303, 222, 302, 223, 302, 224,
  0, 302, 234, 302, 245, 301, 255,
  0, 293, 250, 285, 245, 277, 239,
  0, 276, 239, 275, 239, 274, 239,
  0, 263, 246, 251, 253, 240, 260,
  0, 239, 249, 239, 237, 238, 225,
  0, 238, 224, 238, 223, 237, 223,
  0, 225, 215, 213, 207, 201, 199,
  0, 212, 193, 223, 187, 234, 181,
  0, 236, 181, 236, 180, 236, 178,
  0, 234, 134, 232, 90, 230, 46,
  0, 230, 45, 230, 44, 229, 43,
  0, 199, 29, 168, 14, 138, 0,
  0, 137, 0, 136, 0, 136, 0,
  0, 95, 12, 53, 25, 12, 38,
  0, 11, 39, 10, 40, 10, 42,
  0, 19, 86, 28, 131, 38, 175,
  0, 38, 178, 72, 202, 76, 206,
  0, 67, 210, 58, 214, 49, 219,
  0, 48, 220, 47, 221, 47, 222,
  0, 54, 256, 61, 289, 68, 322,
  0, 69, 325, 92, 345, 95, 349,
  0, 89, 352, 84, 356, 78, 359,
  0, 77, 360, 76, 361, 76, 362,
  0, 78, 369, 92, 440, 93, 441,
  0, 115, 465, 137, 488, 158, 511,
  0, 159, 511, 160, 511, 161, 511,
  0, 161, 511, 162, 511, 162, 511,
  0, 190, 489, 218, 466, 246, 444,
  0, 247, 443, 247, 443, 247, 442,
  0, 247, 426, 246, 411, 245, 396,
  0, 255, 404, 264, 412, 273, 419,
  0, 274, 420, 276, 420, 277, 419,
  0, 300, 402, 322, 384, 344, 366,
  0, 345, 365, 345, 365, 345, 364,
  0, 346, 353, 347, 341, 348, 330,
  0, 354, 335, 361, 340, 368, 344,
  0, 369, 345, 370, 345, 372, 344,
  0, 390, 330, 408, 315, 426, 301,
  0, 427, 300, 427, 300, 427, 299,
  0, 428, 292, 438, 228, 437, 226,
  0, 437, 226, 437, 226, 437, 226,
  2]);
export default Path;