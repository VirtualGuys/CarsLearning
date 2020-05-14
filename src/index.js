import "core-js/features/map";
import "core-js/features/set";
import bridge from "@vkontakte/vk-bridge";
import activ from "./App.js"

// Init VK  Mini App
bridge.send("VKWebAppInit");

if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
