import React from 'react';
import {useEditor, EditorContent} from '@tiptap/react';
// import {Button} from '@mantine/core';
import ImmutableBadgeExtension from './ImmutableBadgeExtension';
// import StarterKit from '@tiptap/starter-kit';

const TipTap = ({
  content,
  defaultContent = '',
}: {
  content: string;
  defaultContent?: string;
}) => {
  const editor = useEditor({
    extensions: [ImmutableBadgeExtension],
    content,
    editable: true,
  });

  return (
    <>
      <EditorContent editor={editor} />
      {/* <Button
        onClick={() => {
          console.log('html', editor?.getHTML());
          console.log('text', editor?.getText());
          console.log('json', editor?.getJSON());
        }}>
        Save
      </Button>
      <Button
        onClick={() => {
          editor?.commands.setContent(defaultContent, true);
        }}>
        Reset
      </Button> */}
    </>
  );
};

export default TipTap;
