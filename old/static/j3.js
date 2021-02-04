const html = (strings, ...exprs) => {
  return strings.reduce((p, c, i) => {
    return `${p}${c}${exprs[i] || ""}`
  }, "");
};

const desktop = (rootEl) => {
    const root = {     
      dir: 0,
      id: 0,
      children: [

      ]
    }

    let id = 0;
    let ptr = root;

    const render = () => {
      const renderNode = (node) => {
        if(typeof node === "string") {
          return html`<div class="win">${node}</div>`
        }
        return html`
          <div id="ds_${node.id}" class="ds ${node.dir ? "vert" : "horz"}">
            ${node.children.map(renderNode).join("\n")}
          </div>
        `
      }
      rootEl.innerHTML = renderNode(root)
    }

    return {
        add: (el) => {
            ptr.children.push(el)
            render()
        }
    }
}

const init = () => {
    console.log(init);
    const d = desktop(document.getElementById("desktop"))
    d.add("test_term")
}

init()