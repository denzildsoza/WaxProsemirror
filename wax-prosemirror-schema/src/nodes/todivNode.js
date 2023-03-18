const toDiv = {
  content: 'inline*',
  group: 'block',
  priority: 0,
  defining: true,
  attrs: {
    class: { default: 'toDiv' },
  },
  parseDOM: [
    {
      tag: 'p.toDiv',
      getAttrs(hook, next) {
        Object.assign(hook, {
          class: hook.dom.getAttribute('class'),
        });
        next();
      },
    },
  ],
  toDOM(hook, next) {
    const attrs = { class: hook.node.attrs.class };
    hook.value = ['div', attrs, 0];
    next();
  },
};

export default toDiv;
