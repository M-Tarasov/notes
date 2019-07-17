module.exports = {
    title: "Notes and Cheat-Sheets",
    description: "Notes and cheat sheets",
    base: "/notes/",
    themeConfig: {
        sidebar: [
            {
                title: 'Linux',
                collapsable: false,
                children: [ 
                    ['/linux/', 'Общее'],
                    '/linux/apparmor',
                    '/linux/python_deb'
                ]
            }            
        ]
    }
}
