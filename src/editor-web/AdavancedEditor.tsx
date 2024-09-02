import React from 'react';
import {EditorContent} from '@tiptap/react';
import {TenTapStartKit, useTenTap} from '@10play/tentap-editor';
import ImmutableBadgeExtension from '../TipTap/ImmutableBadgeExtension';

/**
 * Here we control the web side of our custom editor
 */
export const AdvancedEditor = () => {
  const editor = useTenTap({
    bridges: [...TenTapStartKit],
    tiptapOptions: {
      extensions: [ImmutableBadgeExtension],
    },
  });
  return <EditorContent editor={editor} />;
};
