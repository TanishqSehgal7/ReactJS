const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click Me to visit google'
}

const root = document.getElementById("root");

function customRender(element, container) {
    const domElement = document.createElement(element.type)
    domElement.innerHTML = reactElement.children
    for (const prop in element.props) {
        if(prop ==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

customRender(reactElement,root)