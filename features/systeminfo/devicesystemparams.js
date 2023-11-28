const si = require('systeminformation');

const getProcessParams = async() => {

  try {
    const data = await si.cpuTemperature();
    return {
        mainTemperature: data.main,
        coresTemperatures: data.cores,
    };
    
  } catch (error) {
    console.error('Error getting processor temperature', error);
    return null;
  }
};

const getSystemParams = async () => {
    return {
        processor: await getProcessParams(),        
    }
}

module.exports = {
    getSystemParams,
};