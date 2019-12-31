// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 427, 472, 429, 473, 429, 474, 429, 474,
  0, 410, 473, 395, 467, 382, 452,
  0, 360, 427, 340, 424, 333, 422,
  0, 334, 422, 334, 422, 334, 422,
  0, 347, 422, 360, 423, 373, 426,
  0, 398, 432, 408, 451, 415, 461,
  0, 418, 466, 422, 469, 427, 472,
  0, 427, 472, 427, 472, 427, 472,
  1, 640, 335, 636, 338, 617, 347, 597, 341,
  0, 585, 337, 577, 326, 565, 316,
  0, 555, 309, 544, 309, 537, 308,
  0, 538, 307, 538, 307, 538, 307,
  0, 553, 297, 569, 294, 586, 300,
  0, 598, 304, 605, 314, 616, 324,
  0, 627, 335, 637, 334, 639, 335,
  0, 639, 335, 639, 335, 640, 335,
  0, 640, 335, 640, 335, 640, 335,
  1, 268, 97, 268, 96, 267, 96, 266, 95,
  0, 274, 95, 296, 93, 319, 103,
  0, 339, 111, 352, 124, 370, 136,
  0, 381, 143, 393, 145, 406, 144,
  0, 410, 144, 415, 143, 419, 142,
  0, 419, 142, 420, 142, 420, 143,
  0, 420, 143, 419, 143, 419, 144,
  0, 410, 148, 402, 150, 393, 151,
  0, 367, 153, 343, 147, 320, 135,
  0, 300, 126, 283, 113, 268, 97,
  0, 268, 97, 268, 97, 268, 97,
  1, 537, 256, 537, 257, 537, 257, 537, 257,
  0, 508, 253, 489, 249, 468, 261,
  0, 451, 271, 437, 281, 406, 285,
  0, 379, 289, 361, 288, 340, 277,
  0, 340, 277, 340, 277, 339, 277,
  0, 339, 276, 339, 276, 339, 276,
  0, 364, 280, 376, 281, 395, 270,
  0, 417, 258, 435, 244, 466, 239,
  0, 496, 235, 517, 242, 537, 256,
  0, 537, 256, 537, 256, 537, 256,
  1, 549, 280, 517, 281, 515, 331, 446, 345,
  0, 427, 349, 407, 349, 401, 349,
  0, 401, 349, 401, 349, 401, 349,
  0, 404, 347, 415, 346, 430, 332,
  0, 438, 325, 446, 317, 453, 309,
  0, 473, 289, 495, 267, 535, 270,
  0, 558, 272, 564, 278, 571, 283,
  0, 572, 283, 572, 283, 572, 284,
  0, 571, 284, 571, 284, 571, 284,
  0, 564, 281, 557, 280, 549, 280,
  0, 549, 280, 549, 280, 549, 280,
  1, 447, 163, 463, 158, 488, 150, 513, 160,
  0, 529, 166, 539, 178, 545, 194,
  0, 549, 204, 550, 214, 550, 223,
  0, 550, 223, 550, 223, 550, 223,
  0, 549, 223, 549, 222, 549, 222,
  0, 544, 200, 519, 178, 481, 192,
  0, 431, 210, 351, 201, 305, 144,
  0, 304, 143, 302, 142, 303, 141,
  0, 303, 140, 305, 141, 306, 142,
  0, 324, 155, 345, 164, 367, 168,
  0, 397, 174, 421, 171, 446, 163,
  0, 446, 163, 447, 163, 447, 163,
  1, 272, 415, 229, 416, 180, 388, 148, 354,
  0, 144, 349, 131, 333, 130, 330,
  0, 130, 330, 130, 330, 130, 330,
  0, 137, 334, 156, 348, 185, 357,
  0, 209, 364, 233, 363, 256, 353,
  0, 279, 344, 297, 353, 300, 356,
  0, 281, 360, 279, 361, 276, 364,
  0, 270, 369, 271, 376, 283, 381,
  0, 309, 394, 346, 379, 380, 407,
  0, 382, 409, 388, 415, 390, 418,
  0, 390, 418, 390, 418, 389, 418,
  0, 385, 417, 373, 411, 349, 409,
  0, 325, 407, 303, 414, 272, 415,
  0, 272, 415, 272, 415, 272, 415,
  1, 75, 64, 74, 63, 74, 63, 74, 62,
  0, 86, 60, 98, 58, 110, 58,
  0, 109, 72, 88, 79, 75, 64,
  0, 75, 64, 75, 64, 75, 64,
  1, 212, 344, 216, 344, 235, 342, 238, 342,
  0, 236, 339, 194, 341, 170, 292,
  0, 166, 283, 163, 274, 164, 264,
  0, 167, 239, 197, 234, 216, 246,
  0, 252, 267, 279, 337, 329, 343,
  0, 366, 348, 414, 326, 438, 298,
  0, 437, 298, 437, 298, 437, 298,
  0, 436, 298, 436, 298, 435, 298,
  0, 402, 310, 341, 308, 301, 283,
  0, 263, 261, 248, 225, 249, 209,
  0, 251, 187, 272, 186, 285, 189,
  0, 299, 193, 309, 207, 324, 217,
  0, 339, 227, 357, 230, 375, 227,
  0, 390, 224, 409, 215, 412, 212,
  0, 410, 212, 410, 212, 409, 212,
  0, 403, 212, 397, 211, 391, 210,
  0, 279, 194, 262, 47, 138, 37,
  0, 94, 34, 39, 46, 2, 72,
  0, 1, 73, 0, 74, 0, 74,
  0, 0, 74, 0, 75, 0, 75,
  0, 1, 75, 1, 75, 2, 75,
  0, 8, 74, 15, 74, 21, 75,
  0, 45, 79, 69, 98, 77, 151,
  0, 82, 186, 76, 202, 85, 237,
  0, 104, 315, 176, 345, 212, 344,
  0, 212, 344, 212, 344, 212, 344,
  2]);
export default Path;