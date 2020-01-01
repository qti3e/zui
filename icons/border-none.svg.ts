// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 144, 32, 133, 32, 122, 32, 112, 32,
  0, 107, 32, 103, 33, 100, 36,
  0, 97, 39, 96, 43, 96, 48,
  0, 96, 58, 96, 69, 96, 80,
  0, 96, 84, 97, 88, 100, 91,
  0, 103, 94, 107, 96, 112, 96,
  0, 122, 96, 133, 96, 144, 96,
  0, 148, 96, 152, 94, 155, 91,
  0, 158, 88, 160, 84, 160, 80,
  0, 160, 69, 160, 58, 160, 48,
  0, 160, 43, 158, 39, 155, 36,
  0, 152, 33, 148, 32, 144, 32,
  0, 144, 32, 144, 32, 144, 32,
  1, 48, 32, 37, 32, 26, 32, 16, 32,
  0, 11, 32, 7, 33, 4, 36,
  0, 1, 39, 0, 43, 0, 48,
  0, 0, 58, 0, 69, 0, 80,
  0, 0, 84, 1, 88, 4, 91,
  0, 7, 94, 11, 96, 16, 96,
  0, 26, 96, 37, 96, 48, 96,
  0, 52, 96, 56, 94, 59, 91,
  0, 62, 88, 64, 84, 64, 80,
  0, 64, 69, 64, 58, 64, 48,
  0, 64, 43, 62, 39, 59, 36,
  0, 56, 33, 52, 32, 48, 32,
  0, 48, 32, 48, 32, 48, 32,
  1, 48, 128, 37, 128, 26, 128, 16, 128,
  0, 11, 128, 7, 129, 4, 132,
  0, 1, 135, 0, 139, 0, 144,
  0, 0, 154, 0, 165, 0, 176,
  0, 0, 180, 1, 184, 4, 187,
  0, 7, 190, 11, 192, 16, 192,
  0, 26, 192, 37, 192, 48, 192,
  0, 52, 192, 56, 190, 59, 187,
  0, 62, 184, 64, 180, 64, 176,
  0, 64, 165, 64, 154, 64, 144,
  0, 64, 139, 62, 135, 59, 132,
  0, 56, 129, 52, 128, 48, 128,
  0, 48, 128, 48, 128, 48, 128,
  1, 48, 320, 37, 320, 26, 320, 16, 320,
  0, 11, 320, 7, 321, 4, 324,
  0, 1, 327, 0, 331, 0, 336,
  0, 0, 346, 0, 357, 0, 368,
  0, 0, 372, 1, 376, 4, 379,
  0, 7, 382, 11, 384, 16, 384,
  0, 26, 384, 37, 384, 48, 384,
  0, 52, 384, 56, 382, 59, 379,
  0, 62, 376, 64, 372, 64, 368,
  0, 64, 357, 64, 346, 64, 336,
  0, 64, 331, 62, 327, 59, 324,
  0, 56, 321, 52, 320, 48, 320,
  0, 48, 320, 48, 320, 48, 320,
  1, 48, 416, 37, 416, 26, 416, 16, 416,
  0, 11, 416, 7, 417, 4, 420,
  0, 1, 423, 0, 427, 0, 432,
  0, 0, 442, 0, 453, 0, 464,
  0, 0, 468, 1, 472, 4, 475,
  0, 7, 478, 11, 480, 16, 480,
  0, 26, 480, 37, 480, 48, 480,
  0, 52, 480, 56, 478, 59, 475,
  0, 62, 472, 64, 468, 64, 464,
  0, 64, 453, 64, 442, 64, 432,
  0, 64, 427, 62, 423, 59, 420,
  0, 56, 417, 52, 416, 48, 416,
  0, 48, 416, 48, 416, 48, 416,
  1, 48, 224, 37, 224, 26, 224, 16, 224,
  0, 11, 224, 7, 225, 4, 228,
  0, 1, 231, 0, 235, 0, 240,
  0, 0, 250, 0, 261, 0, 272,
  0, 0, 276, 1, 280, 4, 283,
  0, 7, 286, 11, 288, 16, 288,
  0, 26, 288, 37, 288, 48, 288,
  0, 52, 288, 56, 286, 59, 283,
  0, 62, 280, 64, 276, 64, 272,
  0, 64, 261, 64, 250, 64, 240,
  0, 64, 235, 62, 231, 59, 228,
  0, 56, 225, 52, 224, 48, 224,
  0, 48, 224, 48, 224, 48, 224,
  1, 432, 32, 421, 32, 410, 32, 400, 32,
  0, 395, 32, 391, 33, 388, 36,
  0, 385, 39, 384, 43, 384, 48,
  0, 384, 58, 384, 69, 384, 80,
  0, 384, 84, 385, 88, 388, 91,
  0, 391, 94, 395, 96, 400, 96,
  0, 410, 96, 421, 96, 432, 96,
  0, 436, 96, 440, 94, 443, 91,
  0, 446, 88, 448, 84, 448, 80,
  0, 448, 69, 448, 58, 448, 48,
  0, 448, 43, 446, 39, 443, 36,
  0, 440, 33, 436, 32, 432, 32,
  0, 432, 32, 432, 32, 432, 32,
  1, 336, 32, 325, 32, 314, 32, 304, 32,
  0, 299, 32, 295, 33, 292, 36,
  0, 289, 39, 288, 43, 288, 48,
  0, 288, 58, 288, 69, 288, 80,
  0, 288, 84, 289, 88, 292, 91,
  0, 295, 94, 299, 96, 304, 96,
  0, 314, 96, 325, 96, 336, 96,
  0, 340, 96, 344, 94, 347, 91,
  0, 350, 88, 352, 84, 352, 80,
  0, 352, 69, 352, 58, 352, 48,
  0, 352, 43, 350, 39, 347, 36,
  0, 344, 33, 340, 32, 336, 32,
  0, 336, 32, 336, 32, 336, 32,
  1, 240, 32, 229, 32, 218, 32, 208, 32,
  0, 203, 32, 199, 33, 196, 36,
  0, 193, 39, 192, 43, 192, 48,
  0, 192, 58, 192, 69, 192, 80,
  0, 192, 84, 193, 88, 196, 91,
  0, 199, 94, 203, 96, 208, 96,
  0, 218, 96, 229, 96, 240, 96,
  0, 244, 96, 248, 94, 251, 91,
  0, 254, 88, 256, 84, 256, 80,
  0, 256, 69, 256, 58, 256, 48,
  0, 256, 43, 254, 39, 251, 36,
  0, 248, 33, 244, 32, 240, 32,
  0, 240, 32, 240, 32, 240, 32,
  1, 144, 416, 133, 416, 122, 416, 112, 416,
  0, 107, 416, 103, 417, 100, 420,
  0, 97, 423, 96, 427, 96, 432,
  0, 96, 442, 96, 453, 96, 464,
  0, 96, 468, 97, 472, 100, 475,
  0, 103, 478, 107, 480, 112, 480,
  0, 122, 480, 133, 480, 144, 480,
  0, 148, 480, 152, 478, 155, 475,
  0, 158, 472, 160, 468, 160, 464,
  0, 160, 453, 160, 442, 160, 432,
  0, 160, 427, 158, 423, 155, 420,
  0, 152, 417, 148, 416, 144, 416,
  0, 144, 416, 144, 416, 144, 416,
  1, 240, 128, 229, 128, 218, 128, 208, 128,
  0, 203, 128, 199, 129, 196, 132,
  0, 193, 135, 192, 139, 192, 144,
  0, 192, 154, 192, 165, 192, 176,
  0, 192, 180, 193, 184, 196, 187,
  0, 199, 190, 203, 192, 208, 192,
  0, 218, 192, 229, 192, 240, 192,
  0, 244, 192, 248, 190, 251, 187,
  0, 254, 184, 256, 180, 256, 176,
  0, 256, 165, 256, 154, 256, 144,
  0, 256, 139, 254, 135, 251, 132,
  0, 248, 129, 244, 128, 240, 128,
  0, 240, 128, 240, 128, 240, 128,
  1, 240, 320, 229, 320, 218, 320, 208, 320,
  0, 203, 320, 199, 321, 196, 324,
  0, 193, 327, 192, 331, 192, 336,
  0, 192, 346, 192, 357, 192, 368,
  0, 192, 372, 193, 376, 196, 379,
  0, 199, 382, 203, 384, 208, 384,
  0, 218, 384, 229, 384, 240, 384,
  0, 244, 384, 248, 382, 251, 379,
  0, 254, 376, 256, 372, 256, 368,
  0, 256, 357, 256, 346, 256, 336,
  0, 256, 331, 254, 327, 251, 324,
  0, 248, 321, 244, 320, 240, 320,
  0, 240, 320, 240, 320, 240, 320,
  1, 432, 128, 421, 128, 410, 128, 400, 128,
  0, 395, 128, 391, 129, 388, 132,
  0, 385, 135, 384, 139, 384, 144,
  0, 384, 154, 384, 165, 384, 176,
  0, 384, 180, 385, 184, 388, 187,
  0, 391, 190, 395, 192, 400, 192,
  0, 410, 192, 421, 192, 432, 192,
  0, 436, 192, 440, 190, 443, 187,
  0, 446, 184, 448, 180, 448, 176,
  0, 448, 165, 448, 154, 448, 144,
  0, 448, 139, 446, 135, 443, 132,
  0, 440, 129, 436, 128, 432, 128,
  0, 432, 128, 432, 128, 432, 128,
  1, 432, 320, 421, 320, 410, 320, 400, 320,
  0, 395, 320, 391, 321, 388, 324,
  0, 385, 327, 384, 331, 384, 336,
  0, 384, 346, 384, 357, 384, 368,
  0, 384, 372, 385, 376, 388, 379,
  0, 391, 382, 395, 384, 400, 384,
  0, 410, 384, 421, 384, 432, 384,
  0, 436, 384, 440, 382, 443, 379,
  0, 446, 376, 448, 372, 448, 368,
  0, 448, 357, 448, 346, 448, 336,
  0, 448, 331, 446, 327, 443, 324,
  0, 440, 321, 436, 320, 432, 320,
  0, 432, 320, 432, 320, 432, 320,
  1, 432, 416, 421, 416, 410, 416, 400, 416,
  0, 395, 416, 391, 417, 388, 420,
  0, 385, 423, 384, 427, 384, 432,
  0, 384, 442, 384, 453, 384, 464,
  0, 384, 468, 385, 472, 388, 475,
  0, 391, 478, 395, 480, 400, 480,
  0, 410, 480, 421, 480, 432, 480,
  0, 436, 480, 440, 478, 443, 475,
  0, 446, 472, 448, 468, 448, 464,
  0, 448, 453, 448, 442, 448, 432,
  0, 448, 427, 446, 423, 443, 420,
  0, 440, 417, 436, 416, 432, 416,
  0, 432, 416, 432, 416, 432, 416,
  1, 336, 416, 325, 416, 314, 416, 304, 416,
  0, 299, 416, 295, 417, 292, 420,
  0, 289, 423, 288, 427, 288, 432,
  0, 288, 442, 288, 453, 288, 464,
  0, 288, 468, 289, 472, 292, 475,
  0, 295, 478, 299, 480, 304, 480,
  0, 314, 480, 325, 480, 336, 480,
  0, 340, 480, 344, 478, 347, 475,
  0, 350, 472, 352, 468, 352, 464,
  0, 352, 453, 352, 442, 352, 432,
  0, 352, 427, 350, 423, 347, 420,
  0, 344, 417, 340, 416, 336, 416,
  0, 336, 416, 336, 416, 336, 416,
  1, 240, 416, 229, 416, 218, 416, 208, 416,
  0, 203, 416, 199, 417, 196, 420,
  0, 193, 423, 192, 427, 192, 432,
  0, 192, 442, 192, 453, 192, 464,
  0, 192, 468, 193, 472, 196, 475,
  0, 199, 478, 203, 480, 208, 480,
  0, 218, 480, 229, 480, 240, 480,
  0, 244, 480, 248, 478, 251, 475,
  0, 254, 472, 256, 468, 256, 464,
  0, 256, 453, 256, 442, 256, 432,
  0, 256, 427, 254, 423, 251, 420,
  0, 248, 417, 244, 416, 240, 416,
  0, 240, 416, 240, 416, 240, 416,
  1, 144, 224, 133, 224, 122, 224, 112, 224,
  0, 107, 224, 103, 225, 100, 228,
  0, 97, 231, 96, 235, 96, 240,
  0, 96, 250, 96, 261, 96, 272,
  0, 96, 276, 97, 280, 100, 283,
  0, 103, 286, 107, 288, 112, 288,
  0, 122, 288, 133, 288, 144, 288,
  0, 148, 288, 152, 286, 155, 283,
  0, 158, 280, 160, 276, 160, 272,
  0, 160, 261, 160, 250, 160, 240,
  0, 160, 235, 158, 231, 155, 228,
  0, 152, 225, 148, 224, 144, 224,
  0, 144, 224, 144, 224, 144, 224,
  1, 432, 224, 421, 224, 410, 224, 400, 224,
  0, 395, 224, 391, 225, 388, 228,
  0, 385, 231, 384, 235, 384, 240,
  0, 384, 250, 384, 261, 384, 272,
  0, 384, 276, 385, 280, 388, 283,
  0, 391, 286, 395, 288, 400, 288,
  0, 410, 288, 421, 288, 432, 288,
  0, 436, 288, 440, 286, 443, 283,
  0, 446, 280, 448, 276, 448, 272,
  0, 448, 261, 448, 250, 448, 240,
  0, 448, 235, 446, 231, 443, 228,
  0, 440, 225, 436, 224, 432, 224,
  0, 432, 224, 432, 224, 432, 224,
  1, 336, 224, 325, 224, 314, 224, 304, 224,
  0, 299, 224, 295, 225, 292, 228,
  0, 289, 231, 288, 235, 288, 240,
  0, 288, 250, 288, 261, 288, 272,
  0, 288, 276, 289, 280, 292, 283,
  0, 295, 286, 299, 288, 304, 288,
  0, 314, 288, 325, 288, 336, 288,
  0, 340, 288, 344, 286, 347, 283,
  0, 350, 280, 352, 276, 352, 272,
  0, 352, 261, 352, 250, 352, 240,
  0, 352, 235, 350, 231, 347, 228,
  0, 344, 225, 340, 224, 336, 224,
  0, 336, 224, 336, 224, 336, 224,
  1, 240, 224, 229, 224, 218, 224, 208, 224,
  0, 203, 224, 199, 225, 196, 228,
  0, 193, 231, 192, 235, 192, 240,
  0, 192, 250, 192, 261, 192, 272,
  0, 192, 276, 193, 280, 196, 283,
  0, 199, 286, 203, 288, 208, 288,
  0, 218, 288, 229, 288, 240, 288,
  0, 244, 288, 248, 286, 251, 283,
  0, 254, 280, 256, 276, 256, 272,
  0, 256, 261, 256, 250, 256, 240,
  0, 256, 235, 254, 231, 251, 228,
  0, 248, 225, 244, 224, 240, 224,
  0, 240, 224, 240, 224, 240, 224,
  2]);
export default Path;
