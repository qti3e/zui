// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 182, 96, 190, 96, 199, 96, 208, 96,
  0, 208, 104, 208, 113, 208, 122,
  0, 208, 123, 208, 125, 209, 126,
  0, 210, 127, 212, 128, 214, 128,
  0, 220, 128, 227, 128, 234, 128,
  0, 235, 128, 237, 127, 238, 126,
  0, 239, 125, 240, 123, 240, 122,
  0, 240, 113, 240, 104, 240, 96,
  0, 248, 96, 257, 96, 266, 96,
  0, 267, 96, 269, 95, 270, 94,
  0, 271, 93, 272, 91, 272, 90,
  0, 272, 83, 272, 76, 272, 70,
  0, 272, 68, 271, 66, 270, 65,
  0, 269, 64, 267, 64, 266, 64,
  0, 257, 64, 248, 64, 240, 64,
  0, 240, 55, 240, 46, 240, 38,
  0, 240, 36, 239, 34, 238, 33,
  0, 237, 32, 235, 32, 234, 32,
  0, 227, 32, 220, 32, 214, 32,
  0, 212, 32, 210, 32, 209, 33,
  0, 208, 34, 208, 36, 208, 38,
  0, 208, 46, 208, 55, 208, 64,
  0, 199, 64, 190, 64, 182, 64,
  0, 180, 64, 178, 64, 177, 65,
  0, 176, 66, 176, 68, 176, 70,
  0, 176, 76, 176, 83, 176, 90,
  0, 176, 91, 176, 93, 177, 94,
  0, 178, 95, 180, 96, 182, 96,
  0, 182, 96, 182, 96, 182, 96,
  1, 192, 300, 192, 293, 186, 288, 180, 288,
  0, 166, 288, 153, 288, 140, 288,
  0, 133, 288, 128, 293, 128, 300,
  0, 128, 313, 128, 326, 128, 340,
  0, 128, 346, 133, 352, 140, 352,
  0, 153, 352, 166, 352, 180, 352,
  0, 186, 352, 192, 346, 192, 340,
  0, 192, 326, 192, 313, 192, 300,
  0, 192, 300, 192, 300, 192, 300,
  1, 308, 288, 294, 288, 281, 288, 268, 288,
  0, 261, 288, 256, 293, 256, 300,
  0, 256, 313, 256, 326, 256, 340,
  0, 256, 346, 261, 352, 268, 352,
  0, 281, 352, 294, 352, 308, 352,
  0, 314, 352, 320, 346, 320, 340,
  0, 320, 326, 320, 313, 320, 300,
  0, 320, 293, 314, 288, 308, 288,
  0, 308, 288, 308, 288, 308, 288,
  1, 244, 384, 230, 384, 217, 384, 204, 384,
  0, 197, 384, 192, 389, 192, 396,
  0, 192, 424, 192, 452, 192, 480,
  0, 213, 480, 234, 480, 256, 480,
  0, 256, 452, 256, 424, 256, 396,
  0, 256, 389, 250, 384, 244, 384,
  0, 244, 384, 244, 384, 244, 384,
  1, 140, 256, 153, 256, 166, 256, 180, 256,
  0, 186, 256, 192, 250, 192, 244,
  0, 192, 230, 192, 217, 192, 204,
  0, 192, 197, 186, 192, 180, 192,
  0, 166, 192, 153, 192, 140, 192,
  0, 133, 192, 128, 197, 128, 204,
  0, 128, 217, 128, 230, 128, 244,
  0, 128, 250, 133, 256, 140, 256,
  0, 140, 256, 140, 256, 140, 256,
  1, 308, 192, 294, 192, 281, 192, 268, 192,
  0, 261, 192, 256, 197, 256, 204,
  0, 256, 217, 256, 230, 256, 244,
  0, 256, 250, 261, 256, 268, 256,
  0, 281, 256, 294, 256, 308, 256,
  0, 314, 256, 320, 250, 320, 244,
  0, 320, 230, 320, 217, 320, 204,
  0, 320, 197, 314, 192, 308, 192,
  0, 308, 192, 308, 192, 308, 192,
  1, 448, 492, 448, 498, 448, 505, 448, 512,
  0, 298, 512, 149, 512, 0, 512,
  0, 0, 505, 0, 498, 0, 492,
  0, 0, 485, 5, 480, 12, 480,
  0, 18, 480, 25, 480, 32, 480,
  0, 32, 360, 32, 240, 32, 120,
  0, 32, 106, 42, 96, 56, 96,
  0, 85, 96, 114, 96, 144, 96,
  0, 144, 72, 144, 48, 144, 24,
  0, 144, 10, 154, 0, 168, 0,
  0, 205, 0, 242, 0, 280, 0,
  0, 293, 0, 304, 10, 304, 24,
  0, 304, 48, 304, 72, 304, 96,
  0, 333, 96, 362, 96, 392, 96,
  0, 405, 96, 416, 106, 416, 120,
  0, 416, 240, 416, 360, 416, 480,
  0, 422, 480, 429, 480, 436, 480,
  0, 442, 480, 448, 485, 448, 492,
  0, 448, 492, 448, 492, 448, 492,
  2]);
export default Path;