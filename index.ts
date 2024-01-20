import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import "./style.css";


export default definePlugin({
    name: "Don't Leak!",
    description: "Hide all message contents and attachments when you're streaming or sharing your screen.",
    authors: [
        {
            id: 1101508982570504244n,
            name: "Perny",
        },
    ],
    patches: [],
    start() {
        document.addEventListener("keyup", keyUpHandler);
        document.addEventListener("keydown", keyDownHandler);
    },
    stop() { },
});

function keyUpHandler(e: KeyboardEvent) {
    if (e.key !== "Insert") return;
    document.body.classList.remove("youcanleaknow");
}

function keyDownHandler(e: KeyboardEvent) {
    if (e.key !== "Insert") return;
    document.body.classList.add("youcanleaknow");
}
