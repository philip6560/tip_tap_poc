import {
  useEditorBridge,
  RichText,
  Toolbar,
  TenTapStartKit,
} from '@10play/tentap-editor';
import React from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Button,
} from 'react-native';
import {editorHtml} from './editor-web/build/editorHtml';
import {ImmutableBadgeBridge} from './TipTap/ImmutableBadgeBridge';

export const Editor = () => {
  const editor = useEditorBridge({
    customSource: editorHtml,
    bridgeExtensions: [...TenTapStartKit, ImmutableBadgeBridge],
    autofocus: true,
    avoidIosKeyboard: true,
    initialContent: JSON_VALUE,
  });

  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: '100%',
        paddingHorizontal: 7,
        marginVertical: 10,
        borderColor: '#000',
        borderWidth: 1,
      }}>
      <Button
        title={'Get Result'}
        onPress={() => {
          editor.getHTML().then(result => {
            let newResult = result.replace(new RegExp('div', 'g'), 'span');
            newResult = newResult.replace(new RegExp('span><', 'g'), 'span> <');

            console.log(newResult);
          });
        }}
      />
      <RichText editor={editor} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
        }}>
        <Toolbar editor={editor} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const HTML_VALUE =
  '<p>A <span>24 year old man</span>who presented at Cardiology</p><ul><li><p><span badgeid="1">Chest pain of 3 days</span> </p></li><li><p><span badgeid="1">Nasal headache of 5 days</span> </p></li><li><p><span>Chest pain</span> at <span>Upper lung, left</span> - began <span>3 days ago</span> <span>constant</span>, present during the <span>at night</span> and <span>lasts for 2 hours</span>; described as <span>7 on a 0-10 scale</span> ;<br>characterized by <span>pressure like</span> <span>tight feeling</span>; radiates to <span>Interscapular region</span>; associated with <span>palpitations</span> <span>night sweats</span> <span>history of high blood pressure</span>; relieved by <span>rest</span> </p></li></ul>';

const STRING_VALUE =
  'A 24 year old manwho presented at Cardiology\n\nChest pain of 3 days\n\nNasal headache of 5 days\n\nChest pain at Upper lung, left - began 3 days agoconstant, present during the at night and lasts for 2 hours; described as 7 on a 0-10 scale ;\ncharacterized by pressure liketight feeling; radiates to Interscapular region; associated with palpitationsnight sweatshistory of high blood pressure; relieved by rest';

const JSON_VALUE = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {type: 'text', text: 'A '},
        {
          type: 'ImmutableBadge',
          attrs: {badgeId: null},
          content: [{type: 'text', text: '24 year old man'}],
        },
        {type: 'text', text: 'who presented at Cardiology'},
      ],
    },
    {
      type: 'bulletList',
      content: [
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'ImmutableBadge',
                  attrs: {badgeId: 1},
                  content: [{type: 'text', text: 'Chest pain of 3 days'}],
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'ImmutableBadge',
                  attrs: {badgeId: 1},
                  content: [{type: 'text', text: 'Nasal headache of 5 days'}],
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'ImmutableBadge',
                  attrs: {badgeId: null},
                  content: [{type: 'text', text: 'Chest pain'}],
                },
                {type: 'text', text: ' at '},
                {
                  type: 'ImmutableBadge',
                  attrs: {badgeId: null},
                  content: [{type: 'text', text: 'Upper lung, left'}],
                },
                {type: 'text', text: ' - began '},
                {
                  type: 'ImmutableBadge',
                  attrs: {badgeId: null},
                  content: [{type: 'text', text: '3 days ago'}],
                },
                {
                  type: 'ImmutableBadge',
                  attrs: {badgeId: null},
                  content: [{type: 'text', text: 'constant'}],
                },
                {type: 'text', text: ', present during the '},
                {
                  type: 'ImmutableBadge',
                  attrs: {badgeId: null},
                  content: [{type: 'text', text: 'at night'}],
                },
                {type: 'text', text: ' and '},
                {
                  type: 'ImmutableBadge',
                  attrs: {badgeId: null},
                  content: [{type: 'text', text: 'lasts for 2 hours'}],
                },
                {type: 'text', text: '; described as '},
                {
                  type: 'ImmutableBadge',
                  attrs: {badgeId: null},
                  content: [{type: 'text', text: '7 on a 0-10 scale'}],
                },
                {type: 'text', text: ' ;'},
                {type: 'hardBreak'},
                {type: 'text', text: 'characterized by '},
                {
                  type: 'ImmutableBadge',
                  attrs: {badgeId: null},
                  content: [{type: 'text', text: 'pressure like'}],
                },
                {
                  type: 'ImmutableBadge',
                  attrs: {badgeId: null},
                  content: [{type: 'text', text: 'tight feeling'}],
                },
                {type: 'text', text: '; radiates to '},
                {
                  type: 'ImmutableBadge',
                  attrs: {badgeId: null},
                  content: [{type: 'text', text: 'Interscapular region'}],
                },
                {type: 'text', text: '; associated with '},
                {
                  type: 'ImmutableBadge',
                  attrs: {badgeId: null},
                  content: [{type: 'text', text: 'palpitations'}],
                },
                {
                  type: 'ImmutableBadge',
                  attrs: {badgeId: null},
                  content: [{type: 'text', text: 'night sweats'}],
                },
                {
                  type: 'ImmutableBadge',
                  attrs: {badgeId: null},
                  content: [
                    {type: 'text', text: 'history of high blood pressure'},
                  ],
                },
                {type: 'text', text: '; relieved by '},
                {
                  type: 'ImmutableBadge',
                  attrs: {badgeId: null},
                  content: [{type: 'text', text: 'rest'}],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
