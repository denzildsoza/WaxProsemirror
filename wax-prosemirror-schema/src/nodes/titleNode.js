const title = {
  attrs: {
    level: { default: 1 },
  },
  content: 'inline*',
  group: 'block',
  defining: true,
  parseDOM: [
    {
      tag: 'h1',
      attrs: { level: 1 },
    },
  ],
  toDOM(hook, next) {
    const attrs = { 'data-type': 'inline' };

    // eslint-disable-next-line no-param-reassign
    hook.value = [`h${hook.node.attrs.level}`, attrs, 0];

    next();
  },
};

export default title;
