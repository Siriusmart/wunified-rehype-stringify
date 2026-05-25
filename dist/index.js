import rehypeStringify from "rehype-stringify";
import { WUnifiedPlugin } from "wp-unified";
export default class WRehypeStringify extends WUnifiedPlugin {
    apply(processor, options) {
        if (options === undefined)
            return processor.use(rehypeStringify);
        else
            return processor.use(rehypeStringify, options);
    }
}
//# sourceMappingURL=index.js.map