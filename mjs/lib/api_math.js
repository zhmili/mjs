let Math = {
  ceil: ffi('double ceil(double)'),
  floor: ffi('double floor(double)'),
  round: ffi('double round(double)'),
  max: ffi('double fmax(double, double)'),
  min: ffi('double fmin(double, double)'),
  abs: ffi('double fabs(double)'),
  sqrt: ffi('double sqrt(double)'),
  exp: ffi('double exp(double)'),
  log: ffi('double log(double)'),
  pow: ffi('double pow(double, double)'),
  sin: ffi('double sin(double)'),
  cos: ffi('double cos(double)'),
};
