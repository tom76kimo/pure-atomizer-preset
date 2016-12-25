module.exports = {
    cssDest: __dirname + '/main.css',
    options: {
        namespace: '#atomic',
    },
    configs: {
        breakPoints: {
            sm: '@media screen(min-width=750px)',
            md: '@media(min-width=1000px)',
            lg: '@media(min-width=1200px)'
        },
        custom: {
            '1': '1px solid #000',
            'Ff(i)': 'inherit',
            'C(light-gray)': 'rgba(0, 0, 0, 0.80)',
            'Fil(btn)': "progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#1a000000',GradientType=0)",
            'Bgi(btn)': 'linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10))',
            'Bgc(btn-active)': 'rgb(0, 120, 231)'
        },
        classNames: []
    }
};
