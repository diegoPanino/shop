const aliases = (prefix = `src`) => ({
  '@': `${prefix}/`,
  '@asset': `${prefix}/asset`,
  '@component': `${prefix}/component`,
  '@constant': `${prefix}/constant`,
  '@helper': `${prefix}/helper`,
  '@pages': `${prefix}/pages`,
  '@services': `${prefix}/services`,
  '@store': `${prefix}/store`,
  '@config': `${prefix}/config`,
});

module.exports = aliases;