import { TermFragment } from "./term.fragment";

export class McCluskeyResolved {
    solution: Array<McCluskeyResolved>;
    expression: String;
    simplified: String;
}

export class McCluskeyResolver {
    fragments: Array<TermFragment> = [];
    level: Number;
    child: McCluskeyResolver;
}