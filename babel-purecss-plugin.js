var classMap = require('./classMap');

module.exports = function (babel) {
    var t = babel.types;
    return {
        visitor: {
            JSXAttribute: function (path, state) {
                if (path.node.name.name !== 'className') {
                    return;
                }
                var value = path.node.value.value;
                path.node.value.value =
                    value.split(' ').map(function (className, index) {
                        return classMap[className] || className;
                    }).join(' ');
            }
        }
    };
};
