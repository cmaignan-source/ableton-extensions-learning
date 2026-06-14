import { initialize, type ActivationContext } from "@ableton-extensions/sdk";

// esbuild inlines this HTML file as a string for production builds.
import bundledInterface from "../ui/interface.html";

export function activate(activation: ActivationContext) {
  const context = initialize(activation, "1.0.0");

  console.log("Show Tempo extension activated");

  context.commands.registerCommand("show_tempo.showDialog", () => {
    // Read the current tempo from the Live Set data model.
    const dataModel = (context.application as any).dataModel;
    const root = dataModel.getRoot();
    const song = dataModel.rootGetSong(root);
    const bpm: number = dataModel.songGetTempo(song);

    console.log("Current BPM:", bpm);

    // Inject BPM into the HTML string before encoding.
    // The placeholder "{{BPM}}" in interface.html is replaced with the actual value.
    const injectedHtml = bundledInterface.replace("{{BPM}}", bpm.toFixed(2));
    const url = `data:text/html,${encodeURIComponent(injectedHtml)}`;

    context.ui.showModalDialog(url, 320, 160).then((result) => {
      console.log(`Dialog closed with: ${result}`);
    });
  });

  context.ui.registerContextMenuAction(
    "AudioClip",
    "Show Tempo",
    "show_tempo.showDialog",
  );
}
