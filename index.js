// npm init -y
// npm install @huggingface/inference
import { config } from "dotenv";
import { HfInference } from "@huggingface/inference";

config()

const hf = new HfInference(process.env.CLAVE);
const model = "Salesforce/blip-image-captioning-large";

const imageURL = "https://www.elespectador.com/resizer/ULuzdH3ldfQAZzs8hj3QZm82TqI=/arc-anglerfish-arc2-prod-elespectador/public/AVGREZ5A4FBVTEJJIFTMKM2CPM.jpg"
const response = await fetch(imageURL);
const blob = await response.blob();

const result = await hf.imageToText({
    data: blob,
    model,
})

console.log(result);