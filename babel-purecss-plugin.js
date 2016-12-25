var classMap = {
    'pure-button': 'D(ib) Z(1) Lh(n) Va(m) Cur(p) Bxz(bb) Ta(c) Ff(i) Fz(100%) Py(.5em) Px(1em) C(#444) Bgc(#e6e6e6) Td(n) Bdrs(2px) Bdw(1px) Bds(s) Bdc(#999) C(light-gray) Fil(btn):h Bgi(btn):h Bgi(btn):f',
    'pure-button-primary': 'Bgc(btn-active) C(#fff)'
};

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
