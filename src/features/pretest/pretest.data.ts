export interface PretestOption {
  emoji: string;
  label: string;
  value: number;
}

export interface PretestQuestion {
  id: string;
  text: string;
  options: PretestOption[];
}

export const PRETEST_QUESTIONS: PretestQuestion[] = [
  {
    id: '1',
    text: 'Eu consigo identificar claramente o que estou sentindo, mesmo em momentos difíceis.',
    options: [
      { emoji: '😶', label: 'Completamente falso', value: 1 },
      { emoji: '🙁', label: 'Falso na maioria das vezes', value: 2 },
      { emoji: '😕', label: 'Um pouco verdadeiro', value: 3 },
      { emoji: '🙂', label: 'Moderadamente verdadeiro', value: 4 },
      { emoji: '😄', label: 'Verdadeiro na maioria das vezes', value: 5 },
      { emoji: '✨', label: 'Descreve-me perfeitamente', value: 6 },
    ],
  },
  {
    id: '2',
    text: 'Quando algo dá errado, consigo lidar com a situação sem perder totalmente o controle emocional.',
    options: [
      { emoji: '😶', label: 'Completamente falso', value: 1 },
      { emoji: '🙁', label: 'Falso na maioria das vezes', value: 2 },
      { emoji: '😕', label: 'Um pouco verdadeiro', value: 3 },
      { emoji: '🙂', label: 'Moderadamente verdadeiro', value: 4 },
      { emoji: '😄', label: 'Verdadeiro na maioria das vezes', value: 5 },
      { emoji: '💪', label: 'Descreve-me perfeitamente', value: 6 },
    ],
  },
  {
    id: '3',
    text: 'Eu costumo reservar um tempo para refletir sobre minhas atitudes e decisões.',
    options: [
      { emoji: '🙈', label: 'Completamente falso', value: 1 },
      { emoji: '😐', label: 'Falso na maioria das vezes', value: 2 },
      { emoji: '🤔', label: 'Um pouco verdadeiro', value: 3 },
      { emoji: '🙂', label: 'Moderadamente verdadeiro', value: 4 },
      { emoji: '🧠', label: 'Verdadeiro na maioria das vezes', value: 5 },
      { emoji: '🔍', label: 'Descreve-me perfeitamente', value: 6 },
    ],
  },
  {
    id: '4',
    text: 'Consigo dizer “não” quando algo ultrapassa meus limites pessoais.',
    options: [
      { emoji: '😣', label: 'Completamente falso', value: 1 },
      { emoji: '🙁', label: 'Falso na maioria das vezes', value: 2 },
      { emoji: '😕', label: 'Um pouco verdadeiro', value: 3 },
      { emoji: '🙂', label: 'Moderadamente verdadeiro', value: 4 },
      { emoji: '😌', label: 'Verdadeiro na maioria das vezes', value: 5 },
      { emoji: '🛡️', label: 'Descreve-me perfeitamente', value: 6 },
    ],
  },
  {
    id: '5',
    text: 'Eu me sinto confortável sendo quem realmente sou, sem precisar fingir para agradar os outros.',
    options: [
      { emoji: '🎭', label: 'Completamente falso', value: 1 },
      { emoji: '😕', label: 'Falso na maioria das vezes', value: 2 },
      { emoji: '🤏', label: 'Um pouco verdadeiro', value: 3 },
      { emoji: '🙂', label: 'Moderadamente verdadeiro', value: 4 },
      { emoji: '😄', label: 'Verdadeiro na maioria das vezes', value: 5 },
      { emoji: '🌟', label: 'Descreve-me perfeitamente', value: 6 },
    ],
  },
  {
    id: '6',
    text: 'Tenho clareza sobre os objetivos que quero alcançar na minha vida atualmente.',
    options: [
      { emoji: '🌫️', label: 'Completamente falso', value: 1 },
      { emoji: '😕', label: 'Falso na maioria das vezes', value: 2 },
      { emoji: '🤔', label: 'Um pouco verdadeiro', value: 3 },
      { emoji: '🙂', label: 'Moderadamente verdadeiro', value: 4 },
      { emoji: '🚀', label: 'Verdadeiro na maioria das vezes', value: 5 },
      { emoji: '🎯', label: 'Descreve-me perfeitamente', value: 6 },
    ],
  },
  {
    id: '7',
    text: 'Eu consigo reconhecer minhas qualidades sem sentir culpa ou vergonha.',
    options: [
      { emoji: '🙈', label: 'Completamente falso', value: 1 },
      { emoji: '😐', label: 'Falso na maioria das vezes', value: 2 },
      { emoji: '🤏', label: 'Um pouco verdadeiro', value: 3 },
      { emoji: '🙂', label: 'Moderadamente verdadeiro', value: 4 },
      { emoji: '😄', label: 'Verdadeiro na maioria das vezes', value: 5 },
      { emoji: '👑', label: 'Descreve-me perfeitamente', value: 6 },
    ],
  },
  {
    id: '8',
    text: 'Quando recebo críticas, consigo ouvir sem me destruir emocionalmente.',
    options: [
      { emoji: '😵', label: 'Completamente falso', value: 1 },
      { emoji: '🙁', label: 'Falso na maioria das vezes', value: 2 },
      { emoji: '😕', label: 'Um pouco verdadeiro', value: 3 },
      { emoji: '🙂', label: 'Moderadamente verdadeiro', value: 4 },
      { emoji: '💬', label: 'Verdadeiro na maioria das vezes', value: 5 },
      { emoji: '🧘', label: 'Descreve-me perfeitamente', value: 6 },
    ],
  },
  {
    id: '9',
    text: 'Eu consigo perceber padrões repetitivos nos meus relacionamentos e comportamentos.',
    options: [
      { emoji: '🌫️', label: 'Completamente falso', value: 1 },
      { emoji: '😕', label: 'Falso na maioria das vezes', value: 2 },
      { emoji: '🤔', label: 'Um pouco verdadeiro', value: 3 },
      { emoji: '🙂', label: 'Moderadamente verdadeiro', value: 4 },
      { emoji: '🔎', label: 'Verdadeiro na maioria das vezes', value: 5 },
      { emoji: '🧠', label: 'Descreve-me perfeitamente', value: 6 },
    ],
  },
  {
    id: '10',
    text: 'Sinto que estou evoluindo como pessoa ao longo do tempo.',
    options: [
      { emoji: '🥀', label: 'Completamente falso', value: 1 },
      { emoji: '😕', label: 'Falso na maioria das vezes', value: 2 },
      { emoji: '🌱', label: 'Um pouco verdadeiro', value: 3 },
      { emoji: '🙂', label: 'Moderadamente verdadeiro', value: 4 },
      { emoji: '🌿', label: 'Verdadeiro na maioria das vezes', value: 5 },
      { emoji: '🌟', label: 'Descreve-me perfeitamente', value: 6 },
    ],
  },
];
