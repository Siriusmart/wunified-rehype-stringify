import { UntypedProcessor, WUnifiedPlugin } from "wp-unified"
import rehypeStringify from "rehype-stringify"

export default class WRehypeStringify extends WUnifiedPlugin {
    apply(processor: UntypedProcessor, options: any): UntypedProcessor {
        if (options === undefined)
            return processor.use(rehypeStringify)
        else
            return processor.use(rehypeStringify, options)
    }
}
