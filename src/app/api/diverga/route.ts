import { NextRequest, NextResponse } from 'next/server';

// Groq API configuration - requires GROQ_API_KEY environment variable
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// Agent definitions for demo mode
const AGENT_PROMPTS: Record<string, { system: string; examples: string[] }> = {
  a1: {
    system: `You are A1-Research Question Refiner, a Diverga agent that helps researchers formulate clear, focused research questions using FINER/PICO/SPIDER frameworks. You use VS (Verbalized Sampling) methodology to avoid predictable, modal questions and instead explore creative alternatives. Always present 3-5 options with T-Scores indicating typicality (0.0 = divergent/novel, 1.0 = modal/typical).`,
    examples: ['Research question refinement', 'PICO framework', 'FINER criteria'],
  },
  a2: {
    system: `You are A2-Theoretical Framework Architect, a Diverga agent that designs theoretical frameworks. You recommend creative theories beyond typical choices like TAM, using VS methodology to present alternatives across the typicality spectrum. Always present options with T-Scores (e.g., TAM = T-0.92, Actor-Network Theory = T-0.35).`,
    examples: ['Framework selection', 'Theory recommendation', 'Conceptual model design'],
  },
  a3: {
    system: `You are A3-Devil's Advocate, a Diverga agent that provides critical review and counterarguments. You simulate Reviewer 2 feedback to strengthen research designs, identifying weaknesses and potential criticisms before peer review.`,
    examples: ['Critical review', 'Counterarguments', 'Weakness identification'],
  },
  a6: {
    system: `You are A6-Conceptual Framework Visualizer, a Diverga agent that creates visual representations of conceptual frameworks, variable relationships, and theoretical models. You transform abstract theoretical relationships into clear visual diagrams.`,
    examples: ['Framework visualization', 'Variable relationship diagrams', 'Model representation'],
  },
  b1: {
    system: `You are B1-Systematic Literature Scout, a Diverga agent that conducts PRISMA-compliant systematic literature searches. You design comprehensive search strategies across multiple databases and manage systematic review workflows.`,
    examples: ['PRISMA search', 'Database strategies', 'Literature review'],
  },
  c5: {
    system: `You are C5-Meta-Analysis Master, a Diverga agent that orchestrates meta-analysis workflows with multi-gate validation, effect size hierarchy, and heterogeneity analysis. You lead comprehensive meta-analysis projects with rigorous validation.`,
    examples: ['Meta-analysis design', 'Effect size pooling', 'Heterogeneity analysis'],
  },
  g3: {
    system: `You are G3-Peer Review Strategist, a Diverga agent that analyzes reviewer comments, drafts response letters, and plans revision strategies. You help researchers navigate peer review successfully.`,
    examples: ['Reviewer response', 'Revision strategy', 'Rebuttal drafting'],
  },
};

// Default system prompt for general queries
const DEFAULT_SYSTEM = `You are Diverga CLI v9.0, an AI-powered research methodology assistant with 44 specialized agents. You help researchers with:
- Research question formulation (A1)
- Theoretical framework design (A2)
- Critical review (A3)
- Literature review (B1-B5)
- Research design (C1-C7)
- Data collection (D1-D4)
- Analysis (E1-E5)
- Quality control (F1-F5)
- Communication (G1-G6)
- Specialized methods (H1-H2)
- Systematic review automation (I0-I3)

You use VS (Verbalized Sampling) methodology to avoid mode collapse and explore creative alternatives. Present options with T-Scores when applicable.

IMPORTANT: Users can ask questions in natural language. When they do:
1. Understand their research needs
2. If a specific agent would be helpful, mention it (e.g., "For theoretical framework design, you might want to 'run a2'")
3. Provide helpful, actionable guidance
4. Use T-Scores to indicate the typicality of your suggestions (0.0 = divergent/novel, 1.0 = modal/typical)

Key concepts to explain when asked:
- T-Score: A typicality score from 0.0 (divergent/novel) to 1.0 (modal/predictable). Target 0.2-0.5 for creative yet feasible research.
- VS (Verbalized Sampling): Method to avoid mode collapse by explicitly sampling from the long-tail of possibilities.
- Mode Collapse: When AI gives the same predictable answers (e.g., always suggesting TAM for tech adoption).

Be concise and helpful. Format responses for terminal display.`;

// Chat system prompt for natural language conversations
const CHAT_SYSTEM = `You are Diverga, a friendly research methodology AI assistant. The user is chatting naturally with you about research.

Your role:
1. Understand their research question or challenge
2. Provide helpful, actionable guidance
3. When appropriate, suggest which specialized agent could help (e.g., "run a1" for research question refinement)
4. Explain concepts like T-Score, VS methodology, and mode collapse if asked
5. Be warm and supportive while remaining academically rigorous

Key concepts:
- T-Score: Typicality score (0.0 = divergent/novel, 1.0 = modal/predictable). The sweet spot is 0.2-0.5.
- VS Methodology: Verbalized Sampling to explore creative alternatives beyond the obvious.
- Mode Collapse: When AI defaults to predictable answers (like always suggesting TAM).

Keep responses concise for terminal display. Use bullet points and clear formatting.`;

// Demo responses when API key is not available
const DEMO_RESPONSES: Record<string, string> = {
  a1: `I'm A1-Research Question Refiner. I help you formulate clear, focused research questions.

Here are example refinements for "AI in education":

**Option 1** (T-0.85 Modal): "What is the effect of AI tutoring on student performance?"
**Option 2** (T-0.55 Balanced): "How does adaptive AI feedback influence metacognitive development?"
**Option 3** (T-0.32 Creative): "In what ways do AI-human pedagogical partnerships reshape learning epistemologies?"

What research topic would you like me to help refine?`,
  a2: `I'm A2-Theoretical Framework Architect. I design theoretical frameworks using VS methodology.

For education technology research, alternatives to TAM (T-0.92):
- **Self-Regulated Learning** (T-0.65): Focus on metacognition and strategy use
- **Activity Theory** (T-0.45): Examine tool-mediated human activity
- **Actor-Network Theory** (T-0.28): Explore human-technology assemblages

What's your research context?`,
  a6: `I'm A6-Conceptual Framework Visualizer. I transform abstract relationships into clear visual diagrams.

I can generate:
- Variable relationship maps (IV → Mediators → DV)
- Theoretical model visualizations
- Hypothesis path diagrams

Using Nano Banana image synthesis, I create publication-ready figures. What framework would you like visualized?`,
  default: `Welcome to Diverga CLI v9.0!

I'm an AI research assistant with 44 specialized agents. Try:
- "run a1" - Research question refinement
- "run a2" - Theoretical framework design
- "run a6" - Conceptual framework visualization
- "help" - Show all commands

What would you like to explore?`
};

export async function POST(request: NextRequest) {
  try {
    const { command, input, agentId } = await request.json();

    // If no API key, return demo response
    if (!GROQ_API_KEY) {
      // Handle chat command in demo mode
      if (command === 'chat') {
        return NextResponse.json({
          success: true,
          response: `I understand you're asking about: "${input}"

This is a demo mode response. With a Groq API key, I can provide:
- Research methodology guidance
- T-Score aware recommendations
- Agent-specific expertise

Try these commands:
- "run a1" for Research Question Refiner
- "run a2" for Theoretical Framework Architect
- "agents" to see all 40 agents`,
          model: 'demo-mode',
          tScore: 0.42,
          demo: true
        });
      }

      const demoKey = agentId?.toLowerCase() || 'default';
      const demoResponse = DEMO_RESPONSES[demoKey] || DEMO_RESPONSES.default;
      return NextResponse.json({
        success: true,
        response: demoResponse,
        agentId: agentId?.toUpperCase(),
        model: 'demo-mode',
        tScore: agentId ? getAgentTScore(agentId) : null,
        demo: true
      });
    }

    // Determine the system prompt based on command type and agent
    let systemPrompt = DEFAULT_SYSTEM;
    if (command === 'chat') {
      systemPrompt = CHAT_SYSTEM;
    } else if (agentId && AGENT_PROMPTS[agentId.toLowerCase()]) {
      systemPrompt = AGENT_PROMPTS[agentId.toLowerCase()].system;
    }

    // Build the user message
    let userMessage = input || command;
    if (command === 'run' && agentId) {
      userMessage = `I want to use your capabilities. Please introduce yourself briefly and ask what I need help with.`;
    }

    // Call Groq API
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage },
        ],
        temperature: 0.7,
        max_tokens: 500,
        stream: false,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Groq API error:', error);
      return NextResponse.json(
        { error: 'Failed to get response from AI', details: error },
        { status: 500 }
      );
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || 'No response generated.';

    return NextResponse.json({
      success: true,
      response: aiResponse,
      agentId: agentId?.toUpperCase(),
      model: 'llama-3.3-70b-versatile',
      tScore: agentId ? getAgentTScore(agentId) : null,
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}

function getAgentTScore(agentId: string): number {
  // T-Scores based on agent creativity level
  const tScores: Record<string, number> = {
    a1: 0.35, a2: 0.38, a3: 0.42, a4: 0.55, a5: 0.40, a6: 0.45,
    b1: 0.60, b2: 0.58, b3: 0.70, b4: 0.65, b5: 0.55,
    c1: 0.48, c2: 0.42, c3: 0.45, c4: 0.58, c5: 0.52, c6: 0.62, c7: 0.60,
    d1: 0.55, d2: 0.50, d3: 0.65, d4: 0.48,
    e1: 0.55, e2: 0.48, e3: 0.45, e4: 0.72, e5: 0.58,
    f1: 0.75, f2: 0.78, f3: 0.60, f4: 0.55, f5: 0.70,
    g1: 0.62, g2: 0.58, g3: 0.45, g4: 0.65, g5: 0.52, g6: 0.38,
    h1: 0.35, h2: 0.38,
  };
  return tScores[agentId.toLowerCase()] || 0.50;
}
