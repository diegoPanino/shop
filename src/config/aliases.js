const aliases = (prefix = `src`) => ({
  '@': `${prefix}/`,
  '@asset': `${prefix}/asset`,
  '@api': `${prefix}/api`,
  '@component': `${prefix}/component`,
  '@constant': `${prefix}/constant`,
  '@helper': `${prefix}/helper`,
  '@pages': `${prefix}/pages`,
  '@services': `${prefix}/services`,
  '@store': `${prefix}/store`,
  '@config': `${prefix}/config`,
  '@context':`${prefix}/context`,
  '@hooks':`${prefix}/hooks`,
  '@redux':`${prefix}/store`,
  '@features':`${prefix}/store/features`,
});

module.exports = aliases;