import { RouteComponentProps } from "react-router-dom";

export interface screenProps<Params extends { [K in keyof Params]?: string } = {}>
	extends RouteComponentProps<{ product: string } & Params> { }