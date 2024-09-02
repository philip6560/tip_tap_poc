import {mergeAttributes, Node} from '@tiptap/core';
import {ReactNodeViewRenderer} from '@tiptap/react';
import {Plugin} from '@tiptap/pm/state';
import ImmutableTipTapBadge from './ImmutableTipTapBadge';

export default Node.create({
  name: 'ImmutableBadge',
  group: 'inline',
  inline: true,
  content: 'text*',
  selectable: false,
  addAttributes() {
    return {
      badgeId: {
        isRequired: true,
      },
    };
  },
  addProseMirrorPlugins() {
    return [
      new Plugin({
        filterTransaction(transaction, state) {
          let result = true; // true for keep, false for stop transaction
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const replaceSteps: any[] = [];
          if (transaction.getMeta('preventUpdate') === false) {
            return result;
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          transaction.steps.forEach((step: any, index) => {
            if (step.jsonID === 'replaceAround' || step.jsonID === 'replace') {
              // console.log(step)
              const nodes = step.slice.content.content;
              // console.log(nodes.length === 1, nodes);
              if (nodes.length === 1) {
                const node = nodes[0];
                // if it's updating gamePageRedirect, don't stop transaction
                if (node.type.name === 'ImmutableBadge') {
                  return;
                }
              }
              // stop delete or replace node actions to prevent gamePageRedirect button being deleted
              replaceSteps.push(index);
            }
          });
          replaceSteps.forEach(index => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const map = transaction.mapping.maps[index] as any;
            const oldStart = map.ranges[0];
            const oldEnd = map.ranges[0] + map.ranges[1];
            state.doc.nodesBetween(oldStart, oldEnd, node => {
              if (node.type.name === 'ImmutableBadge') {
                result = false;
              }
            });
          });
          return result;
        },
      }),
    ];
  },
  parseHTML() {
    return [
      {
        tag: 'ImmutableBadge',
      },
    ];
  },
  renderHTML({HTMLAttributes}) {
    return ['div', mergeAttributes(HTMLAttributes), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(ImmutableTipTapBadge, {as: 'span'});
  },
});
