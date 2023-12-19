import systemTemplate from "../../../../pf2e-master/static/template.json";

const baseTemplate = systemTemplate.Item.action;
const abc = baseTemplate.templates.reduce((acc, tmpl) => {
    return {
        ...acc,
        ...systemTemplate.Item.templates[tmpl as keyof typeof systemTemplate.Item.templates]
    };
}, {})