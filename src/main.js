import { MenuController } from "./controller/MenuController.js";
import { GemPuzzle } from "./model/GemPuzzle.js";
import { FrameComponent } from "./view/FrameComponent.js";
import { MenuComponent } from "./view/MenuComponent.js";

const root = document.getElementById("root");
const gemPuzzle = new GemPuzzle(3);
const frameComponent = new FrameComponent();
const menuController = new MenuController(gemPuzzle, frameComponent);
const menuComponent = new MenuComponent(menuController);
root.append(frameComponent.element, menuComponent.element);
