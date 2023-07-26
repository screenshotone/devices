import { KnownDevices, Device } from "puppeteer-core";

const names = [];
const devices: Record<string, { id: string } & Device> = {};
for (const name of Object.keys(KnownDevices) as Array<
    keyof typeof KnownDevices
>) {
    const key = name
        .toLowerCase()
        .replaceAll(" ", "_")
        .replaceAll("(", "")
        .replaceAll(")", "");
    names.push(key);

    devices[key] = { id: key, ...KnownDevices[name] };
}

export default {
    names: names,
    devices: devices,
};
