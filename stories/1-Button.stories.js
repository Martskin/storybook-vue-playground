import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton';

export default {
  title: 'Button',
  component: MyButton,
  argTypes: {
    color: { control: { type: 'color' } }
  }
};

export const WithControls = (args) => ({
  components: { MyButton },
  template: '<my-button :color="color" :rounded="rounded">Hello Button</my-button>',
  data() {
    return args;
  },
});
