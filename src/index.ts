import { UntypedProcessor, WUnifiedPlugin } from "wp-unified"
import rehypeStringify from "rehype-stringify"

export default class WRehypeStringify extends WUnifiedPlugin {
    apply(processor: UntypedProcessor, options: any): UntypedProcessor {
        if (options === undefined)
            processor = processor.use(rehypeStringify)
        else
            processor = processor.use(rehypeStringify, options)

        if (options.snapshot === true)
            processor.apply(() => (tree: any) => {
                this.result.content = structuredClone(tree)
            })

        return processor;
    }
}
