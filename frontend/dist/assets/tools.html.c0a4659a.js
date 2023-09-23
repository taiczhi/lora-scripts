const e=JSON.parse(`{"key":"v-4441a302","path":"./lora/tools.html","title":"LoRA \u76F8\u5173\u5DE5\u5177","lang":"en-US","frontmatter":{"type":"tools","code":"Schema.intersect([\\n    Schema.intersect([\\n        Schema.object({\\n            script_name: Schema.union([\\n                    \\"networks/extract_lora_from_models.py\\",\\n                    \\"networks/extract_lora_from_dylora.py\\",\\n                ]).description(\\"\u811A\u672C\u540D\u79F0\\"),\\n        }).description(\\"\u53C2\u6570\u8BBE\u7F6E\\"),\\n\\n        Schema.union([\\n            Schema.object({\\n                script_name: Schema.const('networks/extract_lora_from_models.py').required(),\\n                v2: Schema.boolean().description(\\"\u5E95\u6A21\u4E3A sd2.0 \u4EE5\u540E\u7684\u7248\u672C\u9700\u8981\u542F\u7528\\"),\\n                model_org: Schema.string().role('textarea').description(\\"\u5E95\u6A21\u8DEF\u5F84\\"),\\n                model_tuned: Schema.string().role('textarea').description(\\"\u5FAE\u8C03\u540E\u7684\u6A21\u578B\u8DEF\u5F84\\"),\\n                save_to: Schema.string().description(\\"\u4FDD\u5B58\u540D\u79F0\\"),\\n                dim: Schema.number().min(8).step(8).default(32).description(\\"LoRA \u7F51\u7EDC\u7EF4\u5EA6\\"),\\n                conv_dim: Schema.number().min(1).step(1).description(\\"LoRA Conv2d-3x3 \u7F51\u7EDC\u7EF4\u5EA6 \u9ED8\u8BA4\u4E0D\u4F7F\u7528\\"),\\n                save_precision: Schema.union([\\"fp16\\", \\"float\\",\\"bf16\\"]).default(\\"fp16\\").description(\\"\u6A21\u578B\u4FDD\u5B58\u7CBE\u5EA6\\"),\\n            }),\\n            Schema.object({\\n                script_name: Schema.const('networks/extract_lora_from_dylora.py').required(),\\n                model: Schema.string().role('textarea').description(\\"DyLoRA \u6A21\u578B\u8DEF\u5F84\\"),\\n                unit: Schema.number().description(\\"rank \u5206\u5272\u5927\u5C0F\\"),\\n                save_to: Schema.string().description(\\"\u4FDD\u5B58\u540D\u79F0\\"),\\n            }),\\n            Schema.object({}),\\n        ]),\\n    ])\\n]);\\n"},"excerpt":"","headers":[],"filePathRelative":"lora/tools.md"}`);export{e as data};
