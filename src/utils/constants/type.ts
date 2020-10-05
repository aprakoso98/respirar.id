import { RouteComponentProps } from "react-router-dom";
import { Colors } from ".";

export interface screenProps<Params extends { [K in keyof Params]?: string } = {}>
	extends RouteComponentProps<{ product: string } & Params> { }

export type colorType = keyof typeof Colors | string & { color?: string }
// export const colorMap = (color: colorType = "dark") => (color && Colors[color]) || color