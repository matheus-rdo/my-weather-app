module.exports = (sequelize, DataTypes) => {
    const WeatherHistory = sequelize.define('WeatherHistory', {
        city: {
            type: DataTypes.STRING
        }
    });

    return WeatherHistory;
};