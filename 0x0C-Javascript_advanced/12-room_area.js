const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function () {
        return this.width * this.length;
    },
};
// The function gets invoked at the global scope
const unboundGetArea = roomDimensions.getArea;
// binded to original object
const boundGetArea = unboundGetArea.bind(roomDimensions);