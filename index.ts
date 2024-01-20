import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import "./style.css";
import { definePluginSettings } from "@api/Settings";

const settings = definePluginSettings({
    hoverToView: {
        type: OptionType.BOOLEAN,
        description: "When hovering over a message, show the contents.",
        default: false,
        restartNeeded: false,
        onChange: () => {
            hoverToViewRegister();
        }
    },
});

export default definePlugin({
    name: "Don't Leak!",
    description: "Hide all message contents and attachments when you're streaming or sharing your screen.",
    authors: [Devs.Perny],
    settings,
    start() {
        document.addEventListener("keyup", keyUpHandler);
        document.addEventListener("keydown", keyDownHandler);
        hoverToViewRegister();
    },
});

function hoverToViewRegister() {
    if (settings.store.hoverToView) {
        document.body.classList.add("hoverToView");
        return;
    }
    document.body.classList.remove("hoverToView");
}

function keyUpHandler(e: KeyboardEvent) {
    if (e.key !== "Insert") return;
    document.body.classList.remove("youcanleaknow");
}

function keyDownHandler(e: KeyboardEvent) {
    if (e.key !== "Insert") return;
    document.body.classList.add("youcanleaknow");
}