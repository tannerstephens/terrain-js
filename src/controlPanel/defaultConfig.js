const defaultConfig = {
  theme: 'dark filleddark',
  headerTitle: 'Map Generator Controls',
  headerControls: {
    close: 'remove',
    maximize: 'remove',
    normalize: 'remove',
    minimize: 'remove',
  },
  setStatus: 'smallified',
  position: {
    my: 'left-top',
    at: 'left-top',
  },
  dragit: false,
  resizeit: false,
  panelSize: {
    width: Math.min(400, innerWidth),
    height: 300,
  }
};

export default defaultConfig;