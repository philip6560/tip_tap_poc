import {BridgeExtension} from '@10play/tentap-editor';
import Text from '@tiptap/extension-text';
import Color from '@tiptap/extension-color';
import ImmutableBadgeExtension from './ImmutableBadgeExtension';

type ImmutableBadgeState = {
  onTap: () => void;
};

type ImmutableBadgeInstance = {};

declare module '@10play/tentap-editor' {
  interface BridgeState extends ImmutableBadgeState {}
  interface EditorBridge extends ImmutableBadgeInstance {}
}

export const ImmutableBadgeBridge = new BridgeExtension<any, any, unknown>({
  tiptapExtension: ImmutableBadgeExtension,
  onBridgeMessage(editor, message, sendMessageBack) {
    return false;
  },
  onEditorMessage(message, editorBridge) {
    return false;
  },
});
