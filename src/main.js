import { FrameComponent } from "./view/FrameComponent.js";

const root = document.getElementById("root");
const frame = new FrameComponent();
root.append(frame.element);
