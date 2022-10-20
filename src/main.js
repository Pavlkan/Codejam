import { FrameComponent } from "./view/FrameComponent.js";
import { MenuComponent } from "./view/MenuComponent.js";

const root = document.getElementById("root");
const frame = new FrameComponent();
const menu = new MenuComponent();
root.append(frame.element, menu.element);
