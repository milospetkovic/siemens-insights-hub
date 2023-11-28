const path = require('path');
const si = require('systeminformation');
//console.log(process.cwd());
const dsp = require(path.resolve(__dirname, 'features/systeminfo/devicesystemparams'));

// Interval in ms for each system params fetch.
const timeGap = 3000;

// Get devices params.
const getDeviceParams = async () => {
    try {
      const dspValues = await dsp.getSystemParams();
      console.log('Device system params: ', dspValues);

    } catch (error) {        
      console.error('Error fetching system params:', error);
    }
};

console.log('Started fetching system params every ' + timeGap + 'ms');

// Get params when application starts.
getDeviceParams();

// Get params in time interval.
setInterval(getDeviceParams, timeGap);