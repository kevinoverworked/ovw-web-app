const dashboard = (req, res, next) => {
    res.status(200).json({
        title: "Title goes here",
        subTitle: "subtitle text",
        copy: "Welcome to this page. This is where copy would go.",
        media: {
            src: "spacer.gif",
            alt: "spacer alt text"
        },
        links: [{
                className: "primary",
                label: "Action 1",
                href: "internal-page",
                title: "Action 1 title"
            },
            {
                className: "primary",
                label: "Action 2",
                href: "some-internal-page",
                title: "Action 2 title"
            }
        ]
    });
};

module.exports.dashboard = dashboard;