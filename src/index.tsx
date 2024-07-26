import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React, Messages } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

const Patcher = create("YourPlugin");

const YourPlugin: Plugin = {
   ...manifest,

   onStart() {
      Patcher.before(Messages, "sendMessage", (_, [, msg]) => {
        msg.content += "\n💀💀"
      }
   },

   onStop() {
      Patcher.unpatchAll();
   }
};

registerPlugin(YourPlugin);
