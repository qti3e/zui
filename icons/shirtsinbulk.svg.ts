// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 358, 135, 347, 135, 336, 135, 325, 135,
  0, 325, 138, 325, 142, 325, 145,
  0, 336, 145, 347, 145, 358, 145,
  0, 358, 142, 358, 138, 358, 135,
  1, 395, 168, 398, 168, 402, 168, 406, 168,
  0, 406, 157, 406, 146, 406, 135,
  0, 394, 135, 383, 135, 372, 135,
  0, 372, 138, 372, 142, 372, 145,
  0, 380, 145, 387, 145, 395, 145,
  0, 395, 153, 395, 161, 395, 168,
  1, 311, 135, 300, 135, 289, 135, 278, 135,
  0, 278, 138, 278, 142, 278, 145,
  0, 289, 145, 300, 145, 311, 145,
  0, 311, 142, 311, 138, 311, 135,
  1, 264, 135, 253, 135, 242, 135, 231, 135,
  0, 231, 138, 231, 142, 231, 145,
  0, 242, 145, 253, 145, 264, 145,
  0, 264, 142, 264, 138, 264, 135,
  1, 395, 341, 398, 341, 402, 341, 406, 341,
  0, 406, 330, 406, 319, 406, 308,
  0, 402, 308, 398, 308, 395, 308,
  0, 395, 319, 395, 330, 395, 341,
  1, 395, 212, 398, 212, 402, 212, 406, 212,
  0, 406, 200, 406, 189, 406, 178,
  0, 402, 178, 398, 178, 395, 178,
  0, 395, 189, 395, 200, 395, 212,
  1, 217, 135, 205, 135, 194, 135, 183, 135,
  0, 183, 138, 183, 142, 183, 145,
  0, 194, 145, 205, 145, 217, 145,
  0, 217, 142, 217, 138, 217, 135,
  1, 395, 255, 398, 255, 402, 255, 406, 255,
  0, 406, 243, 406, 232, 406, 221,
  0, 402, 221, 398, 221, 395, 221,
  0, 395, 232, 395, 243, 395, 255,
  1, 395, 298, 398, 298, 402, 298, 406, 298,
  0, 406, 287, 406, 275, 406, 264,
  0, 402, 264, 398, 264, 395, 264,
  0, 395, 275, 395, 287, 395, 298,
  1, 170, 135, 158, 135, 147, 135, 136, 135,
  0, 136, 138, 136, 142, 136, 145,
  0, 147, 145, 158, 145, 170, 145,
  0, 170, 142, 170, 138, 170, 135,
  1, 52, 264, 49, 264, 45, 264, 42, 264,
  0, 42, 275, 42, 287, 42, 298,
  0, 45, 298, 49, 298, 52, 298,
  0, 52, 287, 52, 275, 52, 264,
  1, 52, 221, 49, 221, 45, 221, 42, 221,
  0, 42, 232, 42, 243, 42, 255,
  0, 45, 255, 49, 255, 52, 255,
  0, 52, 243, 52, 232, 52, 221,
  1, 418, 91, 288, 91, 159, 91, 29, 91,
  0, 29, 71, 29, 52, 29, 32,
  0, 159, 32, 289, 32, 418, 32,
  0, 418, 52, 418, 71, 418, 91,
  0, 418, 91, 418, 91, 418, 91,
  1, 418, 390, 353, 419, 287, 447, 222, 476,
  0, 157, 447, 93, 419, 29, 390,
  0, 29, 300, 29, 210, 29, 120,
  0, 159, 120, 289, 120, 418, 120,
  0, 418, 210, 418, 300, 418, 390,
  0, 418, 390, 418, 390, 418, 390,
  1, 0, 3, 0, 139, 0, 274, 0, 409,
  0, 73, 442, 147, 475, 221, 508,
  0, 297, 475, 372, 442, 448, 409,
  0, 448, 274, 448, 139, 448, 3,
  0, 298, 3, 149, 3, 0, 3,
  1, 52, 307, 49, 307, 45, 307, 42, 307,
  0, 42, 319, 42, 330, 42, 341,
  0, 45, 341, 49, 341, 52, 341,
  0, 52, 330, 52, 319, 52, 307,
  1, 395, 384, 398, 384, 402, 384, 406, 384,
  0, 406, 373, 406, 362, 406, 351,
  0, 402, 351, 398, 351, 395, 351,
  0, 395, 362, 395, 373, 395, 384,
  1, 52, 178, 49, 178, 45, 178, 42, 178,
  0, 42, 189, 42, 200, 42, 212,
  0, 45, 212, 49, 212, 52, 212,
  0, 52, 200, 52, 189, 52, 178,
  1, 173, 263, 173, 237, 203, 231, 223, 231,
  0, 240, 231, 252, 237, 267, 243,
  0, 264, 249, 261, 254, 258, 260,
  0, 258, 260, 258, 260, 257, 260,
  0, 251, 250, 232, 247, 222, 247,
  0, 213, 247, 192, 249, 192, 262,
  0, 192, 283, 270, 252, 270, 300,
  0, 270, 325, 239, 331, 219, 331,
  0, 201, 331, 187, 328, 172, 319,
  0, 175, 312, 178, 306, 181, 300,
  0, 181, 300, 182, 300, 182, 300,
  0, 188, 312, 206, 315, 218, 315,
  0, 227, 315, 251, 314, 251, 301,
  0, 251, 275, 173, 307, 173, 263,
  0, 173, 263, 173, 263, 173, 263,
  1, 221, 374, 272, 374, 313, 333, 313, 283,
  0, 313, 232, 272, 191, 221, 191,
  0, 171, 191, 130, 232, 130, 283,
  0, 130, 333, 171, 374, 221, 374,
  0, 221, 374, 221, 374, 221, 374,
  1, 52, 145, 60, 145, 68, 145, 75, 145,
  0, 75, 142, 75, 138, 75, 135,
  0, 64, 135, 53, 135, 42, 135,
  0, 42, 146, 42, 157, 42, 168,
  0, 45, 168, 49, 168, 52, 168,
  0, 52, 161, 52, 153, 52, 145,
  1, 122, 135, 111, 135, 100, 135, 89, 135,
  0, 89, 138, 89, 142, 89, 145,
  0, 100, 145, 111, 145, 122, 145,
  0, 122, 142, 122, 138, 122, 135,
  1, 52, 351, 49, 351, 45, 351, 42, 351,
  0, 42, 362, 42, 373, 42, 384,
  0, 45, 384, 49, 384, 52, 384,
  0, 52, 373, 52, 362, 52, 351,
  1, 405, 46, 394, 46, 383, 46, 372, 46,
  0, 372, 50, 372, 53, 372, 57,
  0, 383, 57, 394, 57, 405, 57,
  0, 405, 53, 405, 50, 405, 46,
  1, 264, 46, 253, 46, 242, 46, 231, 46,
  0, 231, 50, 231, 53, 231, 57,
  0, 242, 57, 253, 57, 264, 57,
  0, 264, 53, 264, 50, 264, 46,
  1, 358, 46, 347, 46, 336, 46, 325, 46,
  0, 325, 50, 325, 53, 325, 57,
  0, 336, 57, 347, 57, 358, 57,
  0, 358, 53, 358, 50, 358, 46,
  1, 311, 46, 300, 46, 289, 46, 278, 46,
  0, 278, 50, 278, 53, 278, 57,
  0, 289, 57, 300, 57, 311, 57,
  0, 311, 53, 311, 50, 311, 46,
  1, 217, 46, 205, 46, 194, 46, 183, 46,
  0, 183, 50, 183, 53, 183, 57,
  0, 194, 57, 205, 57, 217, 57,
  0, 217, 53, 217, 50, 217, 46,
  1, 75, 46, 64, 46, 53, 46, 42, 46,
  0, 42, 50, 42, 53, 42, 57,
  0, 53, 57, 64, 57, 75, 57,
  0, 75, 53, 75, 50, 75, 46,
  1, 122, 46, 111, 46, 100, 46, 89, 46,
  0, 89, 50, 89, 53, 89, 57,
  0, 100, 57, 111, 57, 122, 57,
  0, 122, 53, 122, 50, 122, 46,
  1, 170, 46, 158, 46, 147, 46, 136, 46,
  0, 136, 50, 136, 53, 136, 57,
  0, 147, 57, 158, 57, 170, 57,
  0, 170, 53, 170, 50, 170, 46,
  1, 350, 396, 352, 399, 353, 402, 355, 406,
  0, 365, 401, 375, 397, 385, 392,
  0, 384, 389, 382, 386, 381, 382,
  0, 371, 387, 361, 392, 350, 396,
  1, 232, 448, 233, 452, 235, 455, 236, 458,
  0, 247, 454, 257, 449, 267, 444,
  0, 266, 441, 264, 438, 263, 435,
  0, 252, 439, 242, 444, 232, 448,
  1, 271, 431, 273, 434, 274, 437, 276, 441,
  0, 286, 436, 296, 432, 306, 427,
  0, 305, 424, 303, 421, 302, 417,
  0, 292, 422, 282, 426, 271, 431,
  1, 60, 392, 70, 397, 80, 401, 91, 406,
  0, 92, 403, 93, 399, 95, 396,
  0, 85, 392, 75, 387, 64, 382,
  0, 63, 386, 61, 389, 60, 392,
  1, 179, 445, 189, 449, 199, 454, 209, 458,
  0, 210, 455, 212, 452, 213, 448,
  0, 203, 444, 193, 439, 183, 435,
  0, 182, 438, 180, 441, 179, 445,
  1, 311, 413, 312, 417, 314, 420, 315, 423,
  0, 326, 419, 336, 414, 346, 410,
  0, 345, 407, 343, 403, 342, 400,
  0, 331, 404, 321, 409, 311, 413,
  1, 139, 427, 149, 432, 159, 436, 170, 441,
  0, 171, 437, 172, 434, 174, 431,
  0, 164, 426, 153, 422, 143, 417,
  0, 142, 421, 140, 424, 139, 427,
  1, 100, 410, 110, 414, 120, 419, 130, 423,
  0, 132, 420, 133, 417, 135, 413,
  0, 124, 409, 114, 404, 104, 400,
  0, 102, 403, 101, 407, 100, 410,
  2]);
export default Path;