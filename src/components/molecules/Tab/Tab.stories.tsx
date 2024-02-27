import Tab from './Tab';

/**@type{import('@storybook/react').Meta} */
export default {
  component: Tab,
};

/**@type{import('@storybook/react').StoryObj} */
export const 기본표시 = {
  args: {
    mode: 'front',
    front: '진행 예약',
    after: '지난 예약',
  },
};