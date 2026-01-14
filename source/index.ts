import { CallController } from "./funcionalidade/callController";
import { MemoryCallRepository } from "./modelo/memoryCallRepository";
import { TextCallUI } from "./ui/TextCallUI";

// Inicializa repositório, controlador e UI
const callRepository = new MemoryCallRepository();
const callController = new CallController(callRepository);
const ui = new TextCallUI(callController);


    ui.start(); // inicia a interface de prompt/alert

