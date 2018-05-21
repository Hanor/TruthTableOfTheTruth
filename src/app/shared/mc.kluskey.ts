import { MinTermFragment } from "./min.term.fragment";

export class McKluskeyResolver {
    fragments: Array<MinTermFragment>;
    level: Number;
    child: McKluskeyResolver;
}