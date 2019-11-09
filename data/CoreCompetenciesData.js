import CoreCompetenciesStyles from '../compstyles/CoreCompetenciesStyles';

let options = [
    {
        name: 'Communication',
        styles: [CoreCompetenciesStyles.btnCommunication, CoreCompetenciesStyles.btnCommunicationSelected],
        subCategory: [
            {
                sub: 'Communicating',
                profiles: [
                    {
                        level: 1,
                        desc: 'In a safe and supported environment, I respond meaningfully to communication from peers and adults.',
                    },
                    {
                        level: 2,
                        desc: 'In familiar settings, I communicate with peers and adults.',
                    },
                    {
                        level: 3,
                        desc: 'I communicate purposefully, using forms and strategies I have practiced.',
                    },
                    {
                        level: 4,
                        desc: 'I communicate clearly and purposefully, using a variety of forms appropriately.',
                    },
                    {
                        level: 5,
                        desc: 'I communicate confidently, using forms and strategies that show attention to my audience and purpose.    ',
                    },
                    {
                        level: 6,
                        desc: 'I communicate with intentional impact, in well-constructed forms that are effective in terms of my audience and in relation to my purpose.',
                    },
                ],
            },
            {
                sub: 'Collaborating',
                profiles: [
                    {
                        level: 1,
                        desc: 'In familiar situations, I can participate with others.',
                    },
                    {
                        level: 2,
                        desc: 'In familiar situations, I cooperate with others for specific purposes.',
                    },
                    {
                        level: 3,
                        desc: 'I contribute during group activities with peers and share roles and responsibilities to achieve goals.',
                    },
                    {
                        level: 4,
                        desc: 'I can confidently interact and build relationships with other group members to further shared goals.',
                    },
                    {
                        level: 5,
                        desc: 'I can facilitate group processes and encourage collective responsibility for our progress.',
                    },
                    {
                        level: 6,
                        desc: 'I can connect my group with other groups and broader networks for various purposes.',
                    },
                ],
            },
        ],
    },
    {name: 'Thinking',
        styles: [CoreCompetenciesStyles.btnThinking,CoreCompetenciesStyles.btnThinkingSelected],
        subCategory: [
            {
                sub: 'Creative Thinking',
                profiles: [
                    {
                        level: 1,
                        desc: 'I get ideas when I play.',
                    },
                    {
                        level: 2,
                        desc: 'I can get new ideas or build on or combine other people’s ideas to create new things within the constraints of a form, a problem, or materials.',
                    },
                    {
                        level: 3,
                        desc: 'I can get new ideas in areas in which I have an interest and build my skills to make them work.',
                    },
                    {
                        level: 4,
                        desc: 'I can get new ideas or reinterpret others’ ideas in novel ways.',
                    },
                    {
                        level: 5,
                        desc: 'I can think “outside the box” to get innovative ideas and persevere to develop them.',
                    },
                    {
                        level: 6,
                        desc: 'I can develop a body of creative work over time in an area of interest or passion.',
                    },
                ],
            },
            {
                sub: 'Critical & Reflective Thinking',
                profiles: [
                    {
                        level: 1,
                        desc: 'I can explore.',
                    },
                    {
                        level: 2,
                        desc: 'I can use evidence to make simple judgments.',
                    },
                    {
                        level: 3,
                        desc: 'I can ask questions and consider options. I can use my observations, experience, and imagination to draw conclusions and make judgments.',
                    },
                    {
                        level: 4,
                        desc: 'I can gather and combine new evidence with what I already know to develop reasoned conclusions, judgments, or plans..',
                    },
                    {
                        level: 5,
                        desc: 'I can evaluate and use well-chosen evidence to develop interpretations; identify alternatives, perspectives, and implications; and make judgments. I can examine and adjust my thinking.',
                    },
                    {
                        level: 6,
                        desc: 'I can examine evidence from various perspectives to analyze and make well-supported judgments about and interpretations of complex issues.',
                    },
                ],
            },
        ]},
    {name: 'Personal & Social',
        styles: [CoreCompetenciesStyles.btnSocial,CoreCompetenciesStyles.btnSocialSelected],
        subCategory: [
            {
                sub: 'Personal Awareness & Responsibility',
                profiles: [
                    {
                        level: 1,
                        desc: 'I can show a sense of accomplishment and joy, and express some wants, needs, and preferences. I can sometimes recognize my emotions.',
                    },
                    {
                        level: 2,
                        desc: 'I can initiate actions that bring me joy and satisfaction and recognize that I play a role in my well-being.',
                    },
                    {
                        level: 3,
                        desc: 'I can make choices that help me meet my wants and needs and increase my feelings of well-being. I take responsibility for my actions.',
                    },
                    {
                        level: 4,
                        desc: 'I can recognize my strengths and take responsibility for using strategies to focus, manage stress, and accomplish my goals.',
                    },
                    {
                        level: 5,
                        desc: 'I can recognize my strengths and take responsibility for using strategies to focus, manage stress, and accomplish my goals.',
                    },
                    {
                        level: 6,
                        desc: 'I can recognize my strengths and take responsibility for using strategies to focus, manage stress, and accomplish my goals.',
                    },
                ],
            },
            {
                sub: 'Positive Personal & Cultural Identity',
                profiles: [
                    {
                        level: 1,
                        desc: 'I am aware of myself as different from others.',
                    },
                    {
                        level: 2,
                        desc: 'I am aware of different aspects of myself. I can identity people, places, and things that are important to me.',
                    },
                    {
                        level: 3,
                        desc: 'I am aware of different aspects of myself. I can identity people, places, and things that are important to me.',
                    },
                    {
                        level: 4,
                        desc: 'I have pride in who I am. I understand that I am a part of larger communities.',
                    },
                    {
                        level: 5,
                        desc: 'I understand that my identity is influenced by many aspects of my life. I am aware that my values shape my choices and contribute to making me a unique individual.',
                    },
                    {
                        level: 6,
                        desc: 'I can identify how my life experiences have contributed to who I am; I recognize the continuous and evolving nature of my identity.',
                    },
                ],
            },
            {
                sub: 'Social Awareness & Responsibility',
                profiles: [
                    {
                        level: 1,
                        desc: 'I can be aware of others and my surroundings.',
                    },
                    {
                        level: 2,
                        desc: 'In familiar settings, I can interact with others and my surroundings respectfully.',
                    },
                    {
                        level: 3,
                        desc: 'I can interact with others and the environment respectfully and thoughtfully.',
                    },
                    {
                        level: 4,
                        desc: 'I can take purposeful action to support others and the environment.',
                    },
                    {
                        level: 5,
                        desc: 'I can advocate and take action for my communities and the natural world. I expect to make a difference.',
                    },
                    {
                        level: 6,
                        desc: 'I can initiate positive, sustainable change for others and the environment.',
                    },
                ],
            }
        ]
    }
];

export default options;
