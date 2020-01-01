// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 128, 320, 128, 341, 128, 362, 128, 384,
  0, 149, 384, 170, 384, 192, 384,
  0, 192, 362, 192, 341, 192, 320,
  0, 170, 320, 149, 320, 128, 320,
  1, 128, 128, 106, 128, 85, 128, 64, 128,
  0, 64, 149, 64, 170, 64, 192,
  0, 85, 192, 106, 192, 128, 192,
  0, 128, 170, 128, 149, 128, 128,
  1, 383, 256, 405, 256, 426, 256, 447, 256,
  0, 447, 234, 447, 213, 447, 192,
  0, 426, 192, 405, 192, 383, 192,
  0, 383, 213, 383, 234, 383, 256,
  1, 191, 192, 170, 192, 149, 192, 128, 192,
  0, 128, 213, 128, 234, 128, 256,
  0, 149, 256, 170, 256, 192, 256,
  0, 191, 234, 191, 213, 191, 192,
  1, 255, 320, 255, 341, 255, 362, 255, 384,
  0, 277, 384, 298, 384, 319, 384,
  0, 319, 362, 319, 341, 319, 320,
  0, 298, 320, 277, 320, 255, 320,
  1, 383, 64, 383, 85, 383, 106, 383, 128,
  0, 405, 128, 426, 128, 447, 128,
  0, 447, 106, 447, 85, 447, 64,
  0, 426, 64, 405, 64, 383, 64,
  1, 255, 192, 255, 170, 255, 149, 255, 128,
  0, 234, 128, 213, 128, 191, 128,
  0, 191, 149, 191, 170, 191, 192,
  0, 213, 192, 234, 192, 255, 192,
  1, 383, 384, 405, 384, 426, 384, 447, 384,
  0, 447, 362, 447, 341, 447, 320,
  0, 426, 320, 405, 320, 383, 320,
  0, 383, 341, 383, 362, 383, 384,
  1, 192, 128, 192, 106, 192, 85, 192, 64,
  0, 170, 64, 149, 64, 128, 64,
  0, 128, 85, 128, 106, 128, 128,
  0, 149, 128, 170, 128, 192, 128,
  1, 64, 384, 64, 405, 64, 426, 64, 448,
  0, 85, 448, 106, 448, 128, 448,
  0, 128, 426, 128, 405, 128, 384,
  0, 106, 384, 85, 384, 64, 384,
  1, 319, 384, 319, 405, 319, 426, 319, 448,
  0, 341, 448, 362, 448, 383, 448,
  0, 383, 426, 383, 405, 383, 384,
  0, 362, 384, 341, 384, 319, 384,
  1, 319, 192, 341, 192, 362, 192, 383, 192,
  0, 383, 170, 383, 149, 383, 128,
  0, 362, 128, 341, 128, 319, 128,
  0, 319, 149, 319, 170, 319, 192,
  1, 319, 320, 341, 320, 362, 320, 383, 320,
  0, 383, 298, 383, 277, 383, 256,
  0, 362, 256, 341, 256, 319, 256,
  0, 319, 277, 319, 298, 319, 320,
  1, 191, 384, 191, 405, 191, 426, 191, 448,
  0, 213, 448, 234, 448, 255, 448,
  0, 255, 426, 255, 405, 255, 384,
  0, 234, 384, 213, 384, 191, 384,
  1, 255, 256, 277, 256, 298, 256, 319, 256,
  0, 319, 234, 319, 213, 319, 192,
  0, 298, 192, 277, 192, 255, 192,
  0, 255, 213, 255, 234, 255, 256,
  1, 319, 128, 319, 106, 319, 85, 319, 64,
  0, 298, 64, 277, 64, 255, 64,
  0, 255, 85, 255, 106, 255, 128,
  0, 277, 128, 298, 128, 319, 128,
  1, 0, 320, 0, 341, 0, 362, 0, 384,
  0, 21, 384, 42, 384, 64, 384,
  0, 64, 362, 64, 341, 64, 320,
  0, 42, 320, 21, 320, 0, 320,
  1, 255, 512, 277, 512, 298, 512, 319, 512,
  0, 319, 490, 319, 469, 319, 448,
  0, 298, 448, 277, 448, 255, 448,
  0, 255, 469, 255, 490, 255, 512,
  1, 0, 512, 21, 512, 42, 512, 64, 512,
  0, 64, 490, 64, 469, 64, 448,
  0, 42, 448, 21, 448, 0, 448,
  0, 0, 469, 0, 490, 0, 512,
  1, 128, 512, 149, 512, 170, 512, 192, 512,
  0, 192, 490, 192, 469, 192, 448,
  0, 170, 448, 149, 448, 128, 448,
  0, 128, 469, 128, 490, 128, 512,
  1, 511, 192, 511, 170, 511, 149, 511, 128,
  0, 490, 128, 469, 128, 447, 128,
  0, 447, 149, 447, 170, 447, 192,
  0, 469, 192, 490, 192, 511, 192,
  1, 383, 512, 405, 512, 426, 512, 447, 512,
  0, 447, 490, 447, 469, 447, 448,
  0, 426, 448, 405, 448, 383, 448,
  0, 383, 469, 383, 490, 383, 512,
  1, 511, 320, 511, 298, 511, 277, 511, 256,
  0, 490, 256, 469, 256, 447, 256,
  0, 447, 277, 447, 298, 447, 320,
  0, 469, 320, 490, 320, 511, 320,
  1, 511, 448, 511, 426, 511, 405, 511, 384,
  0, 490, 384, 469, 384, 447, 384,
  0, 447, 405, 447, 426, 447, 448,
  0, 469, 448, 490, 448, 511, 448,
  1, 128, 256, 106, 256, 85, 256, 64, 256,
  0, 64, 277, 64, 298, 64, 320,
  0, 85, 320, 106, 320, 128, 320,
  0, 128, 298, 128, 277, 128, 256,
  1, 511, 0, 490, 0, 469, 0, 447, 0,
  0, 447, 21, 447, 42, 447, 64,
  0, 469, 64, 490, 64, 511, 64,
  0, 511, 42, 511, 21, 511, 0,
  1, 383, 0, 362, 0, 341, 0, 319, 0,
  0, 319, 21, 319, 42, 319, 64,
  0, 341, 64, 362, 64, 383, 64,
  0, 383, 42, 383, 21, 383, 0,
  1, 0, 192, 0, 213, 0, 234, 0, 256,
  0, 21, 256, 42, 256, 64, 256,
  0, 64, 234, 64, 213, 64, 192,
  0, 42, 192, 21, 192, 0, 192,
  1, 192, 256, 192, 277, 192, 298, 192, 320,
  0, 213, 320, 234, 320, 256, 320,
  0, 256, 298, 256, 277, 256, 256,
  0, 234, 256, 213, 256, 192, 256,
  1, 128, 0, 106, 0, 85, 0, 64, 0,
  0, 64, 21, 64, 42, 64, 64,
  0, 85, 64, 106, 64, 128, 64,
  0, 128, 42, 128, 21, 128, 0,
  1, 0, 64, 0, 85, 0, 106, 0, 128,
  0, 21, 128, 42, 128, 64, 128,
  0, 64, 106, 64, 85, 64, 64,
  0, 42, 64, 21, 64, 0, 64,
  1, 255, 0, 234, 0, 213, 0, 191, 0,
  0, 191, 21, 191, 42, 191, 64,
  0, 213, 64, 234, 64, 255, 64,
  0, 255, 42, 255, 21, 255, 0,
  2]);
export default Path;