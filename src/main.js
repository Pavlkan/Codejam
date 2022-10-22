import { FrameController } from "./controller/FrameController.js";
import { MenuController } from "./controller/MenuController.js";
import { GemPuzzle } from "./model/GemPuzzle.js";
import { FrameComponent } from "./view/FrameComponent.js";
import { GameStateComponent } from "./view/GameStateComponent.js";
import { MenuComponent } from "./view/MenuComponent.js";

const root = document.getElementById("root");
const gemPuzzle = new GemPuzzle(2);
const frameComponent = new FrameComponent();
const gameStateComponent = new GameStateComponent();
const frameController = new FrameController(
    gemPuzzle,
    frameComponent,
    gameStateComponent
);
frameComponent.setController(frameController);
const menuController = new MenuController(
    gemPuzzle,
    frameComponent,
    gameStateComponent
);
const menuComponent = new MenuComponent(menuController);
root.append(
    gameStateComponent.element,
    frameComponent.element,
    menuComponent.element
);
