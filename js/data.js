// ============================================================
//  SITE CONTENT — edit this file to update the whole website.
//  Add a blog post: append an object to `posts` (newest first).
//  Fields: id, title, description, content (markdown), tags,
//          date, readTime, image, accent, emoji
// ============================================================

const SITE = {
  "profile": {
    "name": "Ryan Zhou",
    "monogram": "RZ",
    "tagline": "Product builder, AI tinkerer & food explorist.",
    "roles": [
      "Product Builder",
      "AI Product Manager",
      "Food Explorist",
      "World Traveler",
      "Creator-Economy Nerd"
    ],
    "bio": "Hey, I'm Ryan — UC Berkeley & University of Michigan graduate, an all-round PM builder and food explorist. Two years in product across Tiger Securities, TikTok, and a leading AI startup. Curious and hungry about everything — products, people, and the next great bowl of noodles.",
    "location": "Probably near good food",
    "email": "ryanchou66@gmail.com",
    "socials": {
      "github": "https://github.com/ryanchou24",
      "twitter": "https://twitter.com/ryanchou24",
      "linkedin": "https://www.linkedin.com/in/zhongxing-zhou/"
    }
  },
  "experience": [
    {
      "company": "Asurion",
      "role": "AI Integration — Product",
      "period": "2024",
      "accent": "violet",
      "blurb": "Helped weave LLM-powered intelligence into customer-support systems serving millions of users.",
      "tags": [
        "AI",
        "LLM",
        "Customer Support"
      ],
      "post": "asurion-ai-integration"
    },
    {
      "company": "Stealth AI Startup",
      "role": "AI Product Manager",
      "period": "2023 — 2024",
      "accent": "blue",
      "blurb": "Early PM at a stealth consumer-AI startup led by Musical.ly's founder — shipping AI-driven engagement features from zero.",
      "tags": [
        "Consumer AI",
        "0 → 1",
        "Growth"
      ],
      "post": "stealth-startup-journey"
    },
    {
      "company": "TikTok",
      "role": "Product Manager — Creator Academy",
      "period": "2023",
      "accent": "cyan",
      "blurb": "Built education tools that empower millions of creators worldwide during hyper-growth.",
      "tags": [
        "Creator Economy",
        "EdTech",
        "Scale"
      ],
      "post": "tiktok-experience"
    },
    {
      "company": "Tiger Securities",
      "role": "Product Manager",
      "period": "2022",
      "accent": "amber",
      "blurb": "First PM chapter — learning to ship fast in fintech, where precision is the product.",
      "tags": [
        "Fintech",
        "Trading",
        "Mobile"
      ],
      "post": null
    }
  ],
  "posts": [
    {
      "id": "egypt-adventure",
      "title": "Lost in Time: My Ancient Egyptian Adventure",
      "description": "From the bustling streets of Cairo to the mystical pyramids of Giza - a journey through Egypt that changed my perspective on history and innovation.",
      "content": "There's something magical about standing before structures that have witnessed 4,500 years of human history. My recent trip to Egypt wasn't just a vacation - it was a pilgrimage through time itself.\n\n## The Moment Everything Changed\n\nPicture this: 5:30 AM, desert wind cutting through the morning chill, and there I was - face to face with the Great Pyramid of Giza. As a tech enthusiast who spends most days thinking about the future, being confronted with humanity's ancient engineering marvels was absolutely mind-blowing.\n\n## Beyond the Tourist Trail\n\nWhile everyone rushes to check the pyramids off their bucket list, I found the real magic in unexpected places:\n\n**The Khan el-Khalili Bazaar at midnight** - Negotiating for handcrafted artifacts while sipping mint tea with locals who've been running family businesses for generations. Their entrepreneurial spirit reminded me that innovation isn't just about Silicon Valley.\n\n**Sailing the Nile at sunset** - No Instagram filter needed. Just pure, unfiltered beauty that made me question why I spend so much time staring at screens.\n\n**The forgotten tombs of Saqqara** - Less crowded than Giza, but equally incredible. Standing in chambers where ancient Egyptians perfected their craft felt like visiting humanity's first R&D lab.\n\n## Tech Meets Ancient Innovation\n\nAs someone who works in product management, I couldn't help but marvel at the ancient Egyptians' approach to problem-solving. They were essentially the world's first systems engineers - designing complex irrigation networks, creating the world's first paper (papyrus), and building structures that still baffle modern architects.\n\nThe hieroglyphs? They invented one of humanity's first information storage systems. Talk about data persistence!\n\n## The Real Treasure\n\nBeyond the pyramids and pharaohs, Egypt taught me that the most profound innovations often come from understanding the past. Every line of code I write, every product feature I design - it's all part of humanity's continuous evolution of solving problems and creating better experiences.\n\n**Fun fact**: Did you know the ancient Egyptians invented the 365-day calendar? They were basically debugging time itself.\n\n## What's Next?\n\nThis trip sparked my interest in exploring how ancient civilizations approached innovation. Next up: possibly Japan to study the intersection of traditional craftsmanship and modern technology, or maybe Peru to understand how the Incas built their engineering marvels without wheels or written language.\n\n---\n\n**Fellow travelers and history buffs**, what destinations have changed your perspective on innovation and human achievement? Drop me a line - I'd love to hear your stories!",
      "tags": [
        "Travel",
        "Egypt",
        "History"
      ],
      "date": "October 9, 2024",
      "readTime": "2 minute read",
      "image": "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=600&fit=crop",
      "accent": "amber",
      "emoji": "🏜️"
    },
    {
      "id": "asurion-ai-integration",
      "title": "Integrating AI at Asurion – My Recent Experience",
      "description": "Reflecting on my recent work at Asurion, where I helped integrate AI technologies into their customer support systems to serve millions of users.",
      "content": "When I joined Asurion's AI initiative, I knew we were tackling something ambitious: transforming customer support for millions of users through intelligent automation. But I didn't realize just how complex - and rewarding - this journey would be.\n\n## The Challenge\n\nAsurion handles millions of customer support requests annually across device protection, tech support, and insurance claims. The challenge wasn't just implementing AI - it was doing it in a way that actually improved the customer experience rather than creating frustration.\n\n## Starting with Empathy\n\nBefore writing a single line of code or training any models, our team spent weeks just listening to customer calls and reading support tickets. We discovered something crucial: customers don't want to talk to AI. They want their problems solved quickly and accurately.\n\nThis insight completely changed our approach.\n\n## The Three-Layer Architecture\n\nWe built a system that works like a skilled support team:\n\n**Layer 1: Intent Recognition** - Natural language processing that actually understands context. Not just keyword matching, but genuine comprehension of what customers need.\n\n**Layer 2: Smart Routing** - Machine learning models that determine whether AI can handle the request or if it needs human expertise. The key? Being honest about AI's limitations.\n\n**Layer 3: Continuous Learning** - Every interaction feeds back into the system. When AI gets it wrong, we learn. When humans solve tricky problems, AI learns from that too.\n\n## The Results That Matter\n\nAfter six months of iteration:\n\n- **40% reduction in average response time** - Customers get help faster\n- **25% improvement in first-contact resolution** - Problems solved on the first try\n- **90% customer satisfaction rating** - People are actually happy with the experience\n- **Zero job losses** - AI augmented our team, didn't replace them\n\n## What I Learned\n\n**AI is a tool, not a solution.** The technology is impressive, but it's useless without understanding the human problem you're solving.\n\n**Data quality matters more than model complexity.** We spent more time cleaning and labeling data than tuning hyperparameters. It was worth it.\n\n**Transparency builds trust.** We're upfront when customers are talking to AI. Surprisingly, most people don't mind - as long as it works.\n\n**The best AI is invisible.** When customers stop noticing they're being helped by AI because the experience is seamless, you've succeeded.\n\n## The Future\n\nWe're now exploring:\n- Predictive support (solving problems before customers know they have them)\n- Multilingual support without language barriers\n- Emotional intelligence in AI responses\n\nThe goal isn't to replace human empathy - it's to scale it.\n\n---\n\n**For fellow product managers and AI enthusiasts**: What's your experience with AI in customer-facing applications? I'd love to compare notes!",
      "tags": [
        "Machine Learning",
        "AI",
        "Customer Support"
      ],
      "date": "October 8, 2024",
      "readTime": "2 minute read",
      "image": "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
      "accent": "violet",
      "emoji": "🤖"
    },
    {
      "id": "travel-journey",
      "title": "Check Out My Travel Journey",
      "description": "Follow along on my latest travel adventures and experiences around the world, from ancient temples to modern tech hubs.",
      "content": "Travel isn't just about visiting new places - it's about collecting perspectives that reshape how you see the world. Here's why I believe every product manager, developer, and entrepreneur should be a traveler.\n\n## Why I Travel\n\n**For User Research** - Want to understand mobile-first markets? Go to Southeast Asia. Curious about privacy-conscious users? Spend time in Europe. Every region teaches you something about how people interact with technology.\n\n**For Inspiration** - Some of my best product ideas came while wandering through markets in Marrakech, not sitting in conference rooms.\n\n**For Empathy** - You can't build products for global users if you've only experienced one culture.\n\n## Recent Adventures\n\n### Japan: Where Tradition Meets Innovation\n\nKyoto's temples taught me about attention to detail and long-term thinking. Tokyo's tech scene showed me how to blend cutting-edge innovation with respect for tradition.\n\n**Key takeaway**: The best products honor the past while building the future.\n\n### Singapore: The Smart City Laboratory\n\nWatching how Singapore uses technology for urban planning, public services, and daily life was like seeing the future of civic tech.\n\n**Key takeaway**: Good design is invisible - it just works.\n\n### Istanbul: The Bridge Between Worlds\n\nStanding where Europe meets Asia, I realized that the best innovations often come from combining different perspectives.\n\n**Key takeaway**: Cross-cultural thinking leads to breakthrough ideas.\n\n## Travel as Professional Development\n\nPeople ask why I \"waste\" vacation time on work-related observations. But here's the thing - when you love what you do, everything becomes research.\n\nEvery taxi ride is a UX study. Every hotel check-in is a service design analysis. Every local app I download is a competitive analysis opportunity.\n\n## Next Destinations\n\n**South America** - Exploring startup ecosystems in São Paulo and Buenos Aires. How do entrepreneurs innovate with limited resources?\n\n**Nordic Countries** - Studying Scandinavian design philosophy and work-life balance. What can we learn about sustainable innovation?\n\n**Africa** - Understanding mobile money and leapfrog technology adoption. How do you build products when infrastructure is limited?\n\n## Tips for Traveling Product People\n\n1. **Use local apps** - Don't just use Google Maps. Download whatever locals use.\n2. **Talk to everyone** - Taxi drivers, shopkeepers, students. They're your user research participants.\n3. **Document patterns** - Take photos of interesting UX, service design, or business models.\n4. **Stay in neighborhoods, not tourist areas** - You want to see how people actually live.\n5. **Learn basic phrases** - Shows respect and opens doors.\n\n## The ROI of Travel\n\nEvery trip has made me a better product manager:\n- Egypt taught me about timeless design principles\n- Japan showed me the value of craftsmanship\n- Singapore demonstrated the power of systems thinking\n- India revealed the importance of designing for constraints\n\n---\n\n**Where should I go next?** Drop your recommendations - especially if you think there's something I need to see to become a better builder!",
      "tags": [
        "Travel",
        "Adventure",
        "Exploration"
      ],
      "date": "September 12, 2024",
      "readTime": "1 minute read",
      "image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      "accent": "rose",
      "emoji": "🌏"
    },
    {
      "id": "stealth-startup-journey",
      "title": "My Journey in the Stealth Startup Led by Musical.ly's Founder",
      "description": "Reflecting on my experience as an AI Product Manager at a stealth startup focused on enhancing user engagement with AI-driven features.",
      "content": "When you get a chance to work with someone who built one of the most successful social apps in history, you don't ask questions - you just say yes. Here's what I learned working at a stealth startup led by Musical.ly's founder.\n\n## The Opportunity\n\nThe email was cryptic: \"We're building the next generation of social engagement. Can't say more. Interested?\"\n\nThree interviews later, I was in. The mission: use AI to fundamentally change how people create and share content online.\n\n## What \"Stealth Mode\" Really Means\n\nStealth mode sounds cool, but in reality, it means:\n- You can't tell your friends what you're working on\n- Every demo is behind locked doors\n- Your LinkedIn just says \"Stealth Startup\"\n- You become really good at dodging questions at parties\n\nBut it also means:\n- Moving fast without public scrutiny\n- Taking risks without worrying about press coverage\n- Iterating wildly without defending every decision\n- Building something truly innovative\n\n## The Founder's Approach\n\nWorking with someone who's already built a billion-dollar company is humbling. Here's what stood out:\n\n**User obsession to an extreme** - We'd spend hours debating a single interaction. Not because we were indecisive, but because we knew small details compound into big differences.\n\n**Data-driven intuition** - Every gut feeling was validated with data. Every data insight was questioned with intuition.\n\n**Speed as a feature** - In a startup, being 80% right today beats being 100% right next month.\n\n## The AI Challenge\n\nOur goal was ambitious: make AI-powered content creation feel magical, not mechanical.\n\nThe problem? Most AI tools feel like tools. We wanted to build something that felt like a creative partner.\n\n### What We Built\n\nI can't share specifics (NDA life), but I can share the principles:\n\n**Invisible AI** - The best AI is the kind users don't think about. It just makes their content better.\n\n**Personalization at scale** - Every user should feel like the app was built just for them.\n\n**Creative amplification** - AI should enhance human creativity, not replace it.\n\n## Key Learnings\n\n### 1. Product-Market Fit is Everything\n\nWe killed three major features that took months to build because users didn't care. It hurt, but it was necessary.\n\n### 2. Team Matters More Than Ideas\n\nIdeas are cheap. Execution is hard. Having a team that can move fast and adapt quickly is everything.\n\n### 3. User Testing Beats Internal Debates\n\nWe wasted weeks debating feature designs internally. Then we'd show it to users and realize we were all wrong.\n\n### 4. Build for Retention, Not Acquisition\n\nViral growth is great, but if users don't stick around, you're just filling a leaky bucket.\n\n## The Metrics That Mattered\n\n- **Day 1 Retention**: Did users come back tomorrow?\n- **Time to First Value**: How quickly did users \"get it\"?\n- **Content Creation Rate**: Were users actually creating, or just consuming?\n- **Organic Sharing**: Were users sharing because we asked, or because they wanted to?\n\n## What's Next?\n\nWhile I can't share if we achieved product-market fit or when we're launching, I can say this: the experience taught me more about product management than any course or book ever could.\n\nWorking in stealth mode, with a world-class founder, on cutting-edge AI technology - it's the kind of opportunity that defines a career.\n\n---\n\n**For aspiring PMs**: If you get a chance to work at an early-stage startup with a proven founder, take it. The learning curve is steep, but the growth is exponential.",
      "tags": [
        "AI",
        "Product Management",
        "Startups"
      ],
      "date": "March 10, 2024",
      "readTime": "2 minute read",
      "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      "accent": "blue",
      "emoji": "🚀"
    },
    {
      "id": "tiktok-experience",
      "title": "My Experience at TikTok",
      "description": "A deep dive into my role as a Product Manager at TikTok, focusing on the Creator Academy and building tools that empower millions of creators worldwide.",
      "content": "Joining TikTok during its explosive growth phase was like jumping onto a rocket ship mid-launch. Here's what I learned building products for millions of creators.\n\n## The Scale Hit Me Immediately\n\nDay one: \"Your features will reach 100 million creators.\"\n\nMe: \"Wait, what?\"\n\nAt most companies, you dream of that kind of reach. At TikTok, it's just Tuesday.\n\n## My Mission: Creator Academy\n\nI led product development for TikTok's Creator Academy - essentially a university for content creators. The goal? Help creators succeed, which in turn makes the platform better for everyone.\n\n### The Challenge\n\nCreators ranged from teenagers making dance videos to professional filmmakers. How do you build educational content that serves everyone?\n\nAnswer: You don't. You personalize.\n\n## What We Built\n\n### 1. Personalized Learning Paths\n\nNot everyone needs the same education. A new creator needs basics. An established creator needs advanced strategies.\n\nWe built an AI-powered system that:\n- Assessed creator skill level\n- Identified content gaps\n- Recommended relevant courses\n- Adapted based on progress\n\n### 2. Creator Analytics Dashboard\n\nCreators were flying blind. They'd post content and hope for the best.\n\nWe gave them:\n- Real-time performance metrics\n- Audience demographics\n- Content optimization suggestions\n- Trend predictions\n- Best posting times\n\nThe goal: turn gut feeling into data-driven decisions.\n\n### 3. Community Features\n\nLearning alone is hard. Learning together is powerful.\n\nWe launched:\n- Creator forums\n- Mentorship programs\n- Collaboration tools\n- Success story showcases\n\n### 4. Certification Programs\n\nWe created official TikTok Creator Certifications. Completing courses earned badges, which:\n- Boosted creator credibility\n- Unlocked platform features\n- Provided networking opportunities\n\n## The Impact\n\nAfter 12 months:\n- **2M+ creators** engaged with Academy content\n- **40% increase** in creator retention\n- **3x growth** in certified creators\n- **Positive feedback** from 85% of users\n\nBut the real impact? Seeing creators turn their passion into careers.\n\n## What I Learned\n\n### 1. Creators are Entrepreneurs\n\nThey're not just making videos - they're building businesses. Our tools needed to reflect that.\n\n### 2. Education Needs to be Entertaining\n\nOn a platform built for entertainment, boring educational content doesn't work. We made learning fun.\n\n### 3. Community Beats Content\n\nThe best resource wasn't our courses - it was connecting creators with each other.\n\n### 4. Platform Health Depends on Creator Success\n\nWhen creators succeed, they make better content. Better content attracts more users. More users attract more creators. It's a virtuous cycle.\n\n## The Challenges\n\n**Scale** - Building for millions means every bug affects thousands of people.\n\n**Diversity** - Creators span every age, country, and content type. One-size-fits-all doesn't work.\n\n**Rapid Change** - The platform evolved weekly. Our education needed to keep pace.\n\n**Misinformation** - We had to combat bad advice while promoting good practices.\n\n## Favorite Moments\n\n- Seeing a creator's \"aha moment\" when they understood the algorithm\n- Reading messages from creators who quit their jobs to create full-time\n- Watching certified creators mentor newcomers\n- Launching features that creators had been requesting for months\n\n## What's Next for Creator Tools?\n\nThe future of creator platforms isn't just about better editing tools or more filters. It's about:\n\n**AI-powered creativity** - Tools that help creators ideate, not just execute\n\n**Sustainable monetization** - Helping creators build stable incomes\n\n**Mental health support** - Creating is hard; we need to support creator wellbeing\n\n**Cross-platform success** - Helping creators build audiences beyond one platform\n\n---\n\n**For aspiring product managers**: If you get a chance to work on creator tools, take it. You're not just building software - you're empowering people to share their voice with the world.",
      "tags": [
        "Product Management",
        "TikTok",
        "Creator Economy"
      ],
      "date": "September 15, 2023",
      "readTime": "2 minute read",
      "image": "/assets/img/tiktok-logo.png",
      "accent": "violet",
      "emoji": "🎵"
    },
    {
      "id": "workflow-tips",
      "title": "10 Tips to Improve Your Workflow",
      "description": "Practical, battle-tested strategies for improving productivity in software development and product management, learned from years in fast-paced tech environments.",
      "content": "After years of working in fast-paced startups and big tech, I've learned that productivity isn't about working harder - it's about working smarter. Here are the 10 strategies that actually work.\n\n## 1. Time Block Your Calendar (Seriously)\n\nEveryone says this, but few people do it right.\n\n**The wrong way**: Blocking off \"focus time\"\n\n**The right way**: Specific blocks for specific types of work:\n- 9-11 AM: Deep work (coding, writing, strategic thinking)\n- 11-12 PM: Meetings and collaboration\n- 1-2 PM: Communication (emails, Slack, quick calls)\n- 2-4 PM: Deep work round two\n- 4-5 PM: Planning and admin\n\nWhy it works: Your brain doesn't have to context switch between different types of thinking.\n\n## 2. The Two-Minute Rule\n\nIf something takes less than two minutes, do it immediately.\n\nThis prevents small tasks from piling up into an overwhelming to-do list. Reply to that email. File that document. Send that Slack message.\n\n**But beware**: Don't let two-minute tasks interrupt deep work. Batch them during your communication blocks.\n\n## 3. Embrace Async Communication\n\nNot everything needs a meeting. Not everything needs an immediate response.\n\n**Use async for**:\n- Status updates (Loom videos instead of standups)\n- Documentation (Notion instead of explaining repeatedly)\n- Quick questions (Slack instead of calendar invites)\n\n**Use sync for**:\n- Brainstorming\n- Conflict resolution\n- Complex discussions\n- Building relationships\n\n## 4. Build a Second Brain\n\nYour brain is for thinking, not storing.\n\nI use Notion to:\n- Capture ideas immediately\n- Organize knowledge by project\n- Link related concepts\n- Build a personal knowledge base\n\nThe goal: Never lose a good idea. Never forget important information.\n\n## 5. Automate Repetitive Tasks\n\nIf you do something more than twice, automate it.\n\n**My automation stack**:\n- Keyboard shortcuts (Alfred on Mac, custom shortcuts everywhere)\n- Scripts for common operations\n- Templates for recurring work\n- CI/CD pipelines for deployment\n\nTime invested in automation pays dividends forever.\n\n## 6. Practice Deep Work\n\nCal Newport was right: the ability to focus without distraction is becoming rare and valuable.\n\n**My deep work protocol**:\n- Phone on airplane mode\n- Slack closed\n- Email closed\n- Website blockers active\n- Noise-canceling headphones on\n- 90-minute focused sessions\n\nI get more done in one deep work session than most people do in a day.\n\n## 7. Regular Retrospectives\n\nEvery Friday, I spend 30 minutes reviewing my week:\n\n**What went well?**\n- Celebrate wins\n- Identify what to do more of\n\n**What didn't go well?**\n- Diagnose problems\n- Plan improvements\n\n**What will I change next week?**\n- Specific, actionable changes\n\nThis simple practice compounds into massive improvement over time.\n\n## 8. Maintain a \"Stop Doing\" List\n\nYour to-do list tells you what to do. Your stop-doing list tells you what to quit.\n\n**My stop-doing list includes**:\n- Meetings with no agenda\n- Projects with no clear owner\n- Tasks that don't align with goals\n- Perfectionism on low-impact work\n\nSaying no is a superpower.\n\n## 9. Invest in Your Tools\n\nQuality tools pay for themselves.\n\n**Worth the money**:\n- Fast computer with lots of RAM\n- Second (or third) monitor\n- Ergonomic keyboard and mouse\n- Quality headphones\n- Standing desk\n- Premium software subscriptions\n\nYour tools are your leverage. Don't cheap out.\n\n## 10. Protect Your Energy\n\nProductivity isn't just about time management - it's about energy management.\n\n**Energy protection strategies**:\n- Exercise daily (even just a walk)\n- Sleep 7-8 hours\n- Say no to non-essential commitments\n- Build buffer time between meetings\n- Take real breaks (not scrolling social media)\n- Disconnect after work hours\n\nYou can't pour from an empty cup.\n\n## The Meta-Tip\n\nProductivity is personal. What works for me might not work for you.\n\nThe key is to:\n1. Try different strategies\n2. Measure what works\n3. Double down on what's effective\n4. Discard what isn't\n\nTreat your productivity system like a product: iterate based on data.\n\n---\n\n**What are your productivity hacks?** I'm always looking to learn new strategies. Drop your best tips in the comments!",
      "tags": [
        "Productivity",
        "Workflow",
        "Tips"
      ],
      "date": "September 12, 2017",
      "readTime": "2 minute read",
      "image": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      "accent": "cyan",
      "emoji": "⚡"
    }
  ]
};
