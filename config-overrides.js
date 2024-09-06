module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    os: false, // Usar módulo vacío para 'os'
  };

  return config;
};
