import {NodeViewContent, NodeViewWrapper} from '@tiptap/react';
import React from 'react';
import {InputsBadge} from './InputsBadge';
import IconClear from './IconClear';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ImmutableTipTapBadge = (props: any) => {
  const {badgeId} = props.node.attrs;
  return (
    <NodeViewWrapper as={'span'}>
      <button
        onClick={() => {
          if (badgeId) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            props.editor
              .chain()
              .setNodeSelection(props.getPos() - 1) // -1 will also get the bullet point
              .setMeta('preventUpdate', false)
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .command((command: any) => {
                command.tr.deleteSelection();
                return true;
              })
              .run();
          }
        }}
        style={{
          maxWidth: '80%',
          minWidth: 'fit-content',
          height: '2rem',
          background: '#CDD8F3',
          color: '#0000',
          fontSize: 14,
          fontWeight: 600,
          borderRadius: '0.5rem',
          cursor: 'pointer',
          marginBottom: 6,
          border: `1px solid #CDD8F3`,
          marginRight: 10,
          textTransform: 'none',
        }}>
        <span
          contentEditable={false}
          style={{
            color: '#000',
            wordWrap: 'break-word',
            textWrap: 'wrap',
            marginRight: 5,
          }}>
          <NodeViewContent as={'span'} />
        </span>
        {badgeId ? <IconClear fill={'#677597'} size={'8'} /> : <></>}
      </button>
    </NodeViewWrapper>
  );
};
export default ImmutableTipTapBadge;
