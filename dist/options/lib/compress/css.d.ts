import type { CompressOptions, MinifyOptions } from "csso";
export default interface CSS extends MinifyOptions, CompressOptions {
    [key: string]: any;
}
