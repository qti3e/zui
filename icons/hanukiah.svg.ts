// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 528, 128, 541, 128, 552, 116, 552, 101,
  0, 552, 86, 528, 48, 528, 48,
  0, 528, 48, 504, 86, 504, 101,
  0, 504, 116, 514, 128, 528, 128,
  0, 528, 128, 528, 128, 528, 128,
  1, 464, 128, 477, 128, 488, 116, 488, 101,
  0, 488, 86, 464, 48, 464, 48,
  0, 464, 48, 440, 86, 440, 101,
  0, 440, 116, 450, 128, 464, 128,
  0, 464, 128, 464, 128, 464, 128,
  1, 400, 128, 413, 128, 424, 116, 424, 101,
  0, 424, 86, 400, 48, 400, 48,
  0, 400, 48, 376, 86, 376, 101,
  0, 376, 116, 386, 128, 400, 128,
  0, 400, 128, 400, 128, 400, 128,
  1, 240, 128, 253, 128, 264, 116, 264, 101,
  0, 264, 86, 240, 48, 240, 48,
  0, 240, 48, 216, 86, 216, 101,
  0, 216, 116, 226, 128, 240, 128,
  0, 240, 128, 240, 128, 240, 128,
  1, 176, 128, 189, 128, 200, 116, 200, 101,
  0, 200, 86, 176, 48, 176, 48,
  0, 176, 48, 152, 86, 152, 101,
  0, 152, 116, 162, 128, 176, 128,
  0, 176, 128, 176, 128, 176, 128,
  1, 112, 128, 125, 128, 136, 116, 136, 101,
  0, 136, 86, 112, 48, 112, 48,
  0, 112, 48, 88, 86, 88, 101,
  0, 88, 116, 98, 128, 112, 128,
  0, 112, 128, 112, 128, 112, 128,
  1, 320, 80, 333, 80, 344, 68, 344, 53,
  0, 344, 38, 320, 0, 320, 0,
  0, 320, 0, 296, 38, 296, 53,
  0, 296, 68, 306, 80, 320, 80,
  0, 320, 80, 320, 80, 320, 80,
  1, 32, 128, 45, 128, 56, 116, 56, 101,
  0, 56, 86, 32, 48, 32, 48,
  0, 32, 48, 8, 86, 8, 101,
  0, 8, 116, 18, 128, 32, 128,
  0, 32, 128, 32, 128, 32, 128,
  1, 608, 128, 621, 128, 632, 116, 632, 101,
  0, 632, 86, 608, 48, 608, 48,
  0, 608, 48, 584, 86, 584, 101,
  0, 584, 116, 594, 128, 608, 128,
  0, 608, 128, 608, 128, 608, 128,
  1, 624, 160, 613, 160, 602, 160, 592, 160,
  0, 583, 160, 576, 167, 576, 176,
  0, 576, 213, 576, 250, 576, 288,
  0, 576, 305, 561, 320, 544, 320,
  0, 480, 320, 416, 320, 352, 320,
  0, 352, 256, 352, 192, 352, 128,
  0, 352, 119, 344, 112, 336, 112,
  0, 325, 112, 314, 112, 304, 112,
  0, 295, 112, 288, 119, 288, 128,
  0, 288, 192, 288, 256, 288, 320,
  0, 224, 320, 160, 320, 96, 320,
  0, 78, 320, 64, 305, 64, 288,
  0, 64, 250, 64, 213, 64, 176,
  0, 64, 167, 56, 160, 48, 160,
  0, 37, 160, 26, 160, 16, 160,
  0, 7, 160, 0, 167, 0, 176,
  0, 0, 213, 0, 250, 0, 288,
  0, 0, 341, 42, 384, 96, 384,
  0, 160, 384, 224, 384, 288, 384,
  0, 288, 405, 288, 426, 288, 448,
  0, 229, 448, 170, 448, 112, 448,
  0, 103, 448, 96, 455, 96, 464,
  0, 96, 474, 96, 485, 96, 496,
  0, 96, 504, 103, 512, 112, 512,
  0, 250, 512, 389, 512, 528, 512,
  0, 536, 512, 544, 504, 544, 496,
  0, 544, 485, 544, 474, 544, 464,
  0, 544, 455, 536, 448, 528, 448,
  0, 469, 448, 410, 448, 352, 448,
  0, 352, 426, 352, 405, 352, 384,
  0, 416, 384, 480, 384, 544, 384,
  0, 597, 384, 640, 341, 640, 288,
  0, 640, 250, 640, 213, 640, 176,
  0, 640, 167, 632, 160, 624, 160,
  0, 624, 160, 624, 160, 624, 160,
  1, 104, 160, 99, 160, 96, 163, 96, 168,
  0, 96, 208, 96, 248, 96, 288,
  0, 106, 288, 117, 288, 128, 288,
  0, 128, 248, 128, 208, 128, 168,
  0, 128, 163, 124, 160, 120, 160,
  0, 114, 160, 109, 160, 104, 160,
  0, 104, 160, 104, 160, 104, 160,
  1, 544, 168, 544, 163, 540, 160, 536, 160,
  0, 530, 160, 525, 160, 520, 160,
  0, 515, 160, 512, 163, 512, 168,
  0, 512, 208, 512, 248, 512, 288,
  0, 522, 288, 533, 288, 544, 288,
  0, 544, 248, 544, 208, 544, 168,
  0, 544, 168, 544, 168, 544, 168,
  1, 456, 160, 451, 160, 448, 163, 448, 168,
  0, 448, 208, 448, 248, 448, 288,
  0, 458, 288, 469, 288, 480, 288,
  0, 480, 248, 480, 208, 480, 168,
  0, 480, 163, 476, 160, 472, 160,
  0, 466, 160, 461, 160, 456, 160,
  0, 456, 160, 456, 160, 456, 160,
  1, 392, 160, 387, 160, 384, 163, 384, 168,
  0, 384, 208, 384, 248, 384, 288,
  0, 394, 288, 405, 288, 416, 288,
  0, 416, 248, 416, 208, 416, 168,
  0, 416, 163, 412, 160, 408, 160,
  0, 402, 160, 397, 160, 392, 160,
  0, 392, 160, 392, 160, 392, 160,
  1, 168, 160, 163, 160, 160, 163, 160, 168,
  0, 160, 208, 160, 248, 160, 288,
  0, 170, 288, 181, 288, 192, 288,
  0, 192, 248, 192, 208, 192, 168,
  0, 192, 163, 188, 160, 184, 160,
  0, 178, 160, 173, 160, 168, 160,
  0, 168, 160, 168, 160, 168, 160,
  1, 232, 160, 227, 160, 224, 163, 224, 168,
  0, 224, 208, 224, 248, 224, 288,
  0, 234, 288, 245, 288, 256, 288,
  0, 256, 248, 256, 208, 256, 168,
  0, 256, 163, 252, 160, 248, 160,
  0, 242, 160, 237, 160, 232, 160,
  0, 232, 160, 232, 160, 232, 160,
  2]);
export default Path;
