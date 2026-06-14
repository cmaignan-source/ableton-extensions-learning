import { initialize, type ActivationContext } from "@ableton-extensions/sdk";

// esbuild inlines this HTML file as a string for production builds.
import bundledInterface from "../ui/interface.html";

export function activate(activation: ActivationContext) {
  const context = initialize(activation, "1.0.0");

  console.log("Extension activée");

  const dataModel = (context.application as any).dataModel;
  const root = dataModel.getRoot();
  const song = dataModel.rootGetSong(root);
  const bpm = dataModel.songGetTempo(song);

  console.log("BPM actuel :", bpm);

  context.commands.registerCommand("my-extension.showDialog", () => {
    const url = `data:text/html,${encodeURIComponent(bundledInterface)}`;
    context.ui.showModalDialog(url, 320, 160).then((result) => {
      console.log(`Dialog closed with: ${result}`);
    });
  });

  context.ui.registerContextMenuAction(
    "AudioClip",
    "Open my-extension",
    "my-extension.showDialog",
  );
}
