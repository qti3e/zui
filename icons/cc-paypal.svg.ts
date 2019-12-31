// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 454, 242, 441, 242, 432, 252, 432, 264,
  0, 432, 274, 439, 279, 448, 279,
  0, 460, 279, 470, 270, 470, 258,
  0, 470, 248, 463, 242, 454, 242,
  0, 454, 242, 454, 242, 454, 242,
  1, 544, 190, 544, 188, 542, 187, 540, 187,
  0, 534, 187, 528, 187, 522, 187,
  0, 520, 187, 519, 188, 519, 190,
  0, 513, 224, 508, 259, 502, 294,
  0, 502, 294, 502, 294, 502, 294,
  0, 502, 296, 504, 298, 506, 298,
  0, 511, 298, 517, 298, 522, 298,
  0, 525, 298, 527, 295, 527, 292,
  0, 533, 258, 538, 224, 544, 191,
  0, 544, 191, 544, 191, 544, 190,
  0, 544, 190, 544, 190, 544, 190,
  1, 496, 224, 490, 224, 483, 224, 477, 224,
  0, 473, 224, 473, 229, 473, 232,
  0, 467, 223, 459, 222, 449, 222,
  0, 425, 222, 406, 243, 406, 267,
  0, 406, 287, 418, 299, 438, 299,
  0, 447, 299, 458, 294, 464, 287,
  0, 464, 289, 463, 292, 463, 294,
  0, 463, 296, 464, 298, 466, 298,
  0, 472, 298, 478, 298, 484, 298,
  0, 486, 298, 489, 295, 489, 292,
  0, 492, 270, 496, 249, 499, 228,
  0, 500, 226, 498, 224, 496, 224,
  0, 496, 224, 496, 224, 496, 224,
  1, 412, 215, 412, 194, 396, 187, 377, 187,
  0, 364, 187, 351, 187, 337, 187,
  0, 335, 187, 332, 189, 332, 192,
  0, 326, 226, 321, 260, 316, 294,
  0, 315, 296, 317, 298, 319, 298,
  0, 326, 298, 333, 298, 339, 298,
  0, 341, 298, 343, 296, 343, 294,
  0, 345, 285, 346, 275, 348, 265,
  0, 349, 258, 361, 261, 366, 261,
  0, 394, 261, 412, 244, 412, 215,
  0, 412, 215, 412, 215, 412, 215,
  1, 253, 322, 274, 291, 295, 260, 316, 229,
  0, 317, 229, 317, 228, 317, 227,
  0, 317, 226, 315, 224, 314, 224,
  0, 307, 224, 301, 224, 294, 224,
  0, 293, 224, 291, 225, 290, 226,
  0, 281, 239, 272, 252, 263, 265,
  0, 260, 253, 256, 240, 252, 228,
  0, 251, 226, 249, 224, 247, 224,
  0, 241, 224, 234, 224, 228, 224,
  0, 226, 224, 225, 226, 225, 227,
  0, 225, 228, 244, 284, 246, 289,
  0, 243, 293, 226, 318, 226, 321,
  0, 226, 323, 227, 324, 229, 324,
  0, 235, 324, 242, 324, 248, 324,
  0, 250, 324, 251, 323, 252, 322,
  0, 252, 322, 253, 322, 253, 322,
  1, 212, 224, 206, 224, 199, 224, 193, 224,
  0, 189, 224, 189, 229, 189, 232,
  0, 183, 223, 175, 222, 165, 222,
  0, 141, 222, 122, 243, 122, 267,
  0, 122, 287, 134, 299, 154, 299,
  0, 163, 299, 174, 294, 180, 287,
  0, 180, 289, 179, 292, 179, 294,
  0, 179, 296, 180, 298, 182, 298,
  0, 188, 298, 194, 298, 200, 298,
  0, 202, 298, 205, 295, 205, 292,
  0, 208, 270, 212, 249, 215, 228,
  0, 216, 226, 214, 224, 212, 224,
  0, 212, 224, 212, 224, 212, 224,
  1, 128, 215, 128, 194, 112, 187, 93, 187,
  0, 80, 187, 66, 187, 53, 187,
  0, 51, 187, 48, 189, 48, 192,
  0, 42, 226, 37, 260, 32, 294,
  0, 31, 296, 33, 298, 35, 298,
  0, 41, 298, 47, 298, 54, 298,
  0, 56, 298, 59, 295, 59, 292,
  0, 61, 283, 62, 274, 64, 265,
  0, 65, 258, 77, 261, 82, 261,
  0, 110, 261, 128, 244, 128, 215,
  0, 128, 215, 128, 215, 128, 215,
  1, 576, 80, 576, 197, 576, 314, 576, 432,
  0, 576, 458, 554, 480, 528, 480,
  0, 368, 480, 208, 480, 48, 480,
  0, 21, 480, 0, 458, 0, 432,
  0, 0, 314, 0, 197, 0, 80,
  0, 0, 53, 21, 32, 48, 32,
  0, 208, 32, 368, 32, 528, 32,
  0, 554, 32, 576, 53, 576, 80,
  0, 576, 80, 576, 80, 576, 80,
  1, 364, 209, 363, 209, 361, 209, 360, 209,
  0, 358, 209, 357, 210, 356, 212,
  0, 355, 221, 353, 230, 352, 239,
  0, 355, 238, 357, 238, 360, 238,
  0, 373, 238, 382, 235, 382, 220,
  0, 382, 210, 372, 209, 364, 209,
  0, 364, 209, 364, 209, 364, 209,
  1, 80, 209, 78, 209, 77, 209, 75, 209,
  0, 74, 209, 72, 210, 72, 212,
  0, 71, 221, 69, 230, 68, 239,
  0, 71, 238, 73, 238, 76, 238,
  0, 87, 238, 96, 237, 98, 224,
  0, 100, 211, 91, 209, 80, 209,
  0, 80, 209, 80, 209, 80, 209,
  1, 186, 258, 186, 270, 176, 279, 164, 279,
  0, 155, 279, 148, 274, 148, 264,
  0, 148, 252, 157, 242, 170, 242,
  0, 179, 242, 186, 248, 186, 258,
  0, 186, 258, 186, 258, 186, 258,
  2]);
export default Path;