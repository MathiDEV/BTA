import 'package:flutter/material.dart';

class Palette {
  static const MaterialColor kToDark = MaterialColor(
    0xFF252525, // 0% comes in here, this will be color picked if no shade is selected when defining a Color property which doesn’t require a swatch.
    <int, Color>{
      50: Color(0xFF252525),
      100: Color(0xFF252525),
      200: Color(0xFF252525),
      300: Color(0xFF252525),
      400: Color(0xFF252525),
      500: Color(0xFF252525),
      600: Color(0xFF252525),
      700: Color(0xFF252525),
      800: Color(0xFF252525),
      900: Color(0xFF252525),
    },
  );
}
