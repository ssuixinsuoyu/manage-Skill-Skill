const skills = [
  { name: "aihot", category: "内容创作", use: "查询 AI HOT 中文 AI 资讯、AI 日报。", keywords: ["ai", "资讯", "日报", "新闻", "今天", "热点", "AI圈"] },
  { name: "dbs", category: "商业诊断", use: "dontbesilent 商业工具箱总入口，按问题自动路由。", keywords: ["商业", "诊断", "工具箱", "路由", "帮我看看", "创业"] },
  { name: "dbs-action", category: "商业诊断", use: "诊断知道该做但做不动的执行力问题。", keywords: ["执行", "拖延", "行动", "做不动", "卡住", "阿德勒"] },
  { name: "dbs-agent-migration", category: "系统工具", use: "把项目整理成 Claude Code / Codex / Grok 通用 Agent 工作台。", keywords: ["agent", "迁移", "工作台", "claude", "codex", "grok", "规则"] },
  { name: "dbs-ai-check", category: "内容创作", use: "扫描文案中的 AI 写作痕迹，输出检测报告。", keywords: ["ai味", "AI写作", "检测", "文案", "痕迹", "不像人"] },
  { name: "dbs-benchmark", category: "商业诊断", use: "用五重过滤法找到值得模仿的对标。", keywords: ["对标", "竞品", "模仿", "案例", "benchmark", "参考"] },
  { name: "dbs-chatroom", category: "商业诊断", use: "根据话题推荐专家，模拟多角色定向聊天室。", keywords: ["聊天室", "专家", "多角色", "讨论", "辩论", "模拟"] },
  { name: "dbs-chatroom-austrian", category: "商业诊断", use: "用哈耶克、米塞斯等奥派经济学视角讨论问题。", keywords: ["奥派", "哈耶克", "米塞斯", "经济学", "市场", "自由"] },
  { name: "dbs-content", category: "内容创作", use: "选题通过后，诊断怎么把选题做成好内容。", keywords: ["内容", "选题", "视频", "文章", "爆款", "怎么做"] },
  { name: "dbs-content-system", category: "系统工具", use: "把大量本地文稿、推文、选题和案例搭成内容结构化系统。", keywords: ["内容系统", "文稿", "结构化", "资料", "知识库", "整理"] },
  { name: "dbs-decision", category: "商业诊断", use: "把业务、关系、健康、职业等领域做成长期跟踪的个人决策系统。", keywords: ["决策", "长期", "判断", "选择", "跟踪", "系统"] },
  { name: "dbs-deconstruct", category: "商业诊断", use: "用语言哲学与奥派经济学拆解模糊商业概念。", keywords: ["概念", "拆解", "模糊", "定义", "维特根斯坦", "原子"] },
  { name: "dbs-diagnosis", category: "商业诊断", use: "商业模式问诊和体检，消解问题并拆解模式。", keywords: ["商业模式", "问诊", "体检", "收入", "客户", "模式"] },
  { name: "dbs-goal", category: "商业诊断", use: "把模糊目标审计成可检查的交付物。", keywords: ["目标", "交付物", "计划", "清晰", "可检查", "里程碑"] },
  { name: "dbs-good-question", category: "系统工具", use: "把模糊问题改写成 Agent 可推理、可批评、可验证的问题说明书。", keywords: ["好问题", "提问", "prompt", "问题说明书", "自动化", "可验证"] },
  { name: "dbs-hook", category: "内容创作", use: "诊断并优化短视频或文章开头。", keywords: ["开头", "hook", "钩子", "短视频", "吸引", "前三秒"] },
  { name: "dbs-learning", category: "内容创作", use: "把课题拆成连续学习文章，并随反馈调整深度。", keywords: ["学习", "课程", "文章", "教学", "连续", "课题"] },
  { name: "dbs-report", category: "系统工具", use: "把多次 dbs-save 攒下来的诊断状态合并成 Markdown 报告。", keywords: ["报告", "整理", "打包", "markdown", "总结", "交付"] },
  { name: "dbs-restore", category: "系统工具", use: "恢复上次保存的诊断状态，接着往下做。", keywords: ["恢复", "续上", "上次", "状态", "接着"] },
  { name: "dbs-save", category: "系统工具", use: "保存当前诊断关键状态，方便下次恢复。", keywords: ["保存", "存档", "记录", "状态", "记下来"] },
  { name: "dbs-slowisfast", category: "商业诊断", use: "找到看起来更慢但长期更快的方法，用摩擦建造资产。", keywords: ["慢就是快", "长期", "资产", "复利", "摩擦", "反快"] },
  { name: "dbs-xhs-title", category: "内容创作", use: "从小红书标题公式中选择合适公式并生成标题。", keywords: ["小红书", "标题", "XHS", "爆款", "笔记", "种草"] },
  { name: "nuwa-skill", category: "人物视角", use: "输入人名或主题，深度调研并生成可运行的人物 Skill。", keywords: ["人物", "skill", "女娲", "蒸馏", "人设", "创建"] },
  { name: "ding-yuanying-perspective", category: "人物视角", use: "用丁元英式商业、文化和强者逻辑分析问题。", keywords: ["丁元英", "天道", "商业", "文化属性", "强者"] },
  { name: "andrej-karpathy-perspective", category: "人物视角", use: "用 Karpathy 式 AI、教育和工程思维分析问题。", keywords: ["karpathy", "AI", "工程", "教育", "神经网络"] },
  { name: "elon-musk-perspective", category: "人物视角", use: "用马斯克式第一性原理、工程压强和产品决策视角。", keywords: ["马斯克", "musk", "第一性原理", "产品", "工程"] },
  { name: "feynman-perspective", category: "人物视角", use: "用费曼式解释、学习和拆解问题。", keywords: ["费曼", "feynman", "解释", "学习", "物理", "教学"] },
  { name: "ilya-sutskever-perspective", category: "人物视角", use: "用 Ilya 式 AI 研究、智能和长期判断视角。", keywords: ["ilya", "sutskever", "AI研究", "智能", "AGI"] },
  { name: "mrbeast-perspective", category: "人物视角", use: "用 MrBeast 式内容增长、视频留存和创作判断。", keywords: ["mrbeast", "视频", "留存", "youtube", "内容增长"] },
  { name: "munger-perspective", category: "人物视角", use: "用芒格式多元思维模型、逆向思考和投资判断。", keywords: ["芒格", "munger", "投资", "思维模型", "逆向"] },
  { name: "naval-perspective", category: "人物视角", use: "用 Naval 式财富、杠杆、判断和自由视角。", keywords: ["naval", "财富", "杠杆", "自由", "判断"] },
  { name: "paul-graham-perspective", category: "人物视角", use: "用 Paul Graham 式创业、写作和早期产品判断。", keywords: ["paul graham", "pg", "创业", "startup", "写作"] },
  { name: "steve-jobs-perspective", category: "人物视角", use: "用乔布斯式产品、审美、取舍和发布表达视角。", keywords: ["乔布斯", "jobs", "产品", "审美", "发布"] },
  { name: "sun-yuchen-perspective", category: "人物视角", use: "用孙宇晨式传播、交易、资源整合和热点操作视角。", keywords: ["孙宇晨", "justin sun", "传播", "交易", "热点"] },
  { name: "taleb-perspective", category: "人物视角", use: "用塔勒布式反脆弱、风险、概率和黑天鹅视角。", keywords: ["塔勒布", "taleb", "反脆弱", "风险", "黑天鹅"] },
  { name: "trump-perspective", category: "人物视角", use: "用特朗普式谈判、传播、权力叙事和冲突策略视角。", keywords: ["特朗普", "trump", "谈判", "传播", "权力"] },
  { name: "x-mastery-mentor", category: "内容创作", use: "提供 X / Twitter 运营、增长和内容策略指导。", keywords: ["twitter", "x", "推特", "运营", "增长", "thread"] },
  { name: "zhang-yiming-perspective", category: "人物视角", use: "用张一鸣式长期主义、组织、产品和认知判断。", keywords: ["张一鸣", "字节", "组织", "产品", "长期"] },
  { name: "zhangxuefeng-perspective", category: "人物视角", use: "用张雪峰式升学、专业、职业选择和表达框架。", keywords: ["张雪峰", "升学", "专业", "职业", "高考"] },
  { name: "brandkit", category: "设计前端", use: "生成高端品牌视觉规范和品牌图像方向。", keywords: ["品牌", "brand", "logo", "视觉", "VI", "规范"] },
  { name: "design-taste-frontend", category: "设计前端", use: "为前端页面、落地页和重设计提供高审美实现规则。", keywords: ["前端", "网页", "landing", "设计", "UI", "审美"] },
  { name: "design-taste-frontend-v1", category: "设计前端", use: "旧版前端审美规则，适合依赖原始风格的项目。", keywords: ["前端", "旧版", "v1", "设计", "网页"] },
  { name: "full-output-enforcement", category: "系统工具", use: "要求完整输出代码，降低大文件或长代码截断风险。", keywords: ["完整输出", "截断", "代码", "长文件", "不要省略"] },
  { name: "gpt-taste", category: "设计前端", use: "高级 UX/UI 与 GSAP 动效工程风格。", keywords: ["动效", "gsap", "高级", "UI", "UX", "motion"] },
  { name: "high-end-visual-design", category: "设计前端", use: "定义高端 agency 风格字体、间距、构图和视觉质量。", keywords: ["高端", "视觉", "agency", "排版", "质感"] },
  { name: "image-to-code", category: "设计前端", use: "把截图、设计稿或 mockup 还原成前端代码。", keywords: ["截图", "还原", "image to code", "mockup", "设计稿"] },
  { name: "imagegen-frontend-mobile", category: "设计前端", use: "生成高级移动端 App 界面图像方向。", keywords: ["移动端", "app", "手机", "界面", "imagegen"] },
  { name: "imagegen-frontend-web", category: "设计前端", use: "生成高级 Web 页面视觉方向图。", keywords: ["网页", "web", "界面图", "视觉方向", "imagegen"] },
  { name: "industrial-brutalist-ui", category: "设计前端", use: "生成工业、粗野主义、机械终端感 UI。", keywords: ["工业", "粗野", "brutalist", "机械", "终端"] },
  { name: "minimalist-ui", category: "设计前端", use: "生成干净、克制、编辑感、留白充分的界面。", keywords: ["极简", "留白", "白色", "克制", "minimal"] },
  { name: "redesign-existing-projects", category: "设计前端", use: "审计并升级已有网站或应用的视觉质量。", keywords: ["重设计", "升级", "已有项目", "redesign", "改版"] },
  { name: "stitch-design-taste", category: "设计前端", use: "为 Google Stitch 生成语义化设计系统提示。", keywords: ["stitch", "google stitch", "设计系统", "prompt"] },
  { name: "humanizer-zh", category: "内容创作", use: "去除中文文本中的 AI 生成痕迹，让表达更自然。", keywords: ["润色", "去AI味", "自然", "中文", "人味", "改写"] },
  { name: "seedance-prompt-en", category: "视频图像", use: "为 Jimeng Seedance 2.0 撰写英文视频生成提示词。", keywords: ["seedance", "视频", "提示词", "英文", "生成视频"] },
  { name: "seedance-prompt-zh", category: "视频图像", use: "为 Jimeng Seedance 2.0 撰写中文视频生成提示词。", keywords: ["即梦", "seedance", "视频", "提示词", "中文"] },
  { name: "guizang-social-card-skill", category: "视频图像", use: "生成归藏风格社交卡片和公众号配图。", keywords: ["归藏", "社交卡片", "公众号", "配图", "卡片"] },
  { name: "xhs-book-reality-lineart", category: "视频图像", use: "生成可发布的小红书漫画线稿风轮播图。", keywords: ["小红书", "漫画", "线稿", "轮播", "图片"] },
  { name: "xhs-content-pack", category: "内容创作", use: "直接创建小红书内容包。", keywords: ["小红书", "内容包", "笔记", "封面", "发布"] },
  { name: "hatch-pet", category: "系统工具", use: "创建、修复、验证、预览和打包 Codex 动态宠物。", keywords: ["宠物", "pet", "动画", "hatch", "打包"] },
  { name: "remotion", category: "视频图像", use: "Remotion 视频创作、动画和渲染最佳实践。", keywords: ["remotion", "视频", "动画", "react", "渲染"] }
];

const skillExamples = {
  aihot: "例如：今天 AI 圈有什么值得关注的新模型、融资或产品发布？",
  dbs: "例如：帮我看看这个 AI 工具订阅制项目，应该先诊断商业模式还是内容策略？",
  "dbs-action": "例如：我知道要每天写内容，但连续三周都没开始，帮我诊断卡点。",
  "dbs-agent-migration": "例如：把这个项目整理成 Claude Code、Codex、Grok 都能接手的 Agent 工作台。",
  "dbs-ai-check": "例如：检查这篇公众号文章有没有明显 AI 味，只诊断不改写。",
  "dbs-benchmark": "例如：帮我找 5 个值得对标的知识付费产品，并说明为什么值得学。",
  "dbs-chatroom": "例如：让增长负责人、产品经理、财务顾问一起讨论这个新产品定价。",
  "dbs-chatroom-austrian": "例如：用奥派经济学视角讨论低价补贴会不会扭曲真实需求。",
  "dbs-content": "例如：这个选题是“普通人用 AI 做副业”，帮我判断怎么做成一条好视频。",
  "dbs-content-system": "例如：把我过去 200 篇文稿整理成可复用的内容选题系统。",
  "dbs-decision": "例如：我在全职工作和创业之间摇摆，帮我搭一个长期决策表。",
  "dbs-deconstruct": "例如：拆解“个人品牌”这个词，哪些是事实，哪些只是包装话术？",
  "dbs-diagnosis": "例如：诊断这个训练营商业模式：客户是谁、付费理由是什么、瓶颈在哪。",
  "dbs-goal": "例如：把“今年做大影响力”改成 3 个可检查的交付物。",
  "dbs-good-question": "例如：把“我该怎么赚钱”改写成 Agent 能执行、能验证的问题。",
  "dbs-hook": "例如：优化这条短视频前三秒，让观众愿意继续看下去。",
  "dbs-learning": "例如：用连续 7 篇文章教我理解 AI Agent，从入门到能动手做。",
  "dbs-report": "例如：把最近三次商业诊断整理成一份 Markdown 决策报告。",
  "dbs-restore": "例如：接着上次保存的商业诊断，从未解决的问题继续。",
  "dbs-save": "例如：保存这次关于小红书账号定位的诊断结论，方便下次续上。",
  "dbs-slowisfast": "例如：我想快速涨粉，帮我找一个看起来慢但长期更快的做法。",
  "dbs-xhs-title": "例如：主题是“AI 写作工具”，生成 20 个小红书标题并说明公式。",
  "nuwa-skill": "例如：为“稻盛和夫视角”调研并生成一个可运行的人物视角技能。",
  "ding-yuanying-perspective": "例如：用丁元英的视角分析这个生意是不是靠文化属性赚钱。",
  "andrej-karpathy-perspective": "例如：用 Karpathy 的方式解释为什么这个 AI 产品 demo 很强但落地难。",
  "elon-musk-perspective": "例如：用第一性原理重拆这个产品，哪些功能应该砍掉？",
  "feynman-perspective": "例如：用费曼方式把“Transformer 注意力机制”讲到高中生能懂。",
  "ilya-sutskever-perspective": "例如：用 Ilya 的长期 AI 研究视角判断这个模型路线是否重要。",
  "mrbeast-perspective": "例如：用 MrBeast 的留存逻辑重写这条视频脚本。",
  "munger-perspective": "例如：用芒格的逆向思维找出这个投资判断里最危险的盲点。",
  "naval-perspective": "例如：用 Naval 的杠杆视角分析我该做课程、软件还是咨询。",
  "paul-graham-perspective": "例如：用 Paul Graham 的创业视角判断这个 MVP 是否太复杂。",
  "steve-jobs-perspective": "例如：用乔布斯的产品审美帮我砍掉页面里的多余信息。",
  "sun-yuchen-perspective": "例如：用孙宇晨的传播视角设计一次高话题度发布。",
  "taleb-perspective": "例如：用塔勒布的反脆弱视角检查这个计划在黑天鹅下会不会崩。",
  "trump-perspective": "例如：用特朗普式传播分析这句口号为什么有冲突感。",
  "x-mastery-mentor": "例如：帮我把这篇长文改成 10 条适合 X/Twitter 发布的 thread。",
  "zhang-yiming-perspective": "例如：用张一鸣的视角分析这个团队是不是被短期目标绑架了。",
  "zhangxuefeng-perspective": "例如：用张雪峰的方式给一个普通家庭讲清楚专业选择风险。",
  brandkit: "例如：为一个 AI 效率工具生成品牌语气、色彩、字体和视觉规范。",
  "design-taste-frontend": "例如：把这个本地工具做成白色、数学风、留白充分的前端网站。",
  "design-taste-frontend-v1": "例如：用旧版 taste 规则复刻一个更早期的网页视觉方向。",
  "full-output-enforcement": "例如：输出完整 React 组件和 CSS，不要省略中间代码。",
  "gpt-taste": "例如：为作品集首页加入高级 GSAP 动效和更有节奏的交互。",
  "high-end-visual-design": "例如：把一个普通 SaaS 页面提升到高端 agency 级视觉质感。",
  "image-to-code": "例如：根据这张网页截图，还原一个像素接近的 HTML/CSS 页面。",
  "imagegen-frontend-mobile": "例如：生成一张高端移动端任务管理 App 的界面方向图。",
  "imagegen-frontend-web": "例如：生成一个 AI 产品官网首屏的高质量视觉参考图。",
  "industrial-brutalist-ui": "例如：做一个像机械终端和工业控制台结合的后台界面。",
  "minimalist-ui": "例如：把这个工具改成白色、克制、少装饰、强留白的界面。",
  "redesign-existing-projects": "例如：审计这个旧网页，并直接升级布局、字体、间距和交互。",
  "stitch-design-taste": "例如：为 Google Stitch 写一份语义清晰的设计系统提示词。",
  "humanizer-zh": "例如：把这段中文改得更像人写的，去掉 AI 腔但保留意思。",
  "seedance-prompt-en": "例如：把“赛博城市雨夜行走”写成 Seedance 英文视频提示词。",
  "seedance-prompt-zh": "例如：为即梦写一个 10 秒产品展示视频的中文提示词。",
  "guizang-social-card-skill": "例如：把这段观点做成 3 张归藏风格社交卡片。",
  "xhs-book-reality-lineart": "例如：把一本书里的现实困境做成小红书线稿漫画轮播。",
  "xhs-content-pack": "例如：围绕“AI 写作工具”生成小红书标题、正文、封面文案和标签。",
  "hatch-pet": "例如：创建一个会眨眼、走动、可打包的 Codex 动态桌宠。",
  remotion: "例如：用 Remotion 做一个 60 秒 GitHub 教程视频，含字幕和动画。"
};

const answerPatterns = {
  "AI 资讯": "回答示例：按模型、产品、融资、论文和观点整理最新动态，标出可信来源、影响判断和后续追踪点。",
  内容创作: "回答示例：先判断受众和表达角度，再给出可直接发布的标题、正文结构、修改理由和下一步迭代建议。",
  商业诊断: "回答示例：先指出当前商业问题的核心矛盾，再拆关键假设、风险点、验证动作和下一步决策。",
  设计前端: "回答示例：先给出设计读法，再落到布局、字体、间距、交互和代码改动清单，必要时直接改文件。",
  人物视角: "回答示例：用该人物的判断框架重看问题，输出核心判断、反直觉提醒、取舍原则和可执行建议。",
  视频图像: "回答示例：输出可直接使用的画面方向、镜头/分镜、提示词、风格参数和制作注意事项。",
  代码工程: "回答示例：先定位代码任务边界，再给出实现步骤、关键文件、验证命令和可维护性注意事项。",
  浏览器自动化: "回答示例：给出可执行的浏览器操作流程，包含打开页面、定位元素、点击输入、截图和状态验证。",
  "GitHub 协作": "回答示例：读取仓库、issue、PR 或 CI 状态，输出风险点、修改建议、命令和发布/提交流程。",
  文档表格: "回答示例：说明文档或表格结构，给出生成、编辑、整理、导出和校验步骤。",
  演示文稿: "回答示例：输出幻灯片结构、页标题、叙事顺序、视觉建议和可生成的 PPT/Slides 交付物。",
  数据分析: "回答示例：说明数据字段、清洗口径、分析方法、图表建议和结论边界。",
  插件开发: "回答示例：输出技能 / 插件的目录结构、元数据、说明文档、脚本入口和安装验证方式。",
  本地自动化: "回答示例：列出本机操作步骤、文件路径、命令、权限边界和可回滚检查。",
  系统工具: "回答示例：输出清晰步骤、文件结构、执行命令、保存/恢复方式和可复用的操作结果。"
};

const answerPatternsEn = {
  "AI 资讯": "Answer sample: group the latest updates by model, product, funding, paper, and opinion, with source quality, impact, and follow-up signals.",
  内容创作: "Answer sample: identify the audience and angle, then provide publishable titles, structure, reasoning, and next iteration steps.",
  商业诊断: "Answer sample: state the core business contradiction, unpack assumptions, risks, validation moves, and the next decision.",
  设计前端: "Answer sample: explain the design direction, then translate it into layout, typography, spacing, interactions, and code changes.",
  人物视角: "Answer sample: reframe the problem through the person's mental model, with core judgment, counterintuitive warnings, tradeoffs, and actions.",
  视频图像: "Answer sample: provide visual direction, shots/storyboard, prompt text, style parameters, and production notes.",
  代码工程: "Answer sample: define the engineering scope, then list implementation steps, key files, validation commands, and maintenance notes.",
  浏览器自动化: "Answer sample: provide a browser workflow with navigation, element targeting, clicking, typing, screenshots, and state checks.",
  "GitHub 协作": "Answer sample: inspect repositories, issues, PRs, or CI, then report risks, fixes, commands, and publishing steps.",
  文档表格: "Answer sample: describe the document or sheet structure, then provide create, edit, organize, export, and validation steps.",
  演示文稿: "Answer sample: provide slide structure, titles, narrative order, visual direction, and the deck artifact to produce.",
  数据分析: "Answer sample: explain fields, cleaning rules, analysis method, chart options, conclusions, and limits.",
  插件开发: "Answer sample: provide the skill/plugin directory structure, metadata, docs, script entrypoints, and install checks.",
  本地自动化: "Answer sample: list local steps, file paths, commands, permission boundaries, and rollback checks.",
  系统工具: "Answer sample: provide clear steps, file structure, commands, save/restore behavior, and reusable outputs."
};

const skillAnswerExamples = {
  aihot: "回答示例：列出今天 AI 热点，按“模型/产品/融资/观点”分组，并标出哪些值得继续追踪。",
  "dbs-xhs-title": "回答示例：给出 20 个小红书标题，标注使用的标题公式，并推荐最适合发布的 3 个。",
  "humanizer-zh": "回答示例：先指出 AI 味来源，再给出自然改写版本，并保留原文想表达的核心意思。",
  "image-to-code": "回答示例：拆解截图布局后，生成对应 HTML/CSS/React 代码，并说明哪些细节需要人工确认。",
  "minimalist-ui": "回答示例：给出更克制的白底布局方案，调整留白、字号、边框和信息层级。",
  remotion: "回答示例：给出视频结构、时间轴、组件拆分、动画节奏和可执行的 Remotion 实现建议。"
};

const tasteSkillNames = new Set([
  "brandkit",
  "design-taste-frontend",
  "design-taste-frontend-v1",
  "full-output-enforcement",
  "gpt-taste",
  "high-end-visual-design",
  "image-to-code",
  "imagegen-frontend-mobile",
  "imagegen-frontend-web",
  "industrial-brutalist-ui",
  "minimalist-ui",
  "redesign-existing-projects",
  "stitch-design-taste"
]);

const nuwaSkillNames = new Set([
  "nuwa-skill",
  "andrej-karpathy-perspective",
  "elon-musk-perspective",
  "feynman-perspective",
  "ilya-sutskever-perspective",
  "mrbeast-perspective",
  "munger-perspective",
  "naval-perspective",
  "paul-graham-perspective",
  "steve-jobs-perspective",
  "sun-yuchen-perspective",
  "taleb-perspective",
  "trump-perspective",
  "x-mastery-mentor",
  "zhang-yiming-perspective",
  "zhangxuefeng-perspective"
]);

function inferAuthor(name, use = "", source = "") {
  const text = normalize(`${name} ${use} ${source}`);
  if (name === "aihot") return "aihot";
  if (name.startsWith("dbs")) return "dontbesilent";
  if (tasteSkillNames.has(name) || text.includes("taste-skill") || text.includes("leonxlnx")) return "Leonxlnx / taste-skill";
  if (nuwaSkillNames.has(name) || text.includes("nuwa")) return "nuwa-skill / perspective examples";
  if (name === "ding-yuanying-perspective") return "local perspective";
  if (name === "humanizer-zh" || text.includes("humanizer")) return "op7418 / Humanizer-zh";
  if (name.startsWith("seedance-prompt") || text.includes("seedance")) return "dexhunter / seedance2-skill";
  if (name === "guizang-social-card-skill") return "guizang";
  if (name.startsWith("xhs-")) return "xhs creator tools";
  if (name === "hatch-pet") return "hatch-pet";
  if (name === "remotion") return "Remotion";
  return "local / imported";
}

skills.forEach((skill) => {
  skill.example = skillExamples[skill.name] || `例如：使用 ${skill.name} 处理一个与“${skill.use}”相关的具体任务。`;
  skill.sampleAnswer = skillAnswerExamples[skill.name] || answerPatterns[skill.category] || "回答示例：输出该技能对应的分析、结果、理由和可执行下一步。";
  skill.source = skill.source || "内置示例";
  skill.author = skill.author || inferAuthor(skill.name, skill.use, skill.source);
});

const uiText = {
  zh: {
    documentTitle: "技能判别器",
    atlasEyebrow: "Codex 技能图谱",
    appTitle: "技能判别器",
    topicLabel: "输入你现在要处理的话题",
    topicVector: "话题向量",
    matchMetric: "匹配项",
    topicPlaceholder: "例如：我想做一个小红书标题，主题是 AI 工具；或者：帮我诊断这个商业模式哪里不成立。",
    clear: "清空",
    waiting: "等待中",
    topScore: "最高分 {score}",
    noTopic: "输入一个任务、话题或模糊想法。系统会计算话题与每个技能的关键词交集，并给出最适合调用的候选。",
    noMatch: "没有明显命中。试着写得更具体，比如“做网页”“商业模式诊断”“小红书标题”“视频提示词”。",
    keywordHit: "命中关键词：{hits}",
    weakMatch: "与名称、分类或用途产生弱匹配",
    call: "调用",
    recommendedCall: "推荐调用",
    exampleLabel: "例子",
    answerLabel: "回答示例",
    authorEyebrow: "作者文件夹",
    authorFolders: "作者文件夹",
    authorHint: "同一作者或来源的一组技能会收进同一个文件夹。",
    allAuthors: "全部作者",
    inventoryEyebrow: "本机清单",
    installedSkills: "已安装技能",
    autoScan: "自动检索本机技能",
    importSkills: "导入本机技能",
    searchPlaceholder: "搜索名称、用途、关键词",
    inventoryStatus: "正在尝试读取本机技能索引。",
    inventoryLoading: "正在检索本机技能...",
    inventoryLoaded: "已自动读取 {count} 个本机技能。",
    inventoryManualLoaded: "已手动导入 {count} 个本机技能。",
    inventoryDefault: "当前显示内置示例。点击自动检索可读取本机技能索引。",
    inventoryMissing: "没有找到本机索引。可先运行生成器刷新 manifest，或手动导入 skills 文件夹。",
    privacyNote: "本地运行时会自动读取技能索引文件或本机接口；公开网页仍需你手动选择 .codex/skills 或 .agents/skills 文件夹。",
    copyCall: "复制调用指令",
    close: "关闭",
    taskLabel: "任务：",
    copiedCall: "调用指令已复制，粘贴到 Codex 对话即可触发。",
    copied: "已复制调用指令。",
    copyBlocked: "浏览器拦截了自动复制，文本已选中，请按 Ctrl+C。",
    noSkillFile: "没有找到 SKILL.md。请选择 .codex/skills 或 .agents/skills 文件夹。",
    imported: "已导入 {count} 个本机技能。",
    scanLoaded: "已自动装载 {count} 个本机技能。",
    scanMissing: "没有找到可自动读取的本机技能索引。",
    installerEyebrow: "技能安装器",
    installTitle: "安装新技能",
    installHint: "输入 GitHub 地址、仓库路径、本地文件夹或压缩包路径；安装后会自动刷新下方列表。",
    installPlaceholder: "例如：https://github.com/openai/skills/tree/main/skills/.curated/skill-name",
    installButton: "安装并载入",
    installStatus: "等待输入技能来源。",
    installMissingInput: "先输入一个 GitHub 地址、本地路径或 zip 路径。",
    installWorking: "正在安装技能...",
    installDone: "已安装 {installed} 个技能，并重新载入 {count} 个本机技能。",
    installFailed: "安装失败：{message}",
    callPacket: "调用包",
    switchLanguage: "切换到英文界面",
    categoryAll: "全部",
    categoryBusiness: "商业诊断",
    categoryContent: "内容创作",
    categoryDesign: "设计前端",
    categoryPerspective: "人物视角",
    categoryMedia: "视频图像",
    categorySystem: "系统工具"
  },
  en: {
    documentTitle: "Skill Selector",
    atlasEyebrow: "Codex Skill Atlas",
    appTitle: "Skill Selector",
    topicLabel: "Describe the topic you want to handle",
    topicVector: "topic vector",
    matchMetric: "matches",
    topicPlaceholder: "Example: write Xiaohongshu titles for an AI tool; or diagnose why this business model does not hold.",
    clear: "Clear",
    waiting: "waiting",
    topScore: "top score {score}",
    noTopic: "Enter a task, topic, or rough idea. The system scores the overlap between your topic and each skill, then recommends the best calls.",
    noMatch: "No strong match yet. Try a more concrete phrase, such as website design, business diagnosis, Xiaohongshu title, or video prompt.",
    keywordHit: "Matched keywords: {hits}",
    weakMatch: "Weak match from name, category, or purpose",
    call: "Call",
    recommendedCall: "Recommended Call",
    exampleLabel: "Example",
    answerLabel: "Answer",
    authorEyebrow: "Author Folders",
    authorFolders: "Author Folders",
    authorHint: "Skills from the same author or source are grouped into one folder.",
    allAuthors: "All Authors",
    inventoryEyebrow: "Local Inventory",
    installedSkills: "Installed Skills",
    autoScan: "Auto Scan Local Skills",
    importSkills: "Import Local Skills",
    searchPlaceholder: "Search name, purpose, keywords",
    inventoryStatus: "Trying to read the local skill index.",
    inventoryLoading: "Scanning local skills...",
    inventoryLoaded: "Automatically loaded {count} local skills.",
    inventoryManualLoaded: "Manually imported {count} local skills.",
    inventoryDefault: "Showing built-in examples. Auto scan can load your local skill index.",
    inventoryMissing: "No local index found. Refresh the manifest with the generator, or import a skills folder manually.",
    privacyNote: "When run locally, the site reads skills-manifest.json or /api/local-skills. On a public site, visitors still need to choose their .codex/skills or .agents/skills folder.",
    copyCall: "Copy Call Prompt",
    close: "Close",
    taskLabel: "Task:",
    copiedCall: "Skill call prompt copied. Paste it into Codex to trigger the skill.",
    copied: "Skill call prompt copied.",
    copyBlocked: "The browser blocked auto-copy. The text is selected; press Ctrl+C.",
    noSkillFile: "No SKILL.md found. Choose your .codex/skills or .agents/skills folder.",
    imported: "Imported {count} local skills.",
    scanLoaded: "Loaded {count} local skills.",
    scanMissing: "No auto-readable local skill index found.",
    installerEyebrow: "Skill Installer",
    installTitle: "Install New Skill",
    installHint: "Enter a GitHub URL, owner/repo/path, local folder, or zip path. The list below refreshes after install.",
    installPlaceholder: "Example: https://github.com/openai/skills/tree/main/skills/.curated/skill-name",
    installButton: "Install & Load",
    installStatus: "Waiting for a skill source.",
    installMissingInput: "Enter a GitHub URL, local path, or zip path first.",
    installWorking: "Installing skill...",
    installDone: "Installed {installed} skill(s) and reloaded {count} local skills.",
    installFailed: "Install failed: {message}",
    callPacket: "Call Packet",
    switchLanguage: "Switch to Chinese",
    categoryAll: "All",
    categoryBusiness: "Business",
    categoryContent: "Content",
    categoryDesign: "Design",
    categoryPerspective: "Perspectives",
    categoryMedia: "Video & Image",
    categorySystem: "System"
  }
};

const categoryLabels = {
  全部: { zh: "全部", en: "All" },
  "AI 资讯": { zh: "AI 资讯", en: "AI News" },
  商业诊断: { zh: "商业诊断", en: "Business" },
  内容创作: { zh: "内容创作", en: "Content" },
  设计前端: { zh: "设计前端", en: "Design" },
  人物视角: { zh: "人物视角", en: "Perspectives" },
  视频图像: { zh: "视频图像", en: "Video & Image" },
  代码工程: { zh: "代码工程", en: "Code" },
  浏览器自动化: { zh: "浏览器自动化", en: "Browser" },
  "GitHub 协作": { zh: "GitHub 协作", en: "GitHub" },
  文档表格: { zh: "文档表格", en: "Docs & Sheets" },
  演示文稿: { zh: "演示文稿", en: "Slides" },
  数据分析: { zh: "数据分析", en: "Data" },
  插件开发: { zh: "插件开发", en: "Plugins" },
  本地自动化: { zh: "本地自动化", en: "Local Ops" },
  系统工具: { zh: "系统工具", en: "System" }
};

const categoryOrder = [
  "全部",
  "AI 资讯",
  "商业诊断",
  "内容创作",
  "设计前端",
  "人物视角",
  "视频图像",
  "代码工程",
  "浏览器自动化",
  "GitHub 协作",
  "文档表格",
  "演示文稿",
  "数据分析",
  "插件开发",
  "本地自动化",
  "系统工具"
];

const topicInput = document.querySelector("#topicInput");
const searchInput = document.querySelector("#searchInput");
const recommendations = document.querySelector("#recommendations");
const matchCount = document.querySelector("#matchCount");
const confidenceLabel = document.querySelector("#confidenceLabel");
const skillGrid = document.querySelector("#skillGrid");
const authorFolders = document.querySelector("#authorFolders");
const clearButton = document.querySelector("#clearButton");
const categoryInner = document.querySelector("#categoryInner");
let categoryButtons = [];
const autoScanButton = document.querySelector("#autoScanButton");
const importButton = document.querySelector("#importButton");
const folderInput = document.querySelector("#folderInput");
const installInput = document.querySelector("#installInput");
const installButton = document.querySelector("#installButton");
const installStatus = document.querySelector("#installStatus");
const callPanel = document.querySelector("#callPanel");
const callSkillName = document.querySelector("#callSkillName");
const callSkillUse = document.querySelector("#callSkillUse");
const callPrompt = document.querySelector("#callPrompt");
const copyCallButton = document.querySelector("#copyCallButton");
const closeCallButton = document.querySelector("#closeCallButton");
const inventoryStatus = document.querySelector("#inventoryStatus");
const languageToggle = document.querySelector("#languageToggle");
const toast = document.querySelector("#toast");

let activeCategory = "全部";
let activeAuthor = "全部作者";
const genericTerms = new Set(["ai", "工具", "内容", "视频", "文章", "商业", "设计", "系统", "问题", "分析"]);
let activeCallPrompt = "";
let activeCallSkillName = "";
let language = localStorage.getItem("skill-atlas-language") || "zh";
const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
if (["zh", "en"].includes(requestedLanguage)) {
  language = requestedLanguage;
  localStorage.setItem("skill-atlas-language", language);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatText(template, params = {}) {
  return Object.entries(params).reduce((text, [key, value]) => text.replaceAll(`{${key}}`, value), template);
}

function t(key, params) {
  return formatText(uiText[language]?.[key] || uiText.zh[key] || key, params);
}

function categoryLabel(category) {
  return categoryLabels[category]?.[language] || category;
}

function hasCjk(value) {
  return /[\u3400-\u9fff]/.test(String(value || ""));
}

function languageStats(value) {
  const text = String(value || "");
  const cjk = (text.match(/[\u3400-\u9fff]/g) || []).length;
  const latin = (text.match(/[A-Za-z]/g) || []).length;
  return { cjk, latin };
}

function isEnglishHeavy(value) {
  const { cjk, latin } = languageStats(value);
  return latin > 24 && latin > cjk * 1.8;
}

function isChineseHeavy(value) {
  const { cjk, latin } = languageStats(value);
  return cjk > 8 && cjk >= latin * 0.35;
}

function hasEnglishPhrase(value) {
  const text = String(value || "");
  return /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(text) || /\b(use|when|build|create|install|resize|translate|control|generate|write|today|news|workflow|presentation|design)\b/i.test(text);
}

function isCleanChinese(value) {
  return hasCjk(value) && !isEnglishHeavy(value) && !hasEnglishPhrase(value);
}

function localizedAnswerPattern(category) {
  return language === "en"
    ? answerPatternsEn[category] || answerPatternsEn["系统工具"]
    : answerPatterns[category] || answerPatterns["系统工具"];
}

function fallbackUse(skill) {
  if (language === "en") {
    return `Use ${skill.name} for ${categoryLabel(skill.category).toLowerCase()} workflows in Codex.`;
  }
  return `用于${categoryLabel(skill.category)}类任务，适合调用 ${skill.name} 处理相关工作。`;
}

function fallbackExample(skill) {
  if (language === "en") {
    return `Example: use ${skill.name} to handle a ${categoryLabel(skill.category).toLowerCase()} task.`;
  }
  return `例如：使用 ${skill.name} 处理一个${categoryLabel(skill.category)}类任务。`;
}

function cleanChineseText(value) {
  return String(value || "")
    .replace(/\bskills\b/gi, "技能")
    .replace(/\bskill\b/gi, "技能")
    .replace(/\banswer sample\b/gi, "回答示例")
    .replace(/\bexample\b/gi, "例子");
}

function displayAuthor(author) {
  if (language === "zh") {
    return String(author || "")
      .replace(/^local \/ imported$/i, "本机 / 导入")
      .replace(/^local perspective$/i, "本机人物视角")
      .replace(/^xhs creator tools$/i, "小红书创作工具")
      .replace(/^nuwa-skill \/ perspective examples$/i, "女娲技能 / 人物视角示例")
      .replace(/^OpenAI bundled$/i, "OpenAI 内置")
      .replace(/^GitHub plugin$/i, "GitHub 插件")
      .replace(/^Google Drive plugin$/i, "Google Drive 插件")
      .replace(/^HyperFrames plugin$/i, "HyperFrames 插件")
      .replace(/^Product Design plugin$/i, "Product Design 插件")
      .replace(/\bplugin\b/gi, "插件")
      .replace(/\bexamples\b/gi, "示例")
      .replace(/\bcreator tools\b/gi, "创作工具");
  }
  return author;
}

function displayUse(skill) {
  if (language === "en") {
    const english = skill.useEn || skill.descriptionEn || skill.description_en;
    if (english && !isChineseHeavy(english)) return english;
    return skill.use && !isChineseHeavy(skill.use) ? skill.use : fallbackUse(skill);
  }
  const chinese = skill.useZh || skill.descriptionZh || skill.description_zh;
  if (chinese && isCleanChinese(chinese)) return cleanChineseText(chinese);
  return skill.use && isCleanChinese(skill.use) ? cleanChineseText(skill.use) : fallbackUse(skill);
}

function displayExample(skill) {
  if (language === "en") {
    const english = skill.exampleEn || skill.example_en;
    if (english && !isChineseHeavy(english)) return english;
    return skill.example && !isChineseHeavy(skill.example) ? skill.example : fallbackExample(skill);
  }
  const chinese = skill.exampleZh || skill.example_zh;
  if (chinese && isCleanChinese(chinese)) return cleanChineseText(chinese);
  return skill.example && isCleanChinese(skill.example) ? cleanChineseText(skill.example) : fallbackExample(skill);
}

function displayAnswer(skill) {
  if (language === "en") {
    const english = skill.sampleAnswerEn || skill.sample_answer_en;
    if (english && !isChineseHeavy(english)) return english;
    return skill.sampleAnswer && !isChineseHeavy(skill.sampleAnswer) ? skill.sampleAnswer : localizedAnswerPattern(skill.category);
  }
  const chinese = skill.sampleAnswerZh || skill.sample_answer_zh;
  if (chinese && isCleanChinese(chinese)) return cleanChineseText(chinese);
  return skill.sampleAnswer && isCleanChinese(skill.sampleAnswer) ? cleanChineseText(skill.sampleAnswer) : localizedAnswerPattern(skill.category);
}

function displayKeywords(skill) {
  const keywords = Array.isArray(skill.keywords) ? skill.keywords.map(String).filter(Boolean) : [];
  const filtered = language === "en"
    ? keywords.filter((keyword) => !hasCjk(keyword))
    : keywords.filter((keyword) => hasCjk(keyword));
  const fallback = language === "en"
    ? [...skill.name.split(/[-:]/).filter((part) => part.length > 2), "skill"]
    : ["本机技能"];
  return [...new Set([...filtered, ...fallback])].slice(0, 3);
}

function displayHits(hits) {
  const filtered = language === "en" ? hits.filter((hit) => !hasCjk(hit)) : hits.filter((hit) => hasCjk(hit));
  return filtered.length ? filtered.slice(0, 5).join(" / ") : "";
}

function setInstallStatus(key = "installStatus", params = {}) {
  if (!installStatus) return;
  installStatus.dataset.key = key;
  installStatus.dataset.params = JSON.stringify(params);
  installStatus.textContent = t(key, params);
}

function setInventoryStatus(state, count = "") {
  if (!inventoryStatus) return;
  inventoryStatus.dataset.state = state;
  inventoryStatus.dataset.count = count;
  const statusKeys = {
    loading: "inventoryLoading",
    loaded: "inventoryLoaded",
    manual: "inventoryManualLoaded",
    default: "inventoryDefault",
    missing: "inventoryMissing"
  };
  inventoryStatus.textContent = t(statusKeys[state] || "inventoryStatus", { count });
}

function applyLanguage() {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = t("documentTitle");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });

  renderCategoryBar();

  languageToggle.textContent = language === "zh" ? "EN" : "中";
  languageToggle.setAttribute("aria-label", t("switchLanguage"));

  if (inventoryStatus?.dataset.state) {
    setInventoryStatus(inventoryStatus.dataset.state, inventoryStatus.dataset.count || "");
  }

  if (installStatus?.dataset.key) {
    let params = {};
    try {
      params = JSON.parse(installStatus.dataset.params || "{}");
    } catch {
      params = {};
    }
    setInstallStatus(installStatus.dataset.key, params);
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function normalize(value) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function tokenize(value) {
  const normalized = normalize(value);
  const latin = normalized.match(/[a-z0-9+#.]+/g) || [];
  const chinese = normalized.replace(/[a-z0-9+#.\s]/g, "").split("");
  return [...new Set([...latin, ...chinese].filter(Boolean))];
}

function scoreSkill(skill, topic) {
  const query = normalize(topic);
  if (!query) return { score: 0, hits: [] };

  const haystack = normalize([
    skill.name,
    skill.author,
    skill.category,
    skill.use,
    skill.useEn,
    skill.useZh,
    skill.example,
    skill.exampleEn,
    skill.exampleZh,
    skill.sampleAnswer,
    skill.sampleAnswerEn,
    skill.sampleAnswerZh,
    displayUse(skill),
    displayExample(skill),
    displayAnswer(skill),
    ...skill.keywords
  ].join(" "));
  const tokens = tokenize(query);
  const hits = [];
  let score = 0;

  for (const keyword of skill.keywords) {
    const key = normalize(keyword);
    if (key && query.includes(key)) {
      score += genericTerms.has(key) ? 5 : Math.max(12, key.length * 2);
      hits.push(keyword);
    }
  }

  for (const token of tokens) {
    if (token.length > 1 && haystack.includes(token)) score += 4;
    if (token.length === 1 && haystack.includes(token)) score += 1;
  }

  const nameParts = skill.name.split(/[-\s]/);
  for (const part of nameParts) {
    if (part.length > 2 && query.includes(part)) score += 18;
  }

  return { score, hits: [...new Set(hits)] };
}

function getRanked(topic) {
  return skills
    .map((skill) => ({ skill, ...scoreSkill(skill, topic) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.skill.name.localeCompare(b.skill.name))
    .slice(0, 5);
}

function renderRecommendations() {
  const ranked = getRanked(topicInput.value);
  matchCount.textContent = ranked.length;
  confidenceLabel.textContent = ranked.length ? t("topScore", { score: ranked[0].score }) : t("waiting");

  if (!topicInput.value.trim()) {
    recommendations.innerHTML = `<p class="empty">${escapeHtml(t("noTopic"))}</p>`;
    return;
  }

  if (!ranked.length) {
    recommendations.innerHTML = `<p class="empty">${escapeHtml(t("noMatch"))}</p>`;
    return;
  }

  recommendations.innerHTML = ranked
    .map(({ skill, score, hits }, index) => {
      const visibleHits = displayHits(hits);
      const reason = visibleHits ? t("keywordHit", { hits: visibleHits }) : t("weakMatch");
      return `
        <article class="rec">
          <div class="rank">${index + 1}</div>
          <div>
            <h3>${escapeHtml(skill.name)}</h3>
            <p>${escapeHtml(displayUse(skill))}</p>
            <div class="example"><strong>${escapeHtml(t("exampleLabel"))}</strong>${escapeHtml(stripExampleLabel(displayExample(skill)))}</div>
            <div class="sampleAnswer"><strong>${escapeHtml(t("answerLabel"))}</strong>${escapeHtml(stripAnswerLabel(displayAnswer(skill)))}</div>
            <span class="reason">${escapeHtml(reason)}</span>
            <div class="score">score = ${score}</div>
            <div class="recActions">
              <button class="callButton primary" data-call="${escapeHtml(skill.name)}" type="button">${escapeHtml(t("call"))}</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function matchesLibraryFilter(skill) {
  const term = normalize(searchInput.value);
  const inCategory = activeCategory === "全部" || skill.category === activeCategory;
  const inAuthor = activeAuthor === "全部作者" || skill.author === activeAuthor;
  if (!inCategory) return false;
  if (!inAuthor) return false;
  if (!term) return true;
  return normalize([skill.name, skill.author, skill.category, skill.use, skill.useEn, skill.useZh, skill.example, skill.exampleEn, skill.exampleZh, skill.sampleAnswer, skill.sampleAnswerEn, skill.sampleAnswerZh, displayUse(skill), displayExample(skill), displayAnswer(skill), ...skill.keywords].join(" ")).includes(term);
}

function categoryRank(category) {
  const index = categoryOrder.indexOf(category);
  return index === -1 ? categoryOrder.length : index;
}

function getCategoryCounts() {
  const counts = new Map();
  for (const skill of skills) {
    counts.set(skill.category, (counts.get(skill.category) || 0) + 1);
  }

  const categories = [...counts.entries()]
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => categoryRank(a.category) - categoryRank(b.category) || b.count - a.count || a.category.localeCompare(b.category));

  return [{ category: "全部", count: skills.length }, ...categories];
}

function renderCategoryBar() {
  const categories = getCategoryCounts();
  if (activeCategory !== "全部" && !categories.some((item) => item.category === activeCategory)) {
    activeCategory = "全部";
  }

  categoryInner.innerHTML = categories
    .map(
      ({ category, count }) => `
        <button class="category ${activeCategory === category ? "active" : ""}" data-category="${escapeHtml(category)}" type="button">
          <span>${escapeHtml(categoryLabel(category))}</span>
          <small>${count}</small>
        </button>
      `
    )
    .join("");
  categoryButtons = [...categoryInner.querySelectorAll(".category")];
}

function getAuthorCounts() {
  const counts = new Map();
  for (const skill of skills) {
    if (activeCategory !== "全部" && skill.category !== activeCategory) continue;
    counts.set(skill.author, (counts.get(skill.author) || 0) + 1);
  }

  return [...counts.entries()]
    .map(([author, count]) => ({ author, count }))
    .sort((a, b) => b.count - a.count || a.author.localeCompare(b.author));
}

function renderAuthorFolders() {
  const folders = getAuthorCounts();
  const total = folders.reduce((sum, folder) => sum + folder.count, 0);
  const isAllActive = activeAuthor === "全部作者";

  authorFolders.innerHTML = [
    `<button class="authorFolder ${isAllActive ? "active" : ""}" data-author="全部作者" type="button">
      <span class="folderIcon"></span>
      <span class="folderName">${escapeHtml(t("allAuthors"))}</span>
      <span class="folderCount">${total}</span>
    </button>`,
    ...folders.map(
      ({ author, count }) => `
        <button class="authorFolder ${activeAuthor === author ? "active" : ""}" data-author="${escapeHtml(author)}" type="button">
          <span class="folderIcon"></span>
          <span class="folderName">${escapeHtml(displayAuthor(author))}</span>
          <span class="folderCount">${count}</span>
        </button>
      `
    )
  ].join("");
}

function renderLibrary() {
  const visible = skills.filter(matchesLibraryFilter);
  skillGrid.innerHTML = visible
    .map(
      (skill) => `
        <article class="card">
          <h3>${escapeHtml(skill.name)}</h3>
          <div class="authorLine">${escapeHtml(displayAuthor(skill.author))}</div>
          <p>${escapeHtml(displayUse(skill))}</p>
          <div class="example"><strong>${escapeHtml(t("exampleLabel"))}</strong>${escapeHtml(stripExampleLabel(displayExample(skill)))}</div>
          <div class="sampleAnswer"><strong>${escapeHtml(t("answerLabel"))}</strong>${escapeHtml(stripAnswerLabel(displayAnswer(skill)))}</div>
          <div class="tagRow">
            <span class="tag">${escapeHtml(categoryLabel(skill.category))}</span>
            ${displayKeywords(skill).map((keyword) => `<span class="tag">${escapeHtml(keyword)}</span>`).join("")}
          </div>
          <div class="cardActions">
            <button class="callButton" data-call="${escapeHtml(skill.name)}" type="button">${escapeHtml(t("call"))}</button>
          </div>
        </article>
      `
    )
    .join("");
}

function findSkill(name) {
  return skills.find((skill) => skill.name === name);
}

function stripAnswerLabel(value) {
  return String(value).replace(/^(回答示例[:：]?|Answer sample:|Answer:)\s*/i, "");
}

function stripExampleLabel(value) {
  return String(value).replace(/^(例如[:：]?|例子[:：]?|Example:)\s*/i, "");
}

function makeCallPrompt(skill) {
  const topic = topicInput.value.trim() || displayExample(skill);
  return `$${skill.name}

${t("taskLabel")}
${stripExampleLabel(topic)}`;
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Some embedded browsers expose the Clipboard API but block it by policy.
      // Fall through to the selection-based copy path.
    }
  }

  callPrompt.value = text;
  callPanel.hidden = false;
  callPrompt.focus();
  callPrompt.select();
  const copied = document.execCommand("copy");
  return copied;
}

async function openCallPanel(skillName) {
  const skill = findSkill(skillName);
  if (!skill) return;

  activeCallSkillName = skill.name;
  activeCallPrompt = makeCallPrompt(skill);
  callSkillName.textContent = skill.name;
  callSkillUse.textContent = displayUse(skill);
  callPrompt.value = activeCallPrompt;
  callPanel.hidden = false;

  try {
    const copied = await copyText(activeCallPrompt);
    showToast(copied ? t("copiedCall") : t("copyBlocked"));
  } catch {
    callPrompt.focus();
    callPrompt.select();
    showToast(t("copyBlocked"));
  }
}

function parseFrontMatter(content) {
  const match = content.match(/^---\s*([\s\S]*?)\s*---/);
  if (!match) return {};

  return match[1].split(/\r?\n/).reduce((meta, line) => {
    const separator = line.indexOf(":");
    if (separator === -1) return meta;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
    if (key) meta[key] = value;
    return meta;
  }, {});
}

function stripFrontMatter(content) {
  return content.replace(/^---\s*[\s\S]*?\s*---/, "").trim();
}

function inferCategory(name, use, source = "") {
  const text = normalize(`${name} ${use}`);
  const sourceText = normalize(source).replaceAll("\\", "/");
  if (/\/github\//.test(sourceText) || /github|pull request|\bpr\b|issue|\bci\b|\brepo\b|repository|代码托管/.test(text)) return "GitHub 协作";
  if (/\/browser\//.test(sourceText) || /\/chrome\//.test(sourceText) || /browser|chrome|playwright|网页自动化|浏览器|点击|截图|navigate|inspect/.test(text)) return "浏览器自动化";
  if (/\/presentations?\//.test(sourceText) || /presentation|slides?|pptx|powerpoint|演示|幻灯片/.test(text)) return "演示文稿";
  if (/\/documents?\//.test(sourceText) || /\/spreadsheets?\//.test(sourceText) || /\/google-drive\//.test(sourceText) || /docs|docx|document|word|sheet|spreadsheet|excel|csv|文档|表格/.test(text)) return "文档表格";
  if (/aihot|ai hot|ai 日报|ai 资讯|ai 圈|ai news|newsletter|日报|资讯|新闻|热点/.test(text)) return "AI 资讯";
  if (/data|dataset|csv|analysis|analytics|chart|visualize|数据|分析|图表/.test(text)) return "数据分析";
  if (/plugin|connector|skill-creator|skill-installer|插件|安装|创建 skill|创建skill/.test(text)) return "插件开发";
  if (/computer-use|filesystem|terminal|powershell|shell|windows|本机|文件|自动化/.test(text)) return "本地自动化";
  if (/design|frontend|ui|web|brand|visual|image-to-code|stitch|minimalist|brutalist|canva|figma|网页|前端|设计|视觉|品牌/.test(text)) return "设计前端";
  if (/video|remotion|seedance|image|card|xhs|小红书|视频|图像|卡片|轮播/.test(text)) return "视频图像";
  if (/perspective|mentor|munger|feynman|jobs|musk|人物|视角|导师/.test(text)) return "人物视角";
  if (/business|diagnosis|decision|benchmark|商业|诊断|决策|对标/.test(text)) return "商业诊断";
  if (/content|writing|title|hook|humanizer|内容|文案|标题|写作|润色/.test(text)) return "内容创作";
  if (/code|coding|programming|react|typescript|javascript|python|api|sdk|debug|工程|代码|编程|开发/.test(text)) return "代码工程";
  return "系统工具";
}

function keywordsFromText(name, use) {
  const latin = normalize(`${name} ${use}`).match(/[a-z0-9+#.]{2,}/g) || [];
  const chineseTerms = `${name} ${use}`
    .split(/[，。、“”‘’：:；;（）()\s/|]+/)
    .filter((term) => /[\u4e00-\u9fff]/.test(term))
    .filter((term) => term.length >= 2 && term.length <= 8);
  return [...new Set([...latin, ...chineseTerms])].slice(0, 8);
}

function buildImportedSkill(file, content) {
  const meta = parseFrontMatter(content);
  const body = stripFrontMatter(content);
  const firstBodyLine = body.split(/\r?\n/).find((line) => line.trim() && !line.trim().startsWith("#")) || "";
  const pathParts = file.webkitRelativePath.split("/");
  const folderName = pathParts.length > 1 ? pathParts[pathParts.length - 2] : file.name.replace(/\.md$/i, "");
  const name = meta.name || folderName;
  const use = meta.description || firstBodyLine.replace(/^[-*>#\s]+/, "").slice(0, 120) || "本机导入的 Codex 技能。";
  const source = file.webkitRelativePath || file.name;
  const category = inferCategory(name, use, source);
  const keywords = keywordsFromText(name, use);
  const author = meta.author || meta.source || inferAuthor(name, use, source);

  return {
    name,
    category,
    use,
    keywords,
    example: `例如：我想用 ${name} 处理一个任务：${use}`,
    sampleAnswer: answerPatterns[category] || "回答示例：输出该技能对应的分析、结果、理由和可执行下一步。",
    author,
    source
  };
}

function normalizeSkillRecord(record) {
  const name = String(record.name || "").trim();
  if (!name) return null;

  const use = String(record.use || record.description || record.summary || "本机导入的 Codex 技能。").trim();
  const source = record.source || record.path || "本机索引";
  const category = record.category || inferCategory(name, use, source);
  const keywords = Array.isArray(record.keywords) && record.keywords.length
    ? record.keywords.map(String).filter(Boolean).slice(0, 10)
    : keywordsFromText(name, use);

  return {
    name,
    category,
    use,
    useEn: record.useEn || record.use_en || record.descriptionEn || record.description_en,
    useZh: record.useZh || record.use_zh || record.descriptionZh || record.description_zh,
    keywords,
    example: record.example || fallbackExample({ name, category }),
    exampleEn: record.exampleEn || record.example_en,
    exampleZh: record.exampleZh || record.example_zh,
    sampleAnswer: record.sampleAnswer || record.sample_answer || localizedAnswerPattern(category),
    sampleAnswerEn: record.sampleAnswerEn || record.sample_answer_en,
    sampleAnswerZh: record.sampleAnswerZh || record.sample_answer_zh,
    author: record.author || record.source_name || inferAuthor(name, use, source),
    source
  };
}

function installSkillRecords(records, status = "loaded") {
  const byName = new Map();
  for (const record of records) {
    const skill = normalizeSkillRecord(record);
    if (skill) byName.set(skill.name, skill);
  }

  if (!byName.size) return 0;

  skills.length = 0;
  skills.push(...[...byName.values()].sort((a, b) => a.name.localeCompare(b.name)));
  activeCategory = "全部";
  activeAuthor = "全部作者";
  localStorage.setItem("skill-selector-imported", JSON.stringify(skills));
  renderRecommendations();
  renderCategoryBar();
  renderAuthorFolders();
  renderLibrary();
  setInventoryStatus(status, skills.length);
  return skills.length;
}

async function importSkillFolder(files) {
  const skillFiles = [...files].filter((file) => /(^|\/)SKILL\.md$/i.test(file.webkitRelativePath || file.name));
  if (!skillFiles.length) {
    showToast(t("noSkillFile"));
    return;
  }

  const imported = [];
  for (const file of skillFiles) {
    const content = await file.text();
    imported.push(buildImportedSkill(file, content));
  }

  const count = installSkillRecords(imported, "manual");
  showToast(t("imported", { count }));
}

function restoreImportedSkills() {
  const cached = localStorage.getItem("skill-selector-imported");
  if (!cached) return 0;

  try {
    const imported = JSON.parse(cached);
    if (!Array.isArray(imported) || !imported.length) return 0;
    skills.length = 0;
    skills.push(...imported);
    skills.forEach((skill) => {
      skill.example ||= `例如：使用 ${skill.name} 处理一个与“${skill.use}”相关的具体任务。`;
      skill.sampleAnswer ||= answerPatterns[skill.category] || "回答示例：输出该技能对应的分析、结果、理由和可执行下一步。";
      skill.author ||= inferAuthor(skill.name, skill.use, skill.source);
    });
    return skills.length;
  } catch {
    localStorage.removeItem("skill-selector-imported");
    return 0;
  }
}

async function fetchSkillIndex(url) {
  const response = await fetch(`${url}${url.includes("?") ? "&" : "?"}t=${Date.now()}`, {
    cache: "no-store"
  });
  if (!response.ok) throw new Error(`Cannot read ${url}`);
  const data = await response.json();
  const records = Array.isArray(data) ? data : data.skills;
  if (!Array.isArray(records) || !records.length) throw new Error(`No skills in ${url}`);
  return records;
}

async function autoInstallLocalSkills({ silent = false } = {}) {
  if (!silent) setInventoryStatus("loading");

  const sources = ["/api/local-skills", "./skills-manifest.json"];
  for (const source of sources) {
    try {
      const records = await fetchSkillIndex(source);
      const count = installSkillRecords(records, "loaded");
      if (count) {
        if (!silent) showToast(t("scanLoaded", { count }));
        return true;
      }
    } catch {
      // Static deployments will not expose a local API. Try the next source.
    }
  }

  setInventoryStatus(skills.length ? "default" : "missing");
  if (!silent) showToast(t("scanMissing"));
  return false;
}

async function installSkillFromInput() {
  const source = installInput.value.trim();
  if (!source) {
    showToast(t("installMissingInput"));
    setInstallStatus("installMissingInput");
    installInput.focus();
    return;
  }

  installButton.disabled = true;
  setInstallStatus("installWorking");
  try {
    const response = await fetch("/api/install-skill", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.ok === false) {
      throw new Error(data.error || `HTTP ${response.status}`);
    }

    const records = Array.isArray(data.skills) ? data.skills : [];
    const count = installSkillRecords(records, "loaded");
    const installed = Array.isArray(data.installed) ? data.installed.length : 0;
    setInstallStatus("installDone", { installed, count });
    showToast(t("installDone", { installed, count }));
    installInput.value = "";
  } catch (error) {
    const message = error?.message || "unknown error";
    setInstallStatus("installFailed", { message });
    showToast(t("installFailed", { message }));
  } finally {
    installButton.disabled = false;
  }
}

topicInput.addEventListener("input", renderRecommendations);
searchInput.addEventListener("input", renderLibrary);
clearButton.addEventListener("click", () => {
  topicInput.value = "";
  topicInput.focus();
  renderRecommendations();
});

recommendations.addEventListener("click", (event) => {
  const button = event.target.closest("[data-call]");
  if (button) openCallPanel(button.dataset.call);
});

skillGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-call]");
  if (button) openCallPanel(button.dataset.call);
});

autoScanButton.addEventListener("click", () => autoInstallLocalSkills({ silent: false }));
importButton.addEventListener("click", () => folderInput.click());
folderInput.addEventListener("change", (event) => importSkillFolder(event.target.files));
installButton.addEventListener("click", installSkillFromInput);
installInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") installSkillFromInput();
});

languageToggle.addEventListener("click", () => {
  language = language === "zh" ? "en" : "zh";
  localStorage.setItem("skill-atlas-language", language);
  applyLanguage();
  renderRecommendations();
  renderAuthorFolders();
  renderLibrary();

  if (!callPanel.hidden && activeCallSkillName) {
    const skill = findSkill(activeCallSkillName);
    if (skill) {
      activeCallPrompt = makeCallPrompt(skill);
      callSkillUse.textContent = displayUse(skill);
      callPrompt.value = activeCallPrompt;
    }
  }
});

copyCallButton.addEventListener("click", async () => {
  try {
    const copied = await copyText(activeCallPrompt || callPrompt.value);
    showToast(copied ? t("copied") : t("copyBlocked"));
  } catch {
    callPrompt.focus();
    callPrompt.select();
    showToast(t("copyBlocked"));
  }
});

closeCallButton.addEventListener("click", () => {
  callPanel.hidden = true;
});

categoryInner.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  if (activeAuthor !== "全部作者" && !skills.some((skill) => skill.author === activeAuthor && (activeCategory === "全部" || skill.category === activeCategory))) {
    activeAuthor = "全部作者";
  }
  renderCategoryBar();
  renderAuthorFolders();
  renderLibrary();
});

authorFolders.addEventListener("click", (event) => {
  const button = event.target.closest("[data-author]");
  if (!button) return;
  activeAuthor = button.dataset.author;
  renderAuthorFolders();
  renderLibrary();
});

const initialTopic = new URLSearchParams(window.location.search).get("q");
if (initialTopic) {
  topicInput.value = initialTopic;
}

function initialize() {
  const restoredCount = restoreImportedSkills();
  applyLanguage();
  setInventoryStatus(restoredCount ? "manual" : "default", restoredCount || "");
  renderRecommendations();
  renderAuthorFolders();
  renderLibrary();
  autoInstallLocalSkills({ silent: true });
}

initialize();
