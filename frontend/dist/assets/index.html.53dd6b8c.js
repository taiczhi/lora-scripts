const e=JSON.parse(`{"key":"v-8daa1a0e","path":"/","title":"LoRA \u8BAD\u7EC3","lang":"en-US","frontmatter":{"example":true,"code":"Schema.intersect([\\n    Schema.object({\\n        pretrained_model_name_or_path: Schema.string().default(\\"./sd-models/model.ckpt\\").description(\\"\u5E95\u6A21\u8DEF\u5F84\\"),\\n        train_data_dir: Schema.string().default(\\"./train/aki\\").description(\\"\u8BAD\u7EC3\u6570\u636E\u96C6\u8DEF\u5F84\\"),\\n        reg_data_dir: Schema.string().description(\\"\u6B63\u5219\u5316\u6570\u636E\u96C6\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4E0D\u4F7F\u7528\u6B63\u5219\u5316\u56FE\u50CF\\"),\\n        resolution: Schema.string().default(\\"512,512\\").description(\\"\u8BAD\u7EC3\u56FE\u7247\u5206\u8FA8\u7387\uFF0C\u5BBDx\u9AD8\u3002\u652F\u6301\u975E\u6B63\u65B9\u5F62\uFF0C\u4F46\u5FC5\u987B\u662F 64 \u500D\u6570\u3002\\"),\\n        enable_bucket: Schema.boolean().default(true).description(\\"\u542F\u7528 arb \u6876\u4EE5\u5141\u8BB8\u975E\u56FA\u5B9A\u5BBD\u9AD8\u6BD4\u7684\u56FE\u7247\\"),\\n        min_bucket_reso: Schema.number().default(256).description(\\"arb \u6876\u6700\u5C0F\u5206\u8FA8\u7387\\"),\\n        max_bucket_reso: Schema.number().default(1024).description(\\"arb \u6876\u6700\u5927\u5206\u8FA8\u7387\\"),\\n    }).description(\\"\u8BBE\u7F6E\u8BAD\u7EC3\u7528\u6A21\u578B\u3001\u6570\u636E\u96C6\\"),\\n\\n    Schema.object({\\n        output_name: Schema.string().default(\\"aki\\").description(\\"\u6A21\u578B\u4FDD\u5B58\u540D\u79F0\\"),\\n        output_dir: Schema.string().default(\\"./output\\").description(\\"\u6A21\u578B\u4FDD\u5B58\u6587\u4EF6\u5939\\"),\\n        logging_dir: Schema.string().default(\\"./logs\\").description(\\"\u65E5\u5FD7\u4FDD\u5B58\u6587\u4EF6\u5939\\"),\\n        save_model_as: Schema.union([\\"safetensors\\", \\"ckpt\\"]).default(\\"safetensors\\").description(\\"\u6A21\u578B\u4FDD\u5B58\u683C\u5F0F\\"),\\n        save_every_n_epochs: Schema.number().default(2).description(\\"\u6BCF N epoch\uFF08\u8F6E\uFF09\u81EA\u52A8\u4FDD\u5B58\u4E00\u6B21\u6A21\u578B\\"),\\n    }).description(\\"\u4FDD\u5B58\u8BBE\u7F6E\\"),\\n\\n    Schema.object({\\n        max_train_epochs: Schema.number().default(10).description(\\"\u6700\u5927\u8BAD\u7EC3 epoch\uFF08\u8F6E\u6570\uFF09\\"),\\n        train_batch_size: Schema.number().default(1).description(\\"\u6279\u91CF\u5927\u5C0F\\"),\\n        network_train_unet_only: Schema.boolean().default(false).description(\\"\u4EC5\u8BAD\u7EC3 U-Net\\"),\\n        network_train_text_encoder_only: Schema.boolean().default(false).description(\\"\u4EC5\u8BAD\u7EC3\u6587\u672C\u7F16\u7801\u5668\\"),\\n    }).description(\\"\u8BAD\u7EC3\u76F8\u5173\u53C2\u6570\\"),\\n\\n\\n    Schema.intersect([\\n        Schema.object({\\n            learning_rate: Schema.string()\\n                .default(\\"1e-4\\")\\n                .description(\\n                \\"\u603B\u5B66\u4E60\u7387\uFF0C\u5728\u5206\u5F00\u8BBE\u7F6E U-Net \u4E0E\u6587\u672C\u7F16\u7801\u5668\u5B66\u4E60\u7387\u540E\u8FD9\u4E2A\u503C\u5931\u6548\u3002\\"\\n                ),\\n            unet_lr: Schema.string().default(\\"1e-4\\").description(\\"U-Net \u5B66\u4E60\u7387\\"),\\n            text_encoder_lr: Schema.string().default(\\"1e-5\\").description(\\"\u6587\u672C\u7F16\u7801\u5668\u5B66\u4E60\u7387\\"),\\n            lr_scheduler: Schema.union([\\n                \\"linear\\",\\n                \\"cosine\\",\\n                \\"cosine_with_restarts\\",\\n                \\"polynomial\\",\\n                \\"constant\\",\\n                \\"constant_with_warmup\\",\\n            ]).default(\\"cosine_with_restarts\\").description(\\"\u5B66\u4E60\u7387\u8C03\u5EA6\u5668\u8BBE\u7F6E\\"),\\n            optimizer_type: Schema.union([\\n                \\"AdamW\\",\\n                \\"AdamW8bit\\",\\n                \\"Lion\\",\\n                \\"SGDNesterov\\",\\n                \\"SGDNesterov8bit\\",\\n                \\"DAdaptation\\",\\n                \\"AdaFactor\\",\\n            ]).default(\\"AdamW8bit\\").description(\\"\u4F18\u5316\u5668\u8BBE\u7F6E\\"),\\n        }).description(\\"\u5B66\u4E60\u7387\u4E0E\u4F18\u5316\u5668\u8BBE\u7F6E\\"),\\n\\n        Schema.union([\\n        Schema.object({\\n            lr_scheduler: Schema.const('cosine_with_restarts'),\\n            lr_scheduler_num_cycles: Schema.number().default(1).description('\u91CD\u542F\u6B21\u6570'),\\n        }),\\n        Schema.object({\\n            lr_scheduler: Schema.const('constant_with_warmup'),\\n            lr_warmup_steps: Schema.number().default(100).description('\u70ED\u8EAB\u6B65\u6570'),\\n        }),\\n        Schema.object({}),\\n        ]),\\n    ]),\\n\\n    Schema.intersect([\\n        Schema.object({\\n        network_module: Schema.union([\\"networks.lora\\", \\"networks.dylora\\",\\"lycoris.kohya\\"]).default(\\"networks.lora\\").description(\\"\u8BAD\u7EC3\u7F51\u7EDC\u6A21\u5757\\"),\\n        network_weights: Schema.string().description(\\"\u4ECE\u5DF2\u6709\u7684 LoRA \u6A21\u578B\u4E0A\u7EE7\u7EED\u8BAD\u7EC3\uFF0C\u586B\u5199\u8DEF\u5F84\\"),\\n        network_dim: Schema.number().min(8).max(256).step(8).default(32).description(\\"\u7F51\u7EDC\u7EF4\u5EA6\uFF0C\u5E38\u7528 4~128\uFF0C\u4E0D\u662F\u8D8A\u5927\u8D8A\u597D\\"),\\n        network_alpha: Schema.number().min(1).default(32).description(\\n            \\"\u5E38\u7528\u4E0E network_dim \u76F8\u540C\u7684\u503C\u6216\u8005\u91C7\u7528\u8F83\u5C0F\u7684\u503C\uFF0C\u5982 network_dim \u7684\u4E00\u534A \u9632\u6B62\u4E0B\u6EA2\u3002\u4F7F\u7528\u8F83\u5C0F\u7684 alpha \u9700\u8981\u63D0\u5347\u5B66\u4E60\u7387\u3002\\"\\n        ),\\n        }).description(\\"\u7F51\u7EDC\u8BBE\u7F6E\\"),\\n\\n        Schema.union([\\n            Schema.object({\\n                network_module: Schema.const('lycoris.kohya').required(),\\n                lycoris_algo: Schema.union([\\"lora\\", \\"loha\\", \\"lokr\\", \\"ia3\\"]).default(\\"lora\\").description('LyCORIS \u7F51\u7EDC\u7B97\u6CD5 \u53EF\u9009 lora\u3001loha\u3001lokr\u3001ia3\u3002lora\u5373\u4E3Alocon'),\\n                conv_dim: Schema.number().default(1),\\n                conv_alpha: Schema.number().step(0.1).default(1),\\n                dropout: Schema.number().step(0.1).default(0).description('dropout \u6982\u7387, 0 \u4E3A\u4E0D\u4F7F\u7528 dropout, \u8D8A\u5927\u5219 dropout \u8D8A\u591A\uFF0C\u63A8\u8350 0~0.5\uFF0C LoHa/LoKr/(IA)^3\u6682\u65F6\u4E0D\u652F\u6301')\\n            }),\\n            Schema.object({\\n                network_module: Schema.const('networks.dylora').required(),\\n                dylora_unit: Schema.number().min(1).default(4).description('\u5206\u5272\u5757\u6570\u5355\u4F4D\uFF0C\u6700\u5C0F 1 \u4E5F\u6700\u6162\u3002\u4E00\u822C4\u30018\u300112\u300116\u8FD9\u51E0\u4E2A\u9009'),\\n            }),\\n            Schema.object({}),\\n        ]),\\n    ]),\\n\\n    Schema.object({\\n        xformers: Schema.boolean().default(true).description(\\"\u542F\u7528 xformers\\"),\\n        lowram: Schema.boolean().default(false).description(\\"\u4F4E\u5185\u5B58\u6A21\u5F0F \u8BE5\u6A21\u5F0F\u4E0B\u4F1A\u5C06 U-net\u3001\u6587\u672C\u7F16\u7801\u5668\u3001VAE \u76F4\u63A5\u52A0\u8F7D\u5230\u663E\u5B58\u4E2D\\"),\\n        seed: Schema.number().default(1337).description(\\"\u968F\u673A\u79CD\u5B50\\"),\\n        prior_loss_weight: Schema.number().step(0.1).default(1.0).description(\\"\u5148\u9A8C\u635F\u5931\u6743\u91CD\\"),\\n        min_snr_gamma: Schema.number().step(0.1).description(\\"\u6700\u5C0F\u4FE1\u566A\u6BD4\u4F3D\u9A6C\u503C\uFF0C\u5982\u679C\u542F\u7528\u63A8\u8350\u4E3A 5\\"),\\n        noise_offset: Schema.number().step(0.1).description(\\"\u5728\u8BAD\u7EC3\u4E2D\u6DFB\u52A0\u566A\u58F0\u504F\u79FB\u6765\u6539\u826F\u751F\u6210\u975E\u5E38\u6697\u6216\u8005\u975E\u5E38\u4EAE\u7684\u56FE\u50CF\uFF0C\u5982\u679C\u542F\u7528\uFF0C\u63A8\u8350\u53C2\u6570\u4E3A0.1\\"),\\n        cache_latents: Schema.boolean().default(true).description(\\"\u7F13\u5B58\u56FE\u50CF latent\\"),\\n        caption_extension: Schema.string().default(\\".txt\\").description(\\"Tag\u6587\u4EF6\u6269\u5C55\u540D\\"),\\n        shuffle_caption: Schema.boolean().default(true).description(\\"\u8BAD\u7EC3\u65F6\u968F\u673A\u6253\u4E71 tokens\\"),\\n        keep_tokens: Schema.number().role(\\"slider\\").min(0).max(100).step(1).default(0).description(\\"\u5728\u968F\u673A\u6253\u4E71 tokens \u65F6\uFF0C\u4FDD\u7559\u524D N \u4E2A\u4E0D\u53D8\\"),\\n        max_token_length: Schema.number().default(255).description(\\"\u6700\u5927 token \u957F\u5EA6\\"),\\n        clip_skip: Schema.number().role(\\"slider\\").min(0).max(12).step(1).default(2).description(\\"\u7384\u5B66\\"),\\n        persistent_data_loader_workers: Schema.boolean().default(false).description(\\"\u4FDD\u7559\u52A0\u8F7D\u8BAD\u7EC3\u96C6\u7684worker\uFF0C\u51CF\u5C11\u6BCF\u4E2A epoch \u4E4B\u95F4\u7684\u505C\u987F\u3002\u5BF9\u5185\u5B58\u8981\u6C42\u66F4\u5927\\"),\\n        mixed_precision: Schema.union([\\"fp16\\", \\"fp32\\"]).default(\\"fp16\\").description(\\"\u8BAD\u7EC3\u6DF7\u5408\u7CBE\u5EA6\\"),\\n        save_precision: Schema.union([\\"fp16\\", \\"fp32\\"]).default(\\"fp16\\").description(\\"\u6A21\u578B\u4FDD\u5B58\u7CBE\u5EA6\\"),\\n    }).description(\\"\u9AD8\u7EA7\u8BBE\u7F6E\\"),\\n]);\\n"},"excerpt":"","headers":[],"filePathRelative":"index.md"}`);export{e as data};
