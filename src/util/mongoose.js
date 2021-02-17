module.exports = {
    dataListToObj: (list) => {
        return list.map((data) => data.toObject());
    },

    dataToObj: (data) => {
        return data ? data.toObject() : data;
    },
};
