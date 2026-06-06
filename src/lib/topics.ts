export const topics = {
  agentic: { key: 'agentic', label: 'Agentisches Engineering' },
  devex: { key: 'devex', label: 'Developer Experience' },
  leadership: { key: 'leadership', label: 'Führung' },
  esports: { key: 'esports', label: 'Esports' },
  reflection: { key: 'reflection', label: 'Selbstreflexion' },
} as const;

export type TopicKey = keyof typeof topics;

export const topicOrder = [
  'agentic',
  'devex',
  'leadership',
  'esports',
  'reflection',
] as const satisfies readonly TopicKey[];

export function getTopicLabel(topic: TopicKey) {
  return topics[topic].label;
}
